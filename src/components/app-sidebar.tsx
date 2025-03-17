'use client';

import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useAlert } from './alert-provider';

export const AppSidebar = () => {
  const triggerAlert = useAlert();
  const [rotations, setRotations] = useState(
    Array(4)
      .fill(0)
      .map(() => Math.random() * 30 - 15)
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const randomizeRotation = (index: number) => {
    setRotations((prev) =>
      prev.map((rotation, i) =>
        i === index ? Math.random() * 30 - 15 : rotation
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xblglzea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          Object.fromEntries(new FormData(e.target as HTMLFormElement))
        ),
      });

      if (response.ok) {
        setIsModalOpen(false);
        triggerAlert(
          'Your message has been successfully sent. I will get back to you soon!',
          'success'
        );
      } else {
        triggerAlert('Something went wrong. Please try again.', 'error');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      triggerAlert(
        'Error sending message. Please check your connection and try again.',
        'error'
      );
    }

    setLoading(false);
  };

  return (
    <div className="fixed h-screen py-24 z-10">
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
          <motion.div
            whileHover={{ scale: 1.4, rotate: rotations[3] }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onMouseEnter={() => randomizeRotation(3)}
          >
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Mail size={32} className="hover:text-primary" />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Contact Johnny Le</DialogTitle>
                </DialogHeader>

                <form
                  action="https://formspree.io/f/xblglzea"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4 mt-4"
                >
                  {/* Full Name */}
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project Inquiry, Collaboration, etc."
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      required
                      className="h-48"
                    />
                  </div>

                  {/* Submit Button */}
                  <DialogFooter>
                    <Button
                      type="submit"
                      variant="default"
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </motion.div>
        </ul>
      </div>
    </div>
  );
};
