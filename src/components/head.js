import React from 'react';
import Hemlet from 'react-helmet';

import favicon from '@images/favicons/favicon.ico';
import favicon16x16 from '@images/favicons/favicon-16x16.png';
import favicon32x32 from '@images/favicons/favicon-32x32.png';
import androidChrome192x192 from '@images/favicons/android-chrome-192x192.png';
import androidChrome512x512 from '@images/favicons/android-chrome-512x512.png';
import appleTouchIcon57x57 from '@images/favicons/apple-touch-icon-57x57.png';
import appleTouchIcon60x60 from '@images/favicons/apple-touch-icon-60x60.png';
import appleTouchIcon72x72 from '@images/favicons/apple-touch-icon-72x72.png';
import appleTouchIcon114x114 from '@images/favicons/apple-touch-icon-114x114.png';
import appleTouchIcon152x152 from '@images/favicons/apple-touch-icon-152x152.png';
import appleTouchIcon180x180 from '@images/favicons/apple-touch-icon-180x180.png';

const data = {
  title: 'Freelance Developer, New York - Kyrylo Orlov',
  description:
    'Freelance developer based in New York with 6 years of experience in digital design and programming with languages like Python, Javascript, React, and Swift. Freelancing for startups, personal, and business.',
  url: 'https://kyryloorlov.com',
  author: 'Kyrylo Orlov',
  name: 'Freelance Developer, New York - Kyrylo Orlov',
  keywords: [
    'kyrylo orlov',
    'kyrylo',
    'orlov',
    'web design',
    'freelance',
    'python developer',
    'developer',
    'web developer',
    'developer in new york',
    'web developer in new york',
    'creative developer',
  ],
  img: '',
};

const Head = () => {
  return (
    <Hemlet>
      <html lang="en" prefix="og: http://ogp.me/ns#" />
      <title itemProp="name" lang="en">
        {data.title}
      </title>
      <link rel="shortcut icon" href={favicon} />

      <meta property="og:title" content={data.title} />
      <meta property="og:site_name" content={data.name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={data.url} />
      <meta property="og:image" content={data.img} />
      <meta property="og:description" content={data.description} />
      <meta property="og:locale" content="en_US" />

      <link rel="apple-touch-icon" sizes="57x57" href={appleTouchIcon57x57} />
      <link rel="apple-touch-icon" sizes="60x60" href={appleTouchIcon60x60} />
      <link rel="apple-touch-icon" sizes="72x72" href={appleTouchIcon72x72} />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={appleTouchIcon114x114}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={appleTouchIcon152x152}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={appleTouchIcon180x180}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={androidChrome192x192}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href={androidChrome512x512}
      />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
      <meta name="msapplication-TileColor" content="#000000" />

      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords.join(', ')} />
      <meta name="author" content={data.author} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
    </Hemlet>
  );
};

export default Head;
