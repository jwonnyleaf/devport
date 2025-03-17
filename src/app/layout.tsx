import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppSidebar } from '@/components/app-sidebar';
import { FallingSnow } from '@/components/falling-snow';
import { AlertProvider } from '@/components/alert-provider';

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
      <body className={`bg-primary-bg ${inter.className} min-h-screen`}>
        <AlertProvider>
          <FallingSnow />
          <div className="w-full flex max-w-screen-xl mx-auto px-6 justify-between gap-4">
            <div className="w-[48%]">
              <AppSidebar />
            </div>
            <main className="flex-1 z-10">{children}</main>
          </div>
        </AlertProvider>
      </body>
    </html>
  );
}
