"use client";

import { useState } from "react";

const NODES = [
  {
    id: "software",
    label: "SOFTWARE",
    angle: 0,
    desc: "Websites and applications engineered to scale, not just ship.",
  },
  {
    id: "ai-agents",
    label: "AI AGENTS",
    angle: 72,
    desc: "Digital workers that qualify leads, answer customers and run workflows.",
  },
  {
    id: "automation",
    label: "AUTOMATION",
    angle: 144,
    desc: "Your operations, connected — CRM, ops and follow-up on autopilot.",
  },
  {
    id: "systems",
    label: "SYSTEMS",
    angle: 216,
    desc: "Build, automate and grow as one system, not a stack of disconnected tools.",
  },
  {
    id: "growth",
    label: "GROWTH",
    angle: 288,
    desc: "Conversion, analytics and lead gen tuned to compound over time.",
  },
];

export default function OrbitSystem({ active }) {
  const [openId, setOpenId] = useState(null);
  const openNode = NODES.find((n) => n.id === openId);

  const toggle = (id) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <div className={`orbit-system ${active ? "is-active" : ""}`}>
      <div className="orbit-ring">
        {NODES.map((node) => (
          <div key={node.id} className="orbit-slot" style={{ "--angle": `${node.angle}deg` }}>
            <div className="orbit-arm">
              <div className="orbit-counter">
                <button
                  type="button"
                  className={`orbit-node ${openId === node.id ? "is-open" : ""}`}
                  onClick={() => toggle(node.id)}
                  aria-expanded={openId === node.id}
                  aria-controls="orbit-card"
                >
                  <span className="orbit-node-label">{node.label}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="orbit-card-layer" aria-live="polite">
        {openNode && (
          <div id="orbit-card" className="orbit-card" role="dialog" aria-label={openNode.label}>
            <button
              type="button"
              className="orbit-card-close"
              onClick={() => setOpenId(null)}
              aria-label="Close"
            >
              ×
            </button>
            <span className="orbit-card-eyebrow">{openNode.label}</span>
            <p className="orbit-card-desc">{openNode.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}