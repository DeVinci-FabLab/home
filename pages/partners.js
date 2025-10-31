import Image from "next/image";
import Footer from "../components/footer";
import Head from "../components/head";
import Navbar from "../components/navbar";

const partners = [
  {
    name: "Alstom",
    logo: "/partners/Alstom_logo.svg",
    description:
      "Leader mondial des solutions de mobilit� intelligentes et durables. Notre collaboration est centr�e sur l'innovation et l'excellence en ing�nierie.",
    website: "https://www.alstom.com",
  },
  {
    name: "RS Components",
    logo: "/partners/RS.svg",
    description:
      "RS accompagne nos besoins de prototypage et de production avec des composants fiables et une livraison rapide pour nos projets.",
    website: "https://fr.rs-online.com",
  },
  {
    name: "Igus",
    logo: "/partners/Igus.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    website: "https://www.igus.fr",
  },
  {
    name: "Faulhaber",
    logo: "/partners/faulhaber.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    website: "https://www.faulhaber.com",
  },
  {
    name: "Gotronic",
    logo: "/partners/Gotronic.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    website: "https://www.gotronic.fr",
  },
  {
    name: "Aisler",
    logo: "/partners/Aisler.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    website: "https://aisler.net",
  },
  {
    name: "HDS",
    logo: "/partners/HDS.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    website: "#",
  },
  {
    name: "IFT",
    logo: "/partners/IFT.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    website: "#",
  },
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-white">
      <Head
        title="Partenaires - DeVinci Fablab"
        description="D�couvrez nos partenaires qui nous accompagnent dans nos projets d'innovation et de fabrication."
      />
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="page-title text-4xl md:text-5xl font-bold mb-4">
              Nos Partenaires
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ils nous accompagnent dans nos projets dinnovation et de
              fabrication
            </p>
          </div>

          {/* Partners List */}
          <div className="partners-list">
            {partners.map((partner, index) => (
              <div key={index}>
                <div
                  className={`partner-card flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center py-12`}
                >
                  {/* Logo Box */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="partner-logo-card bg-white rounded-2xl p-10 w-full max-w-md flex items-center justify-center min-h-[280px] shadow-lg border border-gray-100">
                      <div className="relative w-full h-48">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="partner-title text-3xl md:text-4xl font-bold">
                      {partner.name}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {partner.description}
                    </p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="partner-link inline-block font-medium underline transition-colors"
                    >
                      Visiter le site
                    </a>
                  </div>
                </div>
                {/* Separator */}
                {index < partners.length - 1 && (
                  <div className="partner-separator"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
