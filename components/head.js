import HeadComponent from 'next/head';

const Head = ({ title = null }) => {
  const displayTitle = `${title ? `${title} | ` : ""}Devinci FabLab`;
  return (
    <HeadComponent>
      <title>{displayTitle}</title>
      <meta name="description" content="Welcome to the Devinci FabLab" />
      <link rel="icon" href="/logo.png" />
    </HeadComponent>
)};

export default Head;