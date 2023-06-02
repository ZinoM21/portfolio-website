import "./globals.css";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Zino M',
  description: 'This is where the fun begins ...',
};

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }