"use client"

import { useEffect, useRef } from "react"

const FLAG_W = 1900
const FLAG_H = 1000

function drawStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  ctx.beginPath()
  for (let i = 0; i < 10; i++) {
    const radius = i % 2 === 0 ? r : r * 0.4
    const angle = (i * Math.PI) / 5 - Math.PI / 2
    ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle))
  }
  ctx.closePath()
  ctx.fill()
}

function buildFlagCanvas(): HTMLCanvasElement {
  const oc = document.createElement("canvas")
  oc.width = FLAG_W
  oc.height = FLAG_H
  const ctx = oc.getContext("2d")!

  // 13 stripes, starting red
  const stripeH = FLAG_H / 13
  for (let i = 0; i < 13; i++) {
    ctx.fillStyle = i % 2 === 0 ? "#B22234" : "#FFFFFF"
    ctx.fillRect(0, i * stripeH, FLAG_W, stripeH)
  }

  // Canton: width = 2/5 flag, height = 7 stripes
  const cantonW = FLAG_W * 0.4
  const cantonH = stripeH * 7
  ctx.fillStyle = "#3C3B6E"
  ctx.fillRect(0, 0, cantonW, cantonH)

  // 50 stars: 9 rows alternating 6-5-6-5-6-5-6-5-6
  ctx.fillStyle = "#FFFFFF"
  const kx = cantonW / 12
  const ky = cantonH / 10
  const starR = FLAG_H * 0.022

  for (let row = 0; row < 9; row++) {
    const is6 = row % 2 === 0
    const count = is6 ? 6 : 5
    const xStart = is6 ? kx : 2 * kx
    const y = ky * (row + 1)
    for (let col = 0; col < count; col++) {
      drawStar(ctx, xStart + col * 2 * kx, y, starR)
    }
  }

  return oc
}

interface WavingFlagProps {
  className?: string
}

export function WavingFlag({ className }: WavingFlagProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    if (!ctx) return

    const flag = buildFlagCanvas()
    let phase = 0
    let raf: number

    function resize() {
      canvas!.width = canvas!.offsetWidth || window.innerWidth
      canvas!.height = canvas!.offsetHeight || window.innerHeight
    }

    function tick() {
      const W = canvas!.width
      const H = canvas!.height

      ctx.clearRect(0, 0, W, H)

      // Cover: scale so flag fills canvas in both dimensions
      const scale = Math.max(W / FLAG_W, H / FLAG_H)
      const scaledW = FLAG_W * scale
      const scaledH = FLAG_H * scale
      const offsetX = (W - scaledW) / 2
      const offsetY = (H - scaledH) / 2

      // Max wave amplitude in canvas pixels — modest so it's cinematic
      const maxAmp = H * 0.055

      for (let x = 0; x < W; x++) {
        // Map canvas x → flag source x
        const flagX = (x - offsetX) / scale
        if (flagX < 0 || flagX >= FLAG_W) continue

        // Wave grows from left (pinned) to right (free end)
        const progress = flagX / FLAG_W
        const amp = maxAmp * Math.pow(progress, 1.4)
        const yShift = Math.sin(progress * Math.PI * 3.5 - phase) * amp

        ctx.drawImage(
          flag,
          Math.floor(flagX), 0, 1, FLAG_H,
          x, offsetY + yShift, 1, scaledH,
        )
      }

      phase += 0.035
      raf = requestAnimationFrame(tick)
    }

    resize()
    tick()

    const observer = new ResizeObserver(() => {
      resize()
    })
    observer.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", imageRendering: "auto" }}
    />
  )
}
