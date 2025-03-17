'use client';

import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

export const AppSidebar = () => {
  const [rotations, setRotations] = useState(
    Array(3)
      .fill(0)
      .map(() => Math.random() * 30 - 15)
  );

  const randomizeRotation = (index: number) => {
    setRotations((prev) =>
      prev.map((rotation, i) =>
        i === index ? Math.random() * 30 - 15 : rotation
      )
    );
  };

  return (
    <div className="fixed w-[48%] h-screen py-24">
      <div className="h-full flex flex-col justify-between">
        {/* Sidebar Header */}
        <header>
          <h1 className="text-5xl font-bold tracking-wide text-primary">
            <a>Johnny Le</a>
          </h1>
          <h2 className="mt-3 text-xl text-primary">
            Full Stack Software Engineer
          </h2>
          <p className="mt-5 max-w-3xs leading-normal italic text-primary-foreground">
            Turning complexity into seamless digital experiences.
          </p>
        </header>
        {/* Social Links */}
        <ul className="flex gap-6 ml-4 text-primary-foreground">
          {[
            { href: 'https://github.com/jwonnyleaf/', Icon: Github },
            { href: 'https://www.linkedin.com/in/jwonnyleaf/', Icon: Linkedin },
            { href: 'https://instagram.com/jwonnyleaf', Icon: Instagram },
          ].map(({ href, Icon }, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.4,
                rotate: rotations[index],
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onMouseEnter={() => randomizeRotation(index)}
            >
              <a href={href} target="_blank" className="hover:text-primary">
                <Icon size={32} />
              </a>
            </motion.div>
          ))}
        </ul>
      </div>
    </div>
  );
};
