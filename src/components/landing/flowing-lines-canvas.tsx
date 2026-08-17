"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  phase: number;
};

/**
 * Ambient biotech field. Lightweight canvas layer with cyan particles, links and
 * a slow pointer-reactive drift. Animation is disabled for reduced-motion users.
 */
export function FlowingLinesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;
    let particles: Particle[] = [];

    const seedParticles = () => {
      const count = Math.min(88, Math.max(42, Math.floor(width / 18)));
      particles = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (0.08 + (i % 3) * 0.035),
        vy: (Math.random() - 0.5) * (0.06 + (i % 4) * 0.02),
        size: 0.5 + Math.random() * 1.3,
        alpha: 0.14 + Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedParticles();
    };

    const onPointer = (event: PointerEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 24;
      targetY = (event.clientY / window.innerHeight - 0.5) * 18;
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      pointerX += (targetX - pointerX) * 0.025;
      pointerY += (targetY - pointerY) * 0.025;

      const glow = ctx.createRadialGradient(width * 0.62 + pointerX, height * 0.22 + pointerY, 0, width * 0.62, height * 0.22, Math.max(width, height) * 0.7);
      glow.addColorStop(0, "rgba(34,211,238,0.055)");
      glow.addColorStop(0.45, "rgba(14,165,233,0.018)");
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }

        const px = p.x + pointerX * ((i % 5) / 7);
        const py = p.y + pointerY * ((i % 7) / 9);
        const pulse = 0.65 + Math.sin(time * 0.0008 + p.phase) * 0.35;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(103,232,249,${p.alpha * pulse})`;
        ctx.fill();

        for (let j = i + 1; j < Math.min(particles.length, i + 8); j++) {
          const q = particles[j];
          const qx = q.x + pointerX * ((j % 5) / 7);
          const qy = q.y + pointerY * ((j % 7) / 9);
          const dx = px - qx;
          const dy = py - qy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 125) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(qx, qy);
            ctx.strokeStyle = `rgba(34,211,238,${(1 - dist / 125) * 0.055})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      }

      ctx.globalCompositeOperation = "source-over";
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    draw(performance.now());

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 h-full w-full pointer-events-none" aria-hidden="true" />;
}
