export function ArrowIcon({
  className,
  size = 16,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M2 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function DeliveryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-orange">
      <rect x="9" y="2" width="6" height="6" stroke="currentColor" strokeWidth="1.75" />
      <rect x="2" y="16" width="6" height="6" stroke="currentColor" strokeWidth="1.75" />
      <rect x="16" y="16" width="6" height="6" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 8 V12 M12 12 L5 16 M12 12 L19 16" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function WorkflowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-orange">
      <path
        d="M2 5 H8 L12 9 H18 M18 9 V5 H22 M18 9 V15 H22 M12 9 L8 19 H2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function EducationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-orange">
      <path
        d="M4 20 L12 15 L20 20 M4 14 L12 9 L20 14 M4 8 L12 3 L20 8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 text-orange">
      <path d="M3 11 L8 16 L17 5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function ChevronDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="text-faint">
      <path d="M2 4 L6 8 L10 4" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}
