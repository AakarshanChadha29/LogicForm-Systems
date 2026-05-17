export function NeuralBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(79,124,172,0.07),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(to right, rgba(255,255,255,0.022) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 88%)",
        }}
      />
    </div>
  );
}
