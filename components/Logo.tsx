/**
 * Compact logo: green pill, smooth slanted heart left of SHEMB GROUP. Pakistani colors. Right padding so B isn’t cut off.
 */
export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 98 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Green rectangle — enough right padding so B isn’t cut off */}
      <rect
        x="0"
        y="0"
        width="98"
        height="34"
        rx="8"
        fill="#0d5c3d"
      />

      {/* Classic heart: two lobes top, point bottom — proportionate, slight slant */}
      <path
        d="M12 6 C12 3 14 1 16 3 C18 1 20 3 20 6 C20 10 12 15 12 15 C12 15 4 10 4 6 C4 3 6 1 8 3 C10 1 12 3 12 6 Z"
        fill="white"
        transform="translate(14, 19) rotate(-6) scale(1.1) translate(-12, -7.5)"
      />

      {/* SHEMB — white */}
      <text
        x="30"
        y="21"
        fill="#FFFFFF"
        fontSize="17"
        fontWeight="800"
        letterSpacing="0.05em"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        SHEMB
      </text>

      {/* Group — gold */}
      <text
        x="30"
        y="31"
        fill="#F4C430"
        fontSize="9"
        fontWeight="700"
        letterSpacing="0.15em"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        GROUP
      </text>
    </svg>
  );
}
