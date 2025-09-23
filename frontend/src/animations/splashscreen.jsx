export const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.3 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.5 },
  },
};

export const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const logoVariants = {
  initial: { scale: 0, rotate: -180 },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

export const ringVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};
