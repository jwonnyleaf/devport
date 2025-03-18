import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const PlantIcon = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const randomDelay = Math.random() * 5000 + 1000;
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, randomDelay);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={animationKey}
      animate={{
        rotate: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, 0],
      }}
      transition={{
        duration: 2.5 + Math.random() * 1.5,
        ease: 'easeInOut',
      }}
    >
      <Image
        src={'/images/logo-white.png'}
        alt="Plant Icon"
        width={50}
        height={50}
      />
    </motion.div>
  );
};
