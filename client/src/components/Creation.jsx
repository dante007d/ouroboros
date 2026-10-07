// "DANTE'S CREATION" title card: shown when the app opens and again when the
// game is terminated. Pure CSS animation (letters surface out of the dark,
// a light line sweeps through, everything glitches once and fades).
const TITLE = "DANTE'S CREATION";
const WORDS = TITLE.split(' ');

const Creation = () => (
  <div className="creation" role="img" aria-label={TITLE}>
    <div className="creation-ring" />
    <div className="creation-title">
      {WORDS.map((word, w) => {
        // keep the letter-by-letter reveal continuous across both words
        const start = WORDS.slice(0, w).join(' ').length + (w ? 1 : 0);
        return (
          <span key={w} className="creation-word">
            {[...word].map((ch, i) => (
              <span key={i} style={{ animationDelay: `${0.25 + (start + i) * 0.09}s` }}>{ch}</span>
            ))}
          </span>
        );
      })}
    </div>
    <div className="creation-line" />
  </div>
);

export const CREATION_MS = 4200;
export default Creation;
