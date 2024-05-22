import { Inter } from 'next/font/google';

import StoreProvider from 'app/StoreProvider';

import 'app/globals.css';

import { Footer } from 'app/footer/footer';
import Header from 'app/header/header';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <div>
            <Header />
          </div>

          {children}

          <div>
            <Footer />
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
