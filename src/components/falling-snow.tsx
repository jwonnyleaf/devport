'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NUM_SNOWFLAKES = 20;

export const FallingSnow = () => {
  const [snowflakes, setSnowflakes] = useState<
    { id: number; left: string; size: number; delay: number }[]
  >([]);

  useEffect(() => {
    const generateSnowflakes = () => {
      setSnowflakes((prevFlakes) => {
        return prevFlakes.length > 0
          ? prevFlakes
          : Array.from({ length: NUM_SNOWFLAKES }, (_, i) => ({
              id: i,
              left: `${Math.random() * 100}vw`, // Start Position
              size: Math.random() * 7 + 3, // Random Size (3px to 10px)
              delay: Math.random() * 10, // Random Delay (0s to 8s)
            }));
      });
    };

    generateSnowflakes();

    const interval = setInterval(() => {
      setSnowflakes((prevFlakes) => [
        ...prevFlakes,
        {
          id: prevFlakes.length,
          left: `${Math.random() * 100}vw`,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 8,
        },
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none overflow-hidden">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          initial={{ y: '-10vh', opacity: 0 }}
          animate={{
            y: '100vh',
            x: [0, 5, -5, 3, -3, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10, // Random duration (10s to 20s)
            delay: flake.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bg-white rounded-full"
          style={{
            left: flake.left,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
          }}
        />
      ))}
    </div>
  );
};
