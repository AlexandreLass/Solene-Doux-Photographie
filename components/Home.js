import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import { FaInstagram } from "react-icons/fa";
import { Carousel } from "nuka-carousel";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import Image from "next/image";

function Home() {

  return (
    <div>
      <Head>
        <link rel="preload" href="/Logo/logo_nom2.png" as="image" />
        <meta
          name="description"
          content="Photographe spécialisée dans les moments forts de la vie, mariage, maternité, famille, etc."
        />
        <title>Solène Photographie</title>
      </Head>
      <div className={styles.head}>
        <div className={styles.headContainer}>
          <div className={styles.logo}>
            <Image
              width={290}
              height={44}
              src="/Logo/logo_nom2.png"
              alt="Logo Solene Doux"
              style={{ backgroundColor: "transparent" }}
              priority
            />
          </div>
          <div className={styles.headerRight}>
            <div className={styles.menu}>
              <Link href="/apropos">
                <span className={styles.lien}>A propos</span>
              </Link>
              <Link href="/prestation">
                <span className={styles.lien}>Prestation</span>
              </Link>
              <Link href="/portfolio">
                <span className={styles.lien}>Portfolio</span>
              </Link>
              <Link href="/contact">
                <span className={styles.lien}>Contact</span>
              </Link>
            </div>

            <a
              href="https://www.instagram.com/solenedoux_photographie/"
              className={styles.instaIcon}
              target="_blank"
            >
              <FaInstagram
                style={{ backgroundColor: "transparent" }}
                size={40}
                aria-label="Instagram"
              />
            </a>
          </div>
        </div>
        <div className={styles.carouselContainer}>
          <Carousel
            autoplay={true}
            autoplayInterval={3000}
            wrapAround={true}
            wrapMode="wrap"
          >
            <img
              src="/Accueil/accueil3.jpg"
              alt="Photo acceuil couple"
              className={styles.imageHead1}
            />
            <img
              src="/Accueil/accueil4.jpg"
              alt="Photo acceuil couple"
              className={styles.imageHead1}
            />
            <img
              src="/Accueil/accueil1.jpeg"
              alt="Photo acceuil grossesse"
              className={styles.imageHead1}
            />
            <img
              src="/Accueil/accueil2.jpeg"
              alt="Photo acceuil naissance"
              className={styles.imageHead1}
            />
          </Carousel>
        </div>
      </div>
      <div className={styles.allContainer}>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image
                src="/Solene/solene3.jpg"
                alt="photo de Solene"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
            <div className={styles.description}>
              <p>
                Solène Doux photographe passionné, spécialisé dans le portrait
                et le paysage. <br />
                Mon travail se distingue par une utilisation subtile de la
                lumière naturelle et une approche minimaliste.
                <br /> Je cherche à capturer des moments authentiques, souvent
                empreints d’émotion.
                <br />
                Exposé dans plusieurs galeries, je collabore également avec des
                magazines et des entreprises.
              </p>
              <Link href="/apropos">
                <button className={styles.button}>Mon parcours</button>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.description}>
              <p>
                J'offres une gamme complète de services pour capturer les
                moments qui comptent. <br />
                Que ce soit pour des événements privés, des projets
                professionnels ou des créations artistiques, chaque séance est
                pensée sur mesure pour répondre à vos besoins.
              </p>
              <Link href="/prestation">
                <button className={styles.buttonPrestation}>
                  Mes prestations
                </button>
              </Link>
            </div>
            <div className={styles.image}>
              <Image
                src="/Couple/couple8.jpg"
                alt="photo de couple"
                width={4160}
                height={6240}
                loading="lazy"
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image
                src="/EVJF/evjf5.jpg"
                alt="photo EVJF"
                width={4160}
                height={6240}
                loading="lazy"
              />
            </div>
            <div className={styles.description}>
              <p>
                Envie de découvrir mon travail ? Cliquez ici pour explorer mon
                portfolio et voir comment chaque image raconte une histoire
                unique. À bientôt !
              </p>
              <Link href="/portfolio">
                <button className={styles.button}>Mon portfolio</button>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Home;
