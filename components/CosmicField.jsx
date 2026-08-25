"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 70;

export default function CosmicField({ reducedMotion }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: -9999, y: -9999, tx: -9999, ty: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initParticles = () => {
      particles.current = Array.from({ length: PARTICLE_COUNT }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.3,
        vx: (Math.random() - 0.5) * 0.06,
        vy: (Math.random() - 0.5) * 0.06,
        o: Math.random() * 0.5 + 0.15,
      }));
    };

    resize();
    initParticles();

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    if (reducedMotion) {
      // one still, dim frame — no loop, no cursor tracking
      ctx.clearRect(0, 0, width, height);
      particles.current.forEach((p) => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(245,245,247,${p.o * 0.5})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      return () => window.removeEventListener("resize", onResize);
    }

    const onPointer = (e) => {
      const rect = canvas.getBoundingClientRect();
      const point = e.touches ? e.touches[0] : e;
      mouse.current.tx = point.clientX - rect.left;
      mouse.current.ty = point.clientY - rect.top;
    };
    window.addEventListener("pointermove", onPointer);
    window.addEventListener("touchmove", onPointer, { passive: true });

    const draw = () => {
      // ease the tracked point rather than snapping to it
      mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.08;
      mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      if (mouse.current.x > -9000) {
        const glow = ctx.createRadialGradient(
          mouse.current.x,
          mouse.current.y,
          0,
          mouse.current.x,
          mouse.current.y,
          260
        );
        glow.addColorStop(0, "rgba(63,61,242,0.10)");
        glow.addColorStop(0.55, "rgba(0,194,178,0.05)");
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        if (mouse.current.x > -9000) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 180) {
            p.x += dx * 0.0025;
            p.y += dy * 0.0025;
          }
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(245,245,247,${p.o})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("touchmove", onPointer);
      cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className="cosmic-field" aria-hidden="true" />;
}