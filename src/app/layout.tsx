import type { Metadata } from 'next';
import './globals.css';
import { Spline_Sans } from 'next/font/google';

const splineSans = Spline_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gastos dos Senadores Brasileiros',
  description:
    'Visualizando os gastos dos senadores brasileiros através de gráficos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${splineSans.className} antialiased bg-slate-100 min-h-screen text-slate-500`}>{children}</body>
    </html>
  );
}
