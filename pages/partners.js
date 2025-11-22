import Image from "next/image";
import { useEffect } from "react";
import Footer from "../components/footer";
import Head from "../components/head";
import Navbar from "../components/navbar";

function sortPartners(a, b) {
  if (a.endYear === null && b.endYear !== null) return -1;
  if (a.endYear !== null && b.endYear === null) return 1;
  return 0;
}

export const partners = [
  {
    id: "rs-france",
    name: "RS France",
    logo: "/partners/RS.svg",
    startYear: 2024,
    endYear: 2025,
    description:
      "RS France est un fournisseur mondial de fournitures industrielles. Nous les remercions pour leur accompagnement sur nos projets en nous fournissant des composants fiables.",
    website: "https://fr.rs-online.com",
  },
  {
    id: "gotronic",
    name: "GoTronic",
    logo: "/partners/GoTronic.svg",
    startYear: 2024,
    endYear: 2025,
    description:
      "GoTronic est un distributeur de composants électroniques et de solutions d'automatisation. Grâce à leur soutien nous pouvons donner vie à des projets au sein de notre association.",
    website: "https://www.gotronic.fr",
  },
  {
    id: "ift",
    name: "IFT (ancien DVIC)",
    logo: "/partners/IFT.svg",
    startYear: 2015,
    endYear: null,
    description:
      "L'Institut for Future Technologies (IFT) est notre service parrain au sein du Pôle Léonard de Vinci. C'est un acteur clé dans le domaine de la recherche, de la technologie et de l'innovation.",
    website: "https://ift.devinci.fr/",
  },
  {
    id: "hauts-de-seine",
    name: "Département des Hauts-de-Seine",
    logo: "/partners/HDS.svg",
    startYear: 2015,
    endYear: null,
    description:
      "Le Département des Hauts-de-Seine soutient les initiatives locales en matière d'innovation et de technologie. Nous sommes reconnaissants de leur partenariat.",
    website: "https://www.hauts-de-seine.fr",
  },
].sort(sortPartners);

export default function Partners() {
  useEffect(() => {
    document.body.classList.add("partners-page");
    return () => {
      document.body.classList.remove("partners-page");
    };
  }, []);

  const formatYears = ({ startYear, endYear }) => {
    if (!startYear) return "";
    if (!endYear) return `Depuis ${startYear}`;
    return `${startYear} - ${endYear}`;
  };

  return (
    <div>
      <Head
        title="DeVinci Fablab - Nos Partenaires"
        description="Découvrez nos partenaires qui nous accompagnent dans nos projets d'innovation et de fabrication."
      />
      <Navbar />

      <main>
        <div>
          <header>
            <h1>Nos Partenaires</h1>
            <p>
              Nous collaborons avec des partenaires de confiance pour soutenir
              nos projets et initiatives. Découvrez ceux qui nous accompagnent
              dans notre aventure.
            </p>
          </header>

          <section>
            {partners.map((partner, index) => (
              <div key={index}>
                <hr />
                <article data-index={index}>
                  <figure>
                    <div>
                      <div>
                        <Image
                          src={partner.logo}
                          alt={`Logo ${partner.name}`}
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  </figure>

                  <div>
                    <h2>{partner.name}</h2>
                    <p>
                      {formatYears(partner)}
                      <br></br>
                      {partner.description}
                    </p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visiter le site
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
