import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import Image from "next/image";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    lazyLoad: "ondemand", // Lazy load des images
    pauseOnHover: false,
    fade : true,
  };

  return (
    <div>
      <Head>
        <title>Solène Doux Photographie</title>
        <meta
          name="description"
          content="Photographe dans la région Toulousaine spécialisée dans les moments forts de la vie, mariage, maternité, famille, etc."
        />
        <link
          rel="preload"
          href="/Accueil/accueil3.webp"
          as="image"
          type="image/webp"
        />
      </Head>
      <div className={styles.sliderContainer}>
        <Header />
        <div>
          <Slider {...settings}>
            <Image
              src="/Accueil/accueil3.webp"
              alt="Photo acceuil couple"
              width={1500}
              height={850}
              className={styles.imageHead}
              priority
              layout="intrinsic"
            />
            <Image
              src="/Accueil/accueil1.webp"
              alt="Photo acceuil grossesse"
              width={1500}
              height={850}
              className={styles.imageHead}
              loading="lazy"
              layout="intrinsic"
            />
            <Image
              src="/Accueil/accueil4.webp"
              alt="Photo acceuil couple"
              width={1500}
              height={850}
              className={styles.imageHead}
              loading="lazy"
              layout="intrinsic"
            />
            <Image
              src="/Accueil/accueil2.webp"
              alt="Photo acceuil naissance"
              width={1500}
              height={850}
              className={styles.imageHead}
              loading="lazy"
              layout="intrinsic"
            />
          </Slider>
        </div>
      </div>
      <div>
        <div>
          <div className={styles.container}>
            <div className={styles.containerPhoto}>
              <Image
                src="/Solene/solene4.webp"
                alt="photo de Solene"
                width={500}
                height={750}
                loading="lazy"
                className={styles.image}
              />
            </div>
            <div className={styles.description}>
              <p>
                Photographe passionnée et spécialisée dans les moments forts de
                la vie, mon objectif : capturer les émotions authentiques et
                sublimer chaque instant avec sensibilité et professionnalisme{" "}
              </p>
              <Link href="/apropos">
                <button className={styles.button}>A propos</button>
              </Link>
            </div>
          </div>
        </div>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOnce={true}
          delay={1 * 100}
        >
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
            <div className={styles.containerPhoto}>
              <Image
                src="/Couple/couple6.webp"
                alt="photo de couple"
                width={500}
                height={750}
                className={styles.image}
                loading="lazy"
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOnce={true}
          delay={1 * 100}
        >
          <div className={styles.container}>
            <div className={styles.containerPhoto}>
              <Image
                src="/Solo_confiance_en_soi/solo_confiance12.webp"
                alt="photo EVJF"
                width={500}
                height={750}
                loading="lazy"
                className={styles.image}
              />
            </div>
            <div className={styles.description}>
              <p>
                Découvrez mon portfolio, un espace où chaque projet reflète ma
                passion et mon approche de cet art qu’est la photographie.
                Plongez dans mon univers et n’hésitez pas à me contacter afin de
                me partager vos projets et vos envies.
              </p>
              <Link href="/portfolio">
                <button className={styles.button}>Mon portfolio</button>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
