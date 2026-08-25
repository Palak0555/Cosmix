"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+";

/**
 * Renders `text`, scrambling through random glyphs before each character
 * locks into place, left to right. Pass `active` to trigger a run, and a
 * per-item `delay` (ms) to stagger a group of these.
 */
export default function DecodeText({ text, active, delay = 0, iterations = 8, reducedMotion = false }) {
  const [display, setDisplay] = useState(reducedMotion ? text : "");
  const frameRef = useRef(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(text);
      return;
    }
    if (!active) {
      setDisplay("");
      return undefined;
    }

    let resolved = 0;
    frameRef.current = 0;

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        let out = "";
        for (let i = 0; i < text.length; i++) {
          if (text[i] === " ") {
            out += " ";
          } else if (i < resolved) {
            out += text[i];
          } else {
            out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
        }
        setDisplay(out);
        frameRef.current += 1;
        if (frameRef.current % iterations === 0) resolved += 1;
        if (resolved > text.length) {
          clearInterval(intervalRef.current);
          setDisplay(text);
        }
      }, 32);
    }, delay);

    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, [active, text, delay, iterations, reducedMotion]);

  return <span className="decode-text">{display}</span>;
}