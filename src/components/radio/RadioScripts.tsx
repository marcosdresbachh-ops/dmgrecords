'use client';
import { useEffect } from 'react';

export function RadioScripts() {
  useEffect(() => {
    const initFadeIn = () => {
      const els = document.querySelectorAll('.fi');
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { 
            e.target.classList.add('v'); 
            io.unobserve(e.target); 
          }
        });
      }, { threshold: .1 });
      els.forEach(el => io.observe(el));
    };

    const initCounters = () => {
      const cnts = document.querySelectorAll('[data-count]');
      const cio = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const tgt = +el.dataset.count!;
            let cur = 0; const step = tgt / 50;
            const t = setInterval(() => {
              cur = Math.min(cur + step, tgt);
              el.textContent = Math.floor(cur).toLocaleString('pt-BR');
              if (cur >= tgt) clearInterval(t);
            }, 28);
            cio.unobserve(el);
          }
        });
      }, { threshold: .5 });
      cnts.forEach(c => cio.observe(c));
    };

    const topFillers = () => {
        const io2 = new IntersectionObserver(entries => entries.forEach(e => {
            if (e.isIntersecting) {
                const target = e.target as HTMLDivElement;
                target.style.width = target.dataset.pct + '%';
                io2.unobserve(target);
            }
        }), { threshold: .2 });
        document.querySelectorAll('.top-fill').forEach(b => io2.observe(b));
    }

    setTimeout(() => {
      initFadeIn();
      initCounters();
      topFillers();
    }, 50);

  }, []);

  return null;
}
