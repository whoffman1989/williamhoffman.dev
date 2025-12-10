import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'William Hoffman - Developer & Designer',
  description: 'Building software, tools, and products that solve real problems and create meaningful experiences.',
  keywords: ['William Hoffman', 'Developer', 'Designer', 'Software Engineer', 'Web Development'],
  authors: [{ name: 'William Hoffman' }],
  openGraph: {
    title: 'William Hoffman - Developer & Designer',
    description: 'Building software, tools, and products that solve real problems and create meaningful experiences.',
    url: 'https://williamhoffman.dev',
    siteName: 'William Hoffman',
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
