import Image from "next/image";
import { useEffect, useState } from "react";
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
    name: "Hauts-de-Seine",
    logo: "/partners/HDS.svg",
    startYear: 2015,
    endYear: null,
    description:
      "Le Département des Hauts-de-Seine soutient les initiatives locales en matière d'innovation et de technologie. Nous sommes reconnaissants de leur partenariat.",
    website: "https://www.hauts-de-seine.fr",
  },
].sort(sortPartners);

export default function Partners() {
  const [proposalEmail, setProposalEmail] = useState("");
  const [proposalProject, setProposalProject] = useState("");
  const [formError, setFormError] = useState("");

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

  const handleProposalSubmit = (event) => {
    event.preventDefault();
    if (!proposalEmail.trim()) {
      setFormError(
        "Merci d'indiquer un email pour que nous puissions vous répondre."
      );
      return;
    }

    setFormError("");
    const subject = encodeURIComponent(
      "Proposition de partenariat - DeVinci Fablab"
    );
    const body = encodeURIComponent(
      `Bonjour,

Je souhaite vous transmettre mon projet de partenariat.

Email de contact : ${proposalEmail}

Description du projet :
${proposalProject || "Je serais ravi d'en discuter de vive voix avec l'équipe."}
`
    );

    window.location.href = `mailto:fablab@devinci.fr?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <Head
        title="DeVinci Fablab - Nos Partenaires"
        description="Découvrez nos partenaires qui nous accompagnent dans nos projets d'innovation et de fabrication."
      />
      <Navbar />

      <main id="partners-main">
        <div>
          <div className="partners-layout">
            <div className="partners-body">
              <header>
                <h1>Nos Partenaires</h1>
                <p>
                  Nous collaborons avec des partenaires de confiance pour
                  soutenir nos projets et initiatives.
                </p>
                <p>Découvrez ceux qui nous accompagnent dans notre aventure.</p>
              </header>

              <a className="partners-scroll-cta" href="#partnership-mail">
                <div>
                  <p className="partners-scroll-kicker">Collaboration</p>
                  <h3>Un projet en tête ?</h3>
                  <p>
                    Déposez vos coordonnées pour recevoir un retour rapide de
                    l&#39;équipe partenariats.
                  </p>
                </div>
                <span className="partners-scroll-pill">
                  Aller au formulaire
                </span>
              </a>

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
                        <div>
                          <div>
                            <h2>{partner.name}</h2>
                            <h3>{formatYears(partner)}</h3>
                          </div>
                          <p>{partner.description}</p>
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visiter le site
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </section>

              <section
                id="partnership-mail"
                className="partners-mail-section"
                aria-labelledby="partners-mail-title"
              >
                <div className="partners-mail-card">
                  <div>
                    <p className="partners-mail-kicker">
                      Proposer un partenariat
                    </p>
                    <h3 id="partners-mail-title">Envoyez-nous votre projet</h3>
                    <p>
                      Laissez-nous votre email et une brève description ; nous
                      vous recontactons pour co-construire votre partenariat
                      avec le DeVinci Fablab.
                    </p>
                  </div>

                  <form onSubmit={handleProposalSubmit}>
                    <label htmlFor="proposal-email">Votre email</label>
                    <input
                      id="proposal-email"
                      type="email"
                      name="proposal-email"
                      placeholder="vous@email.com"
                      value={proposalEmail}
                      onChange={(event) => setProposalEmail(event.target.value)}
                      required
                    />

                    <label htmlFor="proposal-message">
                      Votre projet de partenariat
                    </label>
                    <textarea
                      id="proposal-message"
                      name="proposal-message"
                      rows={5}
                      placeholder="Objectifs, publics visés, ressources..."
                      value={proposalProject}
                      onChange={(event) =>
                        setProposalProject(event.target.value)
                      }
                    />

                    {formError && (
                      <p className="partners-form-error">{formError}</p>
                    )}

                    <button type="submit" className="partners-mail-submit">
                      Envoyer mon projet
                    </button>
                  </form>
                  <p className="partners-mail-note">
                    Nous vous répondons généralement sous 72h ouvrées.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
