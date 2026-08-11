const words = [
  "HAIRCUTS",
  "SHAVES",
  "FACIALS",
  "COLOUR",
  "MASSAGE",
  "GROOMING",
];

export default function Marquee() {
  const track = [...words, ...words];

  return (
    <div className="animate-pause relative overflow-hidden border-y border-border bg-surface-2 py-5">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {track.map((word, i) => (
          <span
            key={i}
            className="font-display flex items-center gap-10 text-2xl text-white/25 sm:text-3xl"
          >
            {word}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
