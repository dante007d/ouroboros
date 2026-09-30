// Animated serpents drawn in SVG. Everything moves with CSS transforms,
// opacity and stroke-dashoffset only, so it stays smooth on phones.

// The ouroboros: a ring of scales flowing endlessly into its own jaws.
// The head sits at the top of the ring; the tail tapers into the mouth and
// the jaws keep chewing on it.
export const Ouroboros = () => (
  <svg className="ouro" viewBox="0 0 240 240" role="img" aria-label="A serpent devouring its own tail">
    <defs>
      <radialGradient id="ouroGlow" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stopColor="#b8ff00" stopOpacity="0" />
        <stop offset="85%" stopColor="#b8ff00" stopOpacity=".12" />
        <stop offset="100%" stopColor="#b8ff00" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="120" cy="120" r="118" fill="url(#ouroGlow)" />
    {/* The whole body turns slowly, dragging the tail into the mouth */}
    <g className="ouro-body">
      {/* body: thick at the neck, thinning toward the tail */}
      <circle className="ouro-flesh" cx="120" cy="120" r="84" />
      {/* scales stream around the ring */}
      <circle className="ouro-scales" cx="120" cy="120" r="84" />
      <circle className="ouro-belly" cx="120" cy="120" r="72" />
    </g>
    {/* Tail tip entering the mouth (fixed, under the head) */}
    <path className="ouro-tail" d="M96 44 Q108 38 118 40 L122 36 Q108 30 94 38 Z" />
    {/* Head, fixed at 12 o'clock, facing left toward the tail */}
    <g className="ouro-head" transform="translate(120 36)">
      <g className="ouro-jaw-top">
        <path d="M34 -4 Q10 -26 -26 -10 Q-34 -6 -30 0 L28 2 Z" />
        <path className="fang" d="M-18 0 L-14 10 L-11 0 Z" />
        <path className="fang" d="M-4 0 L-1 8 L2 0 Z" />
        <circle className="eye" cx="4" cy="-10" r="4.5" />
        <circle className="pupil" cx="4" cy="-10" r="1.6" />
      </g>
      <g className="ouro-jaw-bot">
        <path d="M30 4 Q6 22 -24 8 Q-30 4 -26 2 L28 2 Z" />
        <path className="fang" d="M-12 2 L-9 -6 L-6 2 Z" />
      </g>
    </g>
  </svg>
);

// The punishment: a serpent lunges out of the dark and bites the player.
export const Bite = () => (
  <svg className="bite" viewBox="0 0 400 400" aria-hidden="true">
    <g className="bite-head">
      <g className="bite-top">
        <path className="skin" d="M40 200 Q60 60 200 50 Q340 60 360 200 Z" />
        <circle className="eye" cx="130" cy="120" r="16" />
        <circle className="eye" cx="270" cy="120" r="16" />
        <ellipse className="pupil" cx="130" cy="120" rx="3" ry="12" />
        <ellipse className="pupil" cx="270" cy="120" rx="3" ry="12" />
        <path className="fang" d="M110 196 L126 290 L142 196 Z" />
        <path className="fang" d="M258 196 L274 290 L290 196 Z" />
        <path className="tooth" d="M170 198 L180 226 L190 198 Z M210 198 L220 226 L230 198 Z" />
      </g>
      <g className="bite-bot">
        <path className="skin" d="M40 200 Q70 330 200 340 Q330 330 360 200 Z" />
        <path className="tooth" d="M150 202 L160 172 L170 202 Z M230 202 L240 172 L250 202 Z" />
        <path className="tongue" d="M200 204 L200 250 L186 268 M200 250 L214 268" />
      </g>
    </g>
  </svg>
);
