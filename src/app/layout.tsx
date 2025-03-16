import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppSidebar } from '@/components/app-sidebar';

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
        <div className="flex justify-between gap-4">
          <AppSidebar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
