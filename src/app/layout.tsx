'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Допомога абітурієнтам зі вступом до університетів Австрії: вимоги, документи, дедлайни та зрозумілий план наступних кроків. Перша консультація безкоштовна." />
        <meta name="theme-color" content="#fefdfb" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ausziel — допомога зі вступом до Австрії" />
        <meta property="og:description" content="Персональна допомога абітурієнтам зі вступом до університетів Австрії" />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ausziel — допомога зі вступом до Австрії" />
        <meta name="twitter:description" content="Персональна допомога абітурієнтам зі вступом до університетів Австрії" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        <title>Ausziel — допомога зі вступом до Австрії</title>
      </head>
      <body>
        <Header />
        <main role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
