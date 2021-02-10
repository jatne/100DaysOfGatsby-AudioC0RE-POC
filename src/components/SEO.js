import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ children }) {
  return (
    <Helmet titleTemplate={`%s - audioC0RE`}>
      <html lang="en" />
      <title>audioC0RE</title>
      {/* Fav Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="utf-8" />
      <meta name="description" content="audoC0RE: react / gatsby / contentful / chakra" />
      {children}
    </Helmet>
  );
}
