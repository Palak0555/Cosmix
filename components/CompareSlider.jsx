"use client";

import { useState, useRef, useCallback } from "react";

export default function CompareSlider() {
  const [pct, setPct] = useState(50);
  const boxRef = useRef(null);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX) => {
    const rect = boxRef.current.getBoundingClientRect();
    let p = ((clientX - rect.left) / rect.width) * 100;
    p = Math.max(4, Math.min(96, p));
    setPct(p);
  }, []);

  const onDown = (e) => {
    draggingRef.current = true;
    setFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onMove = (e) => {
    if (!draggingRef.current) return;
    setFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onUp = () => {
    draggingRef.current = false;
  };

  return (
    <div className="compare-section wrap" id="compare">
      <div
        className="compare"
        ref={boxRef}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
      >
        <div className="pane before">
          <div className="mock-nav">
            <span>JMR Realty Group</span>
            <span>Home · Listings · About · Contact</span>
          </div>
          <div className="mock-body">
            <h3>Welcome to Our Website</h3>
            <p>Serving the area since 2004. Call us for all your real estate needs. Se habla espanol.</p>
            <div className="before-tags">
              <span>Built 2016</span>
              <span>Not mobile-friendly</span>
              <span>No booking</span>
            </div>
            <div className="mock-btn">Contact Page →</div>
          </div>
        </div>

        <div className="pane after" style={{ clipPath: `inset(0 0 0 ${pct}%)` }}>
          <div className="mock-nav">
            <span>JMR Realty Group</span>
            <span>Listings · Book a tour · Contact</span>
          </div>
          <div className="mock-body">
            <h3>Find your next home in Tampa Bay.</h3>
            <p>Browse live listings, book a tour in two taps, and get a reply the same day.</p>
            <div className="mock-btn">Book a tour</div>
            <div className="after-chip">
              <span className="dot"></span> Rebuilt by Trine · 6 days
            </div>
          </div>
        </div>

        <div className="handle" style={{ left: `${pct}%` }}>
          <div className="line"></div>
          <div className="grip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0b0b12" strokeWidth="2">
              <path d="M8 5l-6 7 6 7M16 5l6 7-6 7" />
            </svg>
          </div>
        </div>

        <span className="cmp-label label-before">Before</span>
        <span className="cmp-label label-after">After</span>
      </div>
      <p className="compare-caption">
        Drag the slider — this is the same audit we run on every prospect before we ever pitch them.
      </p>
    </div>
  );
}
