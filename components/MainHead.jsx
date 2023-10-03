import Head from 'next/head';

const MainHead = ({
  title = '',
  url = '',
  description = ``,
  mainImage = ``,
  phone = ``,
  icon = ``,
  twitter = ``,
  facebook = ``,
  instagram = ``,
}) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="name" content={`${title}`} />
        <meta name="title" content={`${title}`} />
        <meta property="og:type" content={`${title}`} />
        <meta property="description" content={`${description}`} />
        <meta property="og:locale" content={`en`} />
        <meta property="og:site_name" content={`${title}`} />
        <meta property="og:url" content={`${url}`} />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={`${description}`} />
        <meta property="og:image" content={`${mainImage}`} />
        <meta name="logo" content={`${mainImage}`} />
        <link
          rel="icon"
          href={`${icon ?? mainImage}`}
          type="image/png"
          sizes="any"
        />
        <link
          rel="apple-touch-icon"
          href={`${icon ?? mainImage}`}
          type="image/png"
          sizes="any"
        />
        <meta property="og:image:alt" content={`${title}`} />
        <meta property="og:mobile" content={phone} />
        <meta property="og:whatsapp" content={phone} />
        <meta itemProp="instagram" content={`${title}`} />
        <meta
          property="instagram:url"
          content={`${instagram.length > 1 ? instagram : url}`}
        />
        <meta property="instagram:title" content={`${title}`} />
        <meta property="instagram:description" content={`${description}`} />
        <meta property="instagram:image" content={`${mainImage}`} />
        <meta itemProp="twitter" content={`${title}`} />
        <meta
          property="twitter:url"
          content={`${twitter.length > 1 ? twitter : url}`}
        />
        <meta property="twitter:title" content={`${title}`} />
        <meta property="twitter:description" content={`${description}`} />
        <meta property="twitter:image" content={`${mainImage}`} />
        <meta itemProp="facebook" content={`${title}`} />
        <meta
          property="facebook:url"
          content={`${facebook.length > 1 ? facebook : url}`}
        />
        <meta property="facebook:title" content={`${title}`} />
        <meta property="facebook:description" content={`${description}`} />
        <meta property="facebook:image" content={`${mainImage}`} />
      </Head>
    </>
  );
};

export default MainHead;
