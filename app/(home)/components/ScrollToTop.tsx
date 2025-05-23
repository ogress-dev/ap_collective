'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollVisibility = () => {
      const shouldBeVisible = window.pageYOffset > 300;
      setIsVisible(shouldBeVisible);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollVisibility();
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 z-50 bg-brown/90 hover:bg-brown text-ivory w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
      aria-label="Scroll to top"
    >
      <span className="text-xl transform rotate-90 -ml-0.5">›</span>
    </motion.button>
  );
};

export default ScrollToTop;