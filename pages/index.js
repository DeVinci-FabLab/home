import Image from "next/image";
import Footer from "../components/footer";
import Head from "../components/head";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Head />
      <Navbar />
      <div>
        <div className="text-center mb-20 pt-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Bienvenue sur le site du{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-blue-400 animate-gradient-x">
              {" "}
              DeVinci Fablab{" "}
            </span>
            !
          </h1>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            Le Fablab est un lieu d&apos;échange et de création du pôle
            universitaire Léonard de Vinci. Ouvert à tous les membres du pôle,
            étudiants comme personnel, venez y découvrir nos projets, nos
            réalisations et nos tutoriels !
          </h3>
        </div>

        <center>
          <div className="relative max-w-md md:max-w-lg mb-20">
            <div className="absolute top-0 -left-4 w-56 h-56 lg:w-80 lg:h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 lg:w-80 lg:h-80 w-56 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 lg:w-80 lg:h-80 w-56 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="absolute rounded-lg inset-0 bg-gray-200 w-full h-full"></div>
            <div className="absolute rounded-lg placeholder w-full h-full animate-gradient-placeholder"></div>
            <video
              width="840"
              height="560"
              controls={false}
              autoPlay="autoplay"
              muted
              loop={true}
              className="mt-5 rounded-lg mx-auto shadow-lg relative"
            >
              <source src="/video/banner.mp4" type="video/mp4" />
            </video>
          </div>
        </center>
      </div>
      <section className="py-10 max-w-4xl m-auto px-6 md:py-[90px] font-dm-sans">
        <div className="flex flex-col m-auto md:flex-row max-w-default md:space-x-10">
          <div className="order-1 w-full mt-[88px] md:mt-0">
            <div className="max-w-md text-center m-auto mb-10 md:max-w-4xl md:text-left md:m-0">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Le DeVinci Fablab
                <br /> Qui sommes nous ?
              </h2>
              <p className="mt-10 text-lg leading-6 text-gray-500 text-justify">
                Le DeVinci Fablab est une association étudiante du Pôle Léonard
                De Vinci qui s&apos;occupe de l&apos;espace de fabrication situé
                au fond du Leaning center. Le but de notre association est de
                vous aider dans vos projets académiques comme personnels, que ce
                soit avec des outils, des machines, des matériaux ou des
                formations. Nous gérons ainsi le parc d&apos;imprimante 3D qui
                vous permettra de réaliser toutes les pièces que vous aurez
                conçues, ainsi que les ateliers mis à la disposition de tous où
                vous pourrez faire votre bricolage. L&apos;espace a les mêmes
                horaires d&apos;ouverture que le pôle donc n&apos;hésitez pas à
                venir nous y rencontrer !
              </p>
            </div>
          </div>
          <div className="order-1 max-w-md m-auto md:m-0 md:w-full">
            <div className="items-center justify-center">
              <Image
                className="rounded-lg shadow-2xl"
                src="/photo/home_001.jpg"
                width={500}
                height={500}
                alt="Banner"
              />
              <div className="grid grid-cols-2 gap-2 content-start mt-5">
                <Image
                  className="rounded-lg shadow-lg"
                  src="/photo/home_002.jpg"
                  width={250}
                  height={250}
                  alt="Banner"
                />
                <Image
                  className="rounded-lg shadow-lg"
                  src="/photo/home_003.jpg"
                  width={250}
                  height={250}
                  alt="Banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
