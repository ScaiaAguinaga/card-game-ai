import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Card Game AI',
  description: 'Web app for simulating a card game with an AI opponent',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
