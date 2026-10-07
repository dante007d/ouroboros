// Opening / termination sequence: the DANTE'S logo video, 2 seconds.
// Shown when the app opens and again when the game is terminated.
export const CREATION_MS = 2000;

const Creation = () => (
  <div className="creation creation-video" aria-label="DANTE'S">
    <video autoPlay muted playsInline preload="auto">
      <source src="/video/dantes-intro.mp4" type="video/mp4" />
      <source src="/video/dantes-intro.webm" type="video/webm" />
    </video>
  </div>
);

export default Creation;
