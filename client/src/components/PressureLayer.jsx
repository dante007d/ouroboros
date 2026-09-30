// The chamber's walls, vignette and whispers. Everything here is driven by
// the --squeeze custom property on the shell (0 = open, 1 = shut) and only
// animates transform/opacity, so it stays on the GPU even on cheap phones.
const PressureLayer = ({ whisper }) => (
  <>
    {/* Whispers sit *behind* the riddle, so they only show through the gaps
        and never cover the text being read. */}
    <div className="whispers" aria-hidden="true">
      {whisper && (
        <div key={whisper.id} className={`whisper ${whisper.side}`} style={{ top: `${whisper.y}%` }}>
          {whisper.text}
        </div>
      )}
    </div>
    <div className="pressure" aria-hidden="true">
      <div className="vignette" />
      <i className="wall wall-t" />
      <i className="wall wall-b" />
      <i className="wall wall-l" />
      <i className="wall wall-r" />
    </div>
  </>
);

export default PressureLayer;
