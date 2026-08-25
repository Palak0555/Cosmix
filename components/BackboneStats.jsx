"use client";

import { useEffect, useRef, useState } from "react";

const MODES = {
  midnight: {
    label: "Midnight",
    icon: "☼",

    background: [
      "#000000",
      "#010504",
      "#061714",
    ],

    ray: "#f1fffc",
    rayOpacity: 1,

    pulse: "#16e8c5",
    pulseGlow: "rgba(20,232,198,.85)",

    atmosphere: "rgba(20,232,198,.14)",
    atmosphereSoft: "rgba(20,232,198,.035)",

    panel: "rgba(7,14,13,.94)",
    panelBorder: "rgba(23,232,198,.20)",
    panelText: "#ecfffa",
    panelMuted: "rgba(220,255,248,.55)",
  },

  day: {
    label: "Day",
    icon: "☼",

    background: [
      "#ffffff",
      "#f8fbfa",
      "#eef5f3",
    ],

    ray: "#182321",
    rayOpacity: 0.72,

    pulse: "#00a98f",
    pulseGlow: "rgba(0,169,143,.55)",

    atmosphere: "rgba(0,169,143,.11)",
    atmosphereSoft: "rgba(0,169,143,.025)",

    panel: "rgba(250,253,252,.96)",
    panelBorder: "rgba(0,80,68,.15)",
    panelText: "#10201d",
    panelMuted: "rgba(16,32,29,.55)",
  },

  ember: {
    label: "Ember",
    icon: "☼",

    background: [
      "#000000",
      "#080503",
      "#120803",
    ],

    ray: "#fff4e8",
    rayOpacity: 0.95,

    pulse: "#ff8a24",
    pulseGlow: "rgba(255,138,36,.8)",

    atmosphere: "rgba(255,120,25,.13)",
    atmosphereSoft: "rgba(255,120,25,.035)",

    panel: "rgba(17,10,5,.95)",
    panelBorder: "rgba(255,138,36,.22)",
    panelText: "#fff5e9",
    panelMuted: "rgba(255,235,215,.55)",
  },

  signal: {
    label: "Signal",
    icon: "☼",

    background: [
      "#000000",
      "#070202",
      "#130304",
    ],

    ray: "#fff2f3",
    rayOpacity: 0.95,

    pulse: "#ff4050",
    pulseGlow: "rgba(255,64,80,.8)",

    atmosphere: "rgba(255,50,65,.12)",
    atmosphereSoft: "rgba(255,50,65,.03)",

    panel: "rgba(18,5,7,.95)",
    panelBorder: "rgba(255,64,80,.22)",
    panelText: "#fff2f3",
    panelMuted: "rgba(255,220,224,.55)",
  },
};

