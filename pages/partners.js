import Image from "next/image";
import Footer from "../components/footer";
import Head from "../components/head";
import Navbar from "../components/navbar";

const partners = [
  {
    name: "RS France",
    logo: "/partners/RS.svg",
    description:
      "RS France est un fournisseur mondial de fournitures industrielles. Nous les remercions de nous accompagner sur nos projets en nous fournissant des composants fiables.",
    website: "https://fr.rs-online.com",
  },
  {
    name: "Go Tronic",
    logo: "/partners/Gotronic.svg",
    description:
      "Go Tronic est un distributeur de composants électroniques et de solutions d'automatisation. Nous les remercions de leur soutien dans nos projets.",
    website: "https://www.gotronic.fr",
  },
  {
    name: "Département des Hauts-de-Seine",
    logo: "/partners/HDS.svg",
    description:
      "Le Département des Hauts-de-Seine soutient les initiatives locales en matière d'innovation et de technologie. Nous sommes reconnaissants de leur partenariat.",
    website: "https://www.hauts-de-seine.fr",
  },
  {
    name: "IFT",
    logo: "/partners/IFT.svg",
    description:
      "IFT est notre service parrain au sein du Pôle Léonard de Vinci. Il est un acteur clé dans le domaine de la recherche, de la technologie et de l'innovation.",
    website: "https://ift.devinci.fr/",
  },
];

export default function Partners() {
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
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
