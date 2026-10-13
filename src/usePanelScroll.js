import { useEffect, useState } from 'react';

// Desktop layout (see layout image):
//  - the Home panel starts full screen. The FIRST scroll gesture only shrinks
//    it (the page itself does not move), so when the shrink finishes the About
//    content is shown from its very top.
//  - the panel then stays pinned top-left for every section ("always here").
//  - scrolling UP at the very top of the page grows the panel back to full screen.
//  - the title of the section being read ("About", ...) is pinned under the
//    Home panel until that section has completely scrolled away.
//  - anchor links scroll to the right section.
const SHRINK_MS = 750; // a little longer than the CSS transition (0.7s)

export default function usePanelScroll() {
  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    let isShrunk = false;
    let locked = false;
    let lockTimer = null;
    let touchY = null;

    const isDesktop = () => window.matchMedia('(min-width: 1100px)').matches;

    // Mark the section that is currently being read.
    const updateActive = () => {
      const secs = document.querySelectorAll('.sec');
      const vh = window.innerHeight;
      let active = null;
      secs.forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= vh * 0.5 && r.bottom > vh * 0.3) active = s;
      });
      secs.forEach((s) => s.classList.toggle('is-active', s === active));
    };

    const apply = (value) => {
      isShrunk = value;
      setShrunk(value);
      root.classList.toggle('panel-shrunk', value);
      updateActive();
      // ignore scrolling while the panel animates
      locked = true;
      clearTimeout(lockTimer);
      lockTimer = setTimeout(() => {
        locked = false;
      }, SHRINK_MS);
    };

    // Handle a scroll "intent" (wheel / key / touch). Returns true if handled.
    const handleIntent = (dir, e) => {
      if (!isDesktop()) return false;
      if (locked) {
        e.preventDefault();
        return true;
      }
      if (dir > 0 && !isShrunk) {
        e.preventDefault(); // do NOT move the page, just shrink the panel
        window.scrollTo(0, 0);
        apply(true);
        return true;
      }
      if (dir < 0 && isShrunk && window.scrollY <= 1) {
        e.preventDefault();
        apply(false);
        return true;
      }
      return false;
    };

    const onWheel = (e) => {
      if (e.ctrlKey || e.deltaY === 0) return;
      handleIntent(Math.sign(e.deltaY), e);
    };

    const onKey = (e) => {
      const down = ['ArrowDown', 'PageDown', 'End', ' '];
      const up = ['ArrowUp', 'PageUp', 'Home'];
      const tag = (e.target && e.target.tagName) || '';
      if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
      if (e.key === ' ' && e.shiftKey) return handleIntent(-1, e);
      if (down.includes(e.key)) handleIntent(1, e);
      else if (up.includes(e.key)) handleIntent(-1, e);
    };

    const onTouchStart = (e) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      if (touchY == null) return;
      const dy = touchY - e.touches[0].clientY;
      if (Math.abs(dy) < 6) return;
      if (handleIntent(Math.sign(dy), e)) touchY = null;
    };

    // Fallback (scrollbar drag etc.): shrink if the page was scrolled anyway.
    const onScroll = () => {
      if (isDesktop() && !isShrunk && window.scrollY > 24) apply(true);
      else if (!isDesktop()) {
        const s = window.scrollY > 24;
        if (s !== isShrunk) apply(s);
      }
      updateActive();
    };

    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const el = id && document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      if (!isShrunk) apply(true);
      const reduce = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      const top =
        id === 'about' ? 0 : el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
    };

    window.scrollTo(0, 0);
    root.classList.remove('panel-shrunk');
    updateActive();

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.removeEventListener('click', onClick);
      clearTimeout(lockTimer);
      root.classList.remove('panel-shrunk');
    };
  }, []);

  return shrunk;
}