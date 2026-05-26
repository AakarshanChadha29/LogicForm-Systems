export function NeuralBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(200,168,76,0.065)_0%,transparent_28%,transparent_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(ellipse_90%_55%_at_50%_-12%,rgba(200,168,76,0.08),transparent_62%)]" />
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(220, 204, 158, 0.05) 1px, transparent 1px),
            linear-gradient(to right, rgba(220, 204, 158, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
