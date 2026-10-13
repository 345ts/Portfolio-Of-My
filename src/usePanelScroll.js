import { useEffect, useState } from 'react';

// Desktop layout (see layout image):
//  - the Home panel starts full screen, then shrinks into the top-left corner
//    on the first scroll and stays there for every section ("always here").
//  - anchor links scroll to the right section; "About" lands just past the
//    point where the panel has shrunk.
export default function usePanelScroll() {
  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 24);

    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const el = id && document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const reduce = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      const top =
        id === 'about' ? 40 : el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return shrunk;
}
