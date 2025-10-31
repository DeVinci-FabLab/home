import Image from "next/image";
import Footer from "../components/footer";
import Head from "../components/head";
import Navbar from "../components/navbar";

const partners = [
  {
    name: "Alstom",
    logo: "/partners/Alstom_logo.svg",
    description:
      "Leader mondial des solutions de mobilité intelligentes et durables. Notre collaboration est centrée sur l'innovation et l'excellence en ingénierie.",
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
    <div>
      <Head
        title="Partenaires - DeVinci Fablab"
        description="Découvrez nos partenaires qui nous accompagnent dans nos projets d'innovation et de fabrication."
      />
      <Navbar />

      <main>
        <div>
          <header>
            <h1>Nos Partenaires</h1>
            <p>
              Ils nous accompagnent dans nos projets d'innovation et de
              fabrication
            </p>
          </header>

          <section>
            {partners.map((partner, index) => (
              <div key={index}>
                <article data-index={index}>
                  <figure>
                    <div>
                      <div>
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  </figure>

                  <div>
                    <h2>{partner.name}</h2>
                    <p>{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visiter le site
                    </a>
                  </div>
                </article>
                {index < partners.length - 1 && <hr />}
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
