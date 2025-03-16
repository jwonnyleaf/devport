'use client';

import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin } from 'lucide-react';

export const AppSidebar = () => {
  return (
    <div className="w-[48%] h-screen py-24">
      <div className="h-full flex flex-col justify-between">
        {/* Sidebar Header */}
        <header>
          <h1 className="text-5xl font-bold text-primary">
            <a>Johnny Le</a>
          </h1>
          <h2 className="mt-3 text-xl text-primary">
            Full Stack Software Engineer
          </h2>
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
                rotate: Math.random() * 20 - 10,
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
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
