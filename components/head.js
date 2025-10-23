import HeadComponent from "next/head";

const Head = ({ title = null }) => {
  const displayTitle = `${title ? `${title} | ` : ""}Devinci Fablab`;
  return (
    <HeadComponent>
      <title>{displayTitle}</title>
      <meta name="description" content="Welcome to the Devinci Fablab" />
      <link rel="icon" href="/logo.png" />
    </HeadComponent>
  );
};

export default Head;
