// Easing curves
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

// Common viewport config for whileInView
export const VIEWPORT_ONCE = { once: true, margin: "-100px" } as const;

// Common transition presets
export const transitions = {
  maskIn: (delay = 0) => ({
    duration: 1,
    delay,
    ease: EASE_OUT_EXPO,
  }),
  fadeIn: (delay = 0) => ({
    duration: 0.8,
    delay,
    ease: EASE_OUT_EXPO,
  }),
  fadeInSlow: (delay = 0) => ({
    duration: 1,
    delay,
    ease: "easeOut" as const,
  }),
};

// Common animation variants
export const variants = {
  maskIn: {
    initial: { y: "100%" },
    animate: { y: 0 },
    whileInView: { y: 0 },
  },
  fadeInUp: {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    whileInView: { y: 0, opacity: 1 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    whileInView: { opacity: 1 },
  },
};
