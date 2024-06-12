import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const fontSans = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Country Wordle',
  description: 'Testez vos connaissances en géographie',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
