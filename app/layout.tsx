import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stay2gether — Travel together. Pay when the trip is real.',
  description:
    'Plan group trips with friends, commit funds without paying upfront, vote on AI-suggested itineraries, and only get charged when the trip is confirmed.',
  openGraph: {
    title: 'Stay2gether',
    description: 'Travel together. Pay when the trip is real.',
    url: 'https://stay2gether.app',
    siteName: 'Stay2gether',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
