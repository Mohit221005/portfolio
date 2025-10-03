export const getVariants = (prefersReducedMotion) => {
  const transition = prefersReducedMotion
    ? { duration: 0.01 } // Instant transition for reduced motion
    : { type: "spring", stiffness: 100, damping: 20 };

  const staggeredChildrenTransition = prefersReducedMotion
    ? { staggerChildren: 0.05, delayChildren: 0.1 } // Faster staggering for reduced motion
    : { staggerChildren: 0.1, delayChildren: 0.3 };

  return {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: staggeredChildrenTransition,
      },
    },

    itemFade: {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: transition },
    },

    itemSlide: {
      hidden: { opacity: 0, x: -50 },
      show: { opacity: 1, x: 0, transition: transition },
    },

    itemScale: {
      hidden: { opacity: 0, scale: 0.8 },
      show: { opacity: 1, scale: 1, transition: transition },
    },

    fadeIn: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: prefersReducedMotion ? { duration: 0.01 } : { duration: 0.5, ease: "easeOut" } },
    },

    slideInFromLeft: {
      hidden: { x: -100, opacity: 0 },
      show: { x: 0, opacity: 1, transition: prefersReducedMotion ? { duration: 0.01 } : { duration: 0.7, ease: "easeOut" } },
    },

    slideInFromRight: {
      hidden: { x: 100, opacity: 0 },
      show: { x: 0, opacity: 1, transition: prefersReducedMotion ? { duration: 0.01 } : { duration: 0.7, ease: "easeOut" } },
    },

    scaleUp: {
      hidden: { scale: 0.8, opacity: 0 },
      show: { scale: 1, opacity: 1, transition: prefersReducedMotion ? { duration: 0.01 } : { duration: 0.6, ease: "easeOut" } },
    },
  };
};
