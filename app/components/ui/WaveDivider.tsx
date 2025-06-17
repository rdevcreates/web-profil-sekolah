// components/ui/WaveDivider.tsx
export default function WaveDivider({
  color = "white",
  flip = false,
}: {
  color?: string;
  flip?: boolean;
}) {
  return (
    <div className={`overflow-hidden leading-none -mt-1`}>
      <svg
        className={`w-full h-20 text-${color} ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 C600,100 600,0 1200,100 L1200,0 L0,0 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
