import React from "react";
import Head from "next/head";

interface SeoProps {
  title?: string;
  description?: string;
}

const DEFAULT_DESCRIPTION =
  "GoldenMED — klinika medycyny estetycznej, laseroterapii i kosmetologii w Warszawie.";

const Seo: React.FC<SeoProps> = ({ title, description = DEFAULT_DESCRIPTION }) => {
  const fullTitle = title
    ? `${title} | GoldenMED`
    : "GoldenMED — medycyna estetyczna i kosmetologia";

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default Seo;
