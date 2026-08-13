export function MeCard() {
  return (
    <div className="flex flex-col gap-10 px-8 py-8 md:px-10">
      <div className="grid items-start gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="bg-ink/5 min-h-[8rem]" />
        <div className="bg-ink/10 aspect-[4/5] w-full" />
      </div>

      <section>
        <div className="bg-ink/5 mb-3 h-3 w-28" />
        <div className="border-rule mb-5 border-t" />
        <div className="bg-ink/5 h-16 w-full" />
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="border-ink rounded-sm border px-5 py-2 text-sm"
          >
            Download CV
          </button>
          <span className="font-mono text-muted text-[12px] tracking-wide">
            GitHub · LinkedIn
          </span>
        </div>
      </section>
    </div>
  );
}
