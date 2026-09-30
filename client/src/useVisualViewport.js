import { useEffect } from 'react';

// Size the app to the *visual* viewport so the on-screen keyboard shrinks the
// layout instead of covering the answer box. iOS Safari ignores
// interactive-widget=resizes-content, so this is the only reliable way.
export default function useVisualViewport() {
  useEffect(() => {
    const vv = window.visualViewport;
    const root = document.documentElement;
    let tallest = 0;
    let lastWidth = 0;

    const update = () => {
      if (vv && vv.scale > 1.01) return; // pinch-zoomed: leave the layout alone
      const h = vv ? vv.height : window.innerHeight;
      const w = vv ? vv.width : window.innerWidth;
      if (w !== lastWidth) { tallest = 0; lastWidth = w; } // rotation resets the baseline
      tallest = Math.max(tallest, h);
      root.style.setProperty('--vvh', `${h}px`);
      root.style.setProperty('--vvt', `${vv ? vv.offsetTop : 0}px`);
      root.classList.toggle('kb-open', h < tallest - 120);
    };

    update();
    const target = vv || window;
    target.addEventListener('resize', update);
    vv?.addEventListener('scroll', update);
    return () => {
      target.removeEventListener('resize', update);
      vv?.removeEventListener('scroll', update);
    };
  }, []);
}
