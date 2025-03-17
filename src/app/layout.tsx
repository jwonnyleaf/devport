import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppSidebar } from '@/components/app-sidebar';
import { FallingSnow } from '@/components/falling-snow';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Johnny | Software Engineer',
  description: 'Crafting experiences with technology and design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`bg-primary-bg ${inter.className} min-h-screen max-w-screen-xl mx-auto px-6`}
      >
        <FallingSnow />
        <div className="flex justify-between gap-4">
          <AppSidebar />
          <main className="ml-[48%] flex-1 z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
