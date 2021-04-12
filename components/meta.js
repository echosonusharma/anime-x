import React from 'react';
import Head from 'next/head';

const Meta = ({ title, keywords, description }) => (
  <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta charSet="utf-8" />
    <link rel="icon" href="/static/logo.png" />
    <title>{title}</title>
  </Head>
);

Meta.defaultProps = {
  title: 'AnimeX',
  keywords: 'check anime, bookmark anime',
  description: 'save all your anime in one place',
};

export default Meta;
