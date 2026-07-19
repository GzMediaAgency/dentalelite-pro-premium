/**
 * components/shared/section-divider.tsx
 * Transition visuelle entre deux sections de couleurs différentes (ex: le
 * Hero sombre et la section suivante claire), plutôt qu'une coupure nette.
 * `flip` inverse la courbe pour s'adapter au sens de la transition.
 */
export function SectionDivider({
  fromColor = "var(--color-primary)",
  toColor = "var(--color-background)",
  flip = false,
}: {
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
}) {
  return (
    <div
      className="relative h-16 w-full sm:h-24"
      style={{ backgroundColor: fromColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={`absolute inset-0 h-full w-full ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
