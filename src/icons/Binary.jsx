export default function Binary({
  className = "stroke-black",
  width = 24,
  height = 24,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="14" y="14" width="4" height="6" rx="2"></rect>
      <rect x="6" y="4" width="4" height="6" rx="2"></rect>
      <path d="M6 20h4"></path>
      <path d="M14 10h4"></path>
      <path d="M6 14h2v6"></path>
      <path d="M14 4h2v6"></path>
    </svg>
  );
}
