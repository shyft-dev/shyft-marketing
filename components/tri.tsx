export function Tri({ size = 12, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      aria-hidden="true"
      className={className}
    >
      <path d="M0 0 L12 0 L0 12 Z" fill="currentColor" />
    </svg>
  );
}
