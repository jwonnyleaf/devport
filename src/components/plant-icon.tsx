import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

export const PlantIcon = () => {
  const controls = useAnimation();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const triggerAnimation = () => {
      controls.start({
        rotate: [0, Math.random() * 10 - 5, Math.random() * 10 - 5, 0],
        transition: {
          duration: 3 + Math.random() * 2,
          ease: 'easeInOut',
        },
      });

      const randomDelay = Math.random() * 7000 + 1000;
      timeoutId = setTimeout(triggerAnimation, randomDelay);
    };

    triggerAnimation();

    return () => clearTimeout(timeoutId);
  }, [controls]);

  return (
    <motion.div animate={controls}>
      <Image
        src={'/images/logo-white.png'}
        alt="Plant Icon"
        width={50}
        height={50}
      />
    </motion.div>
  );
};
