const mono = "var(--font-plex-mono), Menlo, monospace";

export function OrchestrationDiagram() {
  return (
    <svg
      width="560"
      height="440"
      viewBox="0 0 560 440"
      fill="none"
      role="img"
      aria-label="Diagram: an orchestrator plans, routes, and verifies work across research, build, and review agents; output passes a human gate before shipping, with review feedback looping back to the orchestrator."
      className="block max-w-full"
    >
      <path d="M196 24 H348 L364 40 V84 H196 Z" fill="#14110D" stroke="rgba(242,237,230,0.25)" />
      <path d="M340 24 H348 L364 40 V48 Z" fill="#FF8231" />
      <text x="280" y="52" textAnchor="middle" fill="#F2EDE6" fontFamily={mono} fontSize="12" letterSpacing="2">
        ORCHESTRATOR
      </text>
      <text x="280" y="71" textAnchor="middle" fill="#77706A" fontFamily={mono} fontSize="10">
        plans &#183; routes &#183; verifies
      </text>
      <path
        d="M280 84 V112 M108 112 H452 M108 112 V148 M280 112 V148 M452 112 V148"
        stroke="rgba(242,237,230,0.22)"
        strokeWidth="1.5"
      />
      <path d="M24 148 H180 L192 160 V212 H24 Z" fill="#14110D" stroke="rgba(242,237,230,0.25)" />
      <text x="40" y="175" fill="#77706A" fontFamily={mono} fontSize="10" letterSpacing="1.5">
        AGENT &#183; 01
      </text>
      <text x="40" y="196" fill="#F2EDE6" fontFamily={mono} fontSize="13" letterSpacing="1">
        RESEARCH
      </text>
      <rect x="166" y="188" width="8" height="8" fill="#FF8231" />
      <path d="M196 148 H352 L364 160 V212 H196 Z" fill="#14110D" stroke="rgba(242,237,230,0.25)" />
      <text x="212" y="175" fill="#77706A" fontFamily={mono} fontSize="10" letterSpacing="1.5">
        AGENT &#183; 02
      </text>
      <text x="212" y="196" fill="#F2EDE6" fontFamily={mono} fontSize="13" letterSpacing="1">
        BUILD
      </text>
      <rect x="338" y="188" width="8" height="8" fill="#FF8231" />
      <path d="M368 148 H524 L536 160 V212 H368 Z" fill="#14110D" stroke="rgba(242,237,230,0.25)" />
      <text x="384" y="175" fill="#77706A" fontFamily={mono} fontSize="10" letterSpacing="1.5">
        AGENT &#183; 03
      </text>
      <text x="384" y="196" fill="#F2EDE6" fontFamily={mono} fontSize="13" letterSpacing="1">
        REVIEW
      </text>
      <rect x="510" y="188" width="8" height="8" fill="#FF8231" />
      <path
        d="M108 212 V240 M280 212 V240 M452 212 V240 M108 240 H452 M280 240 V268"
        stroke="rgba(242,237,230,0.22)"
        strokeWidth="1.5"
      />
      <path d="M280 268 L298 286 L280 304 L262 286 Z" stroke="#FF8231" strokeWidth="1.5" fill="none" />
      <text x="312" y="290" fill="#FF8231" fontFamily={mono} fontSize="10" letterSpacing="1.5">
        HUMAN GATE
      </text>
      <path d="M280 304 V332" stroke="rgba(242,237,230,0.22)" strokeWidth="1.5" />
      <path d="M536 180 H548 V54 H364" stroke="#FF8231" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
      <text x="456" y="46" fill="#FF8231" fontFamily={mono} fontSize="9" letterSpacing="1.5" opacity="0.8">
        FEEDBACK
      </text>
      <path d="M196 332 H348 L364 348 V392 H196 Z" fill="rgba(255,130,49,0.08)" stroke="#FF8231" />
      <text x="280" y="360" textAnchor="middle" fill="#F2EDE6" fontFamily={mono} fontSize="12" letterSpacing="2">
        SHIPPED WORK
      </text>
      <text x="280" y="379" textAnchor="middle" fill="#77706A" fontFamily={mono} fontSize="10">
        reviewed &#183; logged &#183; yours
      </text>
    </svg>
  );
}
