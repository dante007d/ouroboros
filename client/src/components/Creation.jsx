import { useEffect, useState } from 'react';

// Opening / termination sequence: the DANTE'S logo video (2 s), then the
// DANTE'S CREATION title card (~2 s). Shown when the app opens and again
// when the game is terminated.
const TITLE = "DANTE'S CREATION";
const WORDS = TITLE.split(' ');
const VIDEO_MS = 2000;
const TITLE_MS = 2100;
export const CREATION_MS = VIDEO_MS + TITLE_MS;

const Creation = () => {
  const [phase, setPhase] = useState('video');

  useEffect(() => {
    // Timed rather than tied to the video ending, so a phone that blocks
    // autoplay still moves on to the title after 2 seconds.
    const t = setTimeout(() => setPhase('title'), VIDEO_MS);
    return () => clearTimeout(t);
  }, []);

  if (phase === 'video') {
    return (
      <div className="creation creation-video" aria-label="DANTE'S">
        <video autoPlay muted playsInline preload="auto">
          <source src="/video/dantes-intro.mp4" type="video/mp4" />
          <source src="/video/dantes-intro.webm" type="video/webm" />
        </video>
      </div>
    );
  }

  return (
    <div className="creation" role="img" aria-label={TITLE}>
      <div className="creation-ring" />
      <div className="creation-title">
        {WORDS.map((word, w) => {
          // keep the letter-by-letter reveal continuous across both words
          const start = WORDS.slice(0, w).join(' ').length + (w ? 1 : 0);
          return (
            <span key={w} className="creation-word">
              {[...word].map((ch, i) => (
                <span key={i} style={{ animationDelay: `${0.1 + (start + i) * 0.04}s` }}>{ch}</span>
              ))}
            </span>
          );
        })}
      </div>
      <div className="creation-line" />
    </div>
  );
};

export default Creation;