export default function FiberField() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  const [mode, setMode] =
    useState("midnight");

  const [open, setOpen] =
    useState(false);

  const currentMode =
    MODES[mode];

  const modeRef =
    useRef(currentMode);

  const mouse = useRef({
    x: 0,
    y: 0,
    tx: 0,
    ty: 0,
  });

  useEffect(() => {
    modeRef.current =
      currentMode;
  }, [currentMode]);

  useEffect(() => {
    const canvas =
      canvasRef.current;

    const wrap =
      wrapRef.current;

    if (!canvas || !wrap)
      return;

    const ctx =
      canvas.getContext("2d");

    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;

    /*
    |--------------------------------------------------------------------------
    | RAYS
    |--------------------------------------------------------------------------
    */

    const rays = Array.from(
      { length: 150 },
      (_, i) => {
        const t = i / 149;

        return {
          angle:
            -Math.PI / 2 +
            t * Math.PI +
            Math.sin(i * 4.13) *
              0.009,

          length:
            120 +
            Math.abs(
              Math.sin(
                i * 2.71
              )
            ) *
              150 +
            (i % 8) * 9,

          width:
            i % 14 === 0
              ? 0.9
              : i % 5 === 0
              ? 0.55
              : 0.38,

          opacity:
            i % 11 === 0
              ? 0.48
              : i % 4 === 0
              ? 0.25
              : 0.12,

          phase:
            i * 0.37,

          speed:
            0.00014 +
            (i % 7) *
              0.000012,

          particle:
            i % 13 === 0 ||
            i % 29 === 0,
        };
      }
    );

    /*
    |--------------------------------------------------------------------------
    | RESIZE
    |--------------------------------------------------------------------------
    */

    const resize = () => {
      const rect =
        wrap.getBoundingClientRect();

      dpr = Math.min(
        window.devicePixelRatio ||
          1,
        2
      );

      width = rect.width;
      height = rect.height;

      canvas.width =
        width * dpr;

      canvas.height =
        height * dpr;

      canvas.style.width =
        `${width}px`;

      canvas.style.height =
        `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );
    };

    resize();

    const observer =
      new ResizeObserver(
        resize
      );

    observer.observe(wrap);

    /*
    |--------------------------------------------------------------------------
    | POINTER
    |--------------------------------------------------------------------------
    */

    const onPointerMove =
      (event) => {
        const rect =
          wrap.getBoundingClientRect();

        mouse.current.tx =
          (event.clientX -
            rect.left) /
            rect.width -
          0.5;

        mouse.current.ty =
          (event.clientY -
            rect.top) /
            rect.height -
          0.5;
      };

    const onPointerLeave =
      () => {
        mouse.current.tx = 0;
        mouse.current.ty = 0;
      };

    wrap.addEventListener(
      "pointermove",
      onPointerMove
    );

    wrap.addEventListener(
      "pointerleave",
      onPointerLeave
    );

    /*
    |--------------------------------------------------------------------------
    | DRAW
    |--------------------------------------------------------------------------
    */

    const draw = (time) => {
      const m =
        mouse.current;

      const theme =
        modeRef.current;

      m.x +=
        (m.tx - m.x) *
        0.025;

      m.y +=
        (m.ty - m.y) *
        0.025;

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      /*
      |--------------------------------------------------------------------------
      | BACKGROUND
      |--------------------------------------------------------------------------
      */

      const bg =
        ctx.createLinearGradient(
          0,
          0,
          0,
          height
        );

      bg.addColorStop(
        0,
        theme.background[0]
      );

      bg.addColorStop(
        0.48,
        theme.background[1]
      );

      bg.addColorStop(
        1,
        theme.background[2]
      );

      ctx.fillStyle = bg;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      /*
      |--------------------------------------------------------------------------
      | MAIN ATMOSPHERE
      |--------------------------------------------------------------------------
      */

      const originX =
        width / 2 +
        m.x * 10;

      const originY =
        height - 8;

      const atmosphere =
        ctx.createRadialGradient(
          originX,
          originY,
          0,
          originX,
          originY,
          Math.min(
            width * 0.48,
            360
          )
        );

      atmosphere.addColorStop(
        0,
        theme.atmosphere
      );

      atmosphere.addColorStop(
        0.25,
        theme.atmosphereSoft
      );

      atmosphere.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      ctx.fillStyle =
        atmosphere;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      /*
      |--------------------------------------------------------------------------
      | RAYS
      |--------------------------------------------------------------------------
      */

      ctx.save();

      ctx.translate(
        m.x * 10,
        m.y * 4
      );

      const scale =
        Math.min(
          width / 900,
          1
        );

      rays.forEach(
        (ray) => {
          const breath =
            0.74 +
            Math.sin(
              time *
                ray.speed +
                ray.phase
            ) *
              0.26;

          const len =
            ray.length *
            scale;

          const x =
            originX +
            Math.sin(
              ray.angle
            ) *
              len;

          const y =
            originY -
            Math.cos(
              ray.angle
            ) *
              len;

          ctx.beginPath();

          ctx.moveTo(
            originX,
            originY
          );

          ctx.lineTo(x, y);

          ctx.strokeStyle =
            hexToRgba(
              theme.ray,
              ray.opacity *
                breath *
                theme.rayOpacity
            );

          ctx.lineWidth =
            ray.width;

          ctx.lineCap =
            "round";

          ctx.stroke();

          /*
          |--------------------------------------------------------------------------
          | PARTICLES
          |--------------------------------------------------------------------------
          */

          if (ray.particle) {
            const travel =
              (time *
                ray.speed *
                0.8 +
                ray.phase) %
              1;

            const fade =
              Math.sin(
                travel *
                  Math.PI
              );

            const px =
              originX +
              (x - originX) *
                travel;

            const py =
              originY +
              (y - originY) *
                travel;

            ctx.beginPath();

            ctx.arc(
              px,
              py,
              1.05,
              0,
              Math.PI * 2
            );

            ctx.fillStyle =
              hexToRgba(
                theme.ray,
                fade * 0.5
              );

            ctx.fill();
          }
        }
      );

      /*
      |--------------------------------------------------------------------------
      | ACCENT PULSE
      |--------------------------------------------------------------------------
      */

      const pulse =
        0.75 +
        Math.sin(
          time * 0.0012
        ) *
          0.25;

      const halo =
        ctx.createRadialGradient(
          originX,
          originY,
          0,
          originX,
          originY,
          48
        );

      halo.addColorStop(
        0,
        hexToRgba(
          theme.pulse,
          0.22 * pulse
        )
      );

      halo.addColorStop(
        0.42,
        hexToRgba(
          theme.pulse,
          0.07 * pulse
        )
      );

      halo.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      ctx.fillStyle =
        halo;

      ctx.beginPath();

      ctx.arc(
        originX,
        originY,
        48,
        0,
        Math.PI * 2
      );

      ctx.fill();

      /*
      |--------------------------------------------------------------------------
      | CORE
      |--------------------------------------------------------------------------
      */

      ctx.shadowColor =
        theme.pulseGlow;

      ctx.shadowBlur = 12;

      ctx.beginPath();

      ctx.arc(
        originX,
        originY,
        2.5 * pulse,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        theme.pulse;

      ctx.fill();

      ctx.shadowBlur = 0;

      /*
      |--------------------------------------------------------------------------
      | RING
      |--------------------------------------------------------------------------
      */

      const ring =
        4 +
        ((time * 0.018) %
          14);

      const ringOpacity =
        Math.max(
          0,
          1 -
            (ring - 4) /
              14
        );

      ctx.beginPath();

      ctx.arc(
        originX,
        originY,
        ring,
        0,
        Math.PI * 2
      );

      ctx.strokeStyle =
        hexToRgba(
          theme.pulse,
          ringOpacity * 0.26
        );

      ctx.lineWidth = 0.7;

      ctx.stroke();

      ctx.restore();

      /*
      |--------------------------------------------------------------------------
      | TOP FADE
      |--------------------------------------------------------------------------
      */

      const fade =
        ctx.createLinearGradient(
          0,
          0,
          0,
          height * 0.48
        );

      if (mode === "day") {
        fade.addColorStop(
          0,
          "rgba(255,255,255,1)"
        );

        fade.addColorStop(
          0.58,
          "rgba(255,255,255,.82)"
        );
      } else {
        fade.addColorStop(
          0,
          "rgba(0,0,0,1)"
        );

        fade.addColorStop(
          0.58,
          "rgba(0,0,0,.82)"
        );
      }

      fade.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      ctx.fillStyle = fade;

      ctx.fillRect(
        0,
        0,
        width,
        height * 0.48
      );

      raf =
        requestAnimationFrame(
          draw
        );
    };

    raf =
      requestAnimationFrame(
        draw
      );

    return () => {
      cancelAnimationFrame(
        raf
      );

      observer.disconnect();

      wrap.removeEventListener(
        "pointermove",
        onPointerMove
      );

      wrap.removeEventListener(
        "pointerleave",
        onPointerLeave
      );
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{
        position: "relative",
        width: "100%",
        height: "300px",
        overflow: "hidden",

        background:
          mode === "day"
            ? "#ffffff"
            : "#000000",

        transition:
          "background .6s ease",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      {/* =====================================================
          GLOWING THEME BUTTON
          ===================================================== */}

      <button
        type="button"
        onClick={() =>
          setOpen(!open)
        }
        aria-label="Animation themes"
        style={{
          position: "absolute",

          /*
           * SHIFTED LEFT
           */
          right: "42px",
          top: "18px",

          width: "34px",
          height: "34px",

          borderRadius: "50%",

          /*
           * ALWAYS DARK.
           * NO WHITE TRANSFORMATION.
           */
          border:
            "1px solid rgba(20,232,198,.28)",

          background:
            "rgba(4,18,16,.58)",

          color: "#16e8c5",

          display: "grid",
          placeItems: "center",

          fontSize: "15px",

          cursor: "pointer",

          backdropFilter:
            "blur(14px)",

          WebkitBackdropFilter:
            "blur(14px)",

          /*
           * TEAL GLOW
           */
          boxShadow:
            "0 0 14px rgba(20,232,198,.16), inset 0 0 12px rgba(20,232,198,.05)",

          textShadow:
            "0 0 9px rgba(20,232,198,.95), 0 0 18px rgba(20,232,198,.45)",

          transition:
            "border-color .35s ease, box-shadow .35s ease",

          zIndex: 20,
        }}
      >
        ☼
      </button>

      {/* =====================================================
          THEME PANEL
          ===================================================== */}

      {open && (
        <div
          style={{
            position: "absolute",

            right: "42px",
            top: "60px",

            width: "170px",

            padding: "8px",

            borderRadius: "12px",

            border:
              `1px solid ${currentMode.panelBorder}`,

            background:
              currentMode.panel,

            boxShadow:
              "0 18px 50px rgba(0,0,0,.3)",

            backdropFilter:
              "blur(18px)",

            WebkitBackdropFilter:
              "blur(18px)",

            zIndex: 20,
          }}
        >
          <div
            style={{
              padding:
                "7px 9px 9px",

              fontSize: "9px",

              textTransform:
                "uppercase",

              letterSpacing:
                ".15em",

              color:
                currentMode.panelMuted,
            }}
          >
            Appearance
          </div>

          {Object.entries(
            MODES
          ).map(
            ([key, theme]) => {
              const active =
                mode === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setMode(key);
                    setOpen(false);
                  }}
                  style={{
                    width: "100%",

                    display: "flex",

                    alignItems:
                      "center",

                    gap: "9px",

                    padding:
                      "8px 9px",

                    border: "none",

                    borderRadius: "7px",

                    background:
                      active
                        ? "rgba(255,255,255,.08)"
                        : "transparent",

                    color:
                      active
                        ? currentMode.panelText
                        : currentMode.panelMuted,

                    cursor:
                      "pointer",

                    textAlign:
                      "left",

                    fontSize: "11px",
                  }}
                >
                  <span
                    style={{
                      width: "18px",
                      height: "18px",

                      borderRadius:
                        "50%",

                      display:
                        "grid",

                      placeItems:
                        "center",

                      background:
                        theme.pulse,

                      color:
                        "#ffffff",

                      fontSize: "9px",

                      boxShadow:
                        `0 0 8px ${theme.pulse}`,
                    }}
                  >
                    ☼
                  </span>

                  <span
                    style={{
                      flex: 1,
                    }}
                  >
                    {theme.label}
                  </span>

                  {active && (
                    <span
                      style={{
                        fontSize:
                          "10px",

                        color:
                          theme.pulse,
                      }}
                    >
                      ✓
                    </span>
                  )}
                </button>
              );
            }
          )}
        </div>
      )}

      {/* =====================================================
          BOTTOM FADE
          ===================================================== */}

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "45px",

          background:
            mode === "day"
              ? "linear-gradient(180deg,transparent,rgba(255,255,255,.25))"
              : "linear-gradient(180deg,transparent,rgba(0,0,0,.35))",

          pointerEvents: "none",
        }}
      />
    </div>
  );
}

function hexToRgba(
  hex,
  alpha
) {
  const value =
    hex.replace("#", "");

  const r = parseInt(
    value.substring(0, 2),
    16
  );

  const g = parseInt(
    value.substring(2, 4),
    16
  );

  const b = parseInt(
    value.substring(4, 6),
    16
  );

  return `rgba(${r},${g},${b},${alpha})`;
}