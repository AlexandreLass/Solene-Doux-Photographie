import styles from "../styles/Apropos.module.css";
import Head from "next/head";
import "animate.css";
import "animate.css/animate.compat.css";
import Image from "next/image";
import Header from "./Header";

export default function Apropos() {
  return (
    <div>
      <Head>
        <title>Photographie Solène</title>
        <meta
          name="description"
          content="Photographe dans la région Toulousaine spécialisée dans les moments forts de la vie, mariage, maternité, famille, etc."
        />
        <link
          rel="preload"
          href="/fonts/InriaSerif-Regular.ttf"
          as="font"
          type="font/ttf"
          crossorigin="anonymous"
        />
      </Head>
      <Header />
      <div>
        <div className={styles.presentationContainer}>
          <p className={styles.presentationTexte}>
            Enchanté,
            <br />
            <br />
            Moi c’est Solène, j’ai 30 ans et je vis dans la région Toulousaine
            depuis ma plus tendre enfance.
            <br />
            <br />
            Photographe passionnée et spécialisée dans les moments forts de la
            vie, mon objectif : capturer les émotions authentiques et sublimer
            chaque instant avec sensibilité et professionnalisme
            <br />
            <br />
            Que ce soit pour un mariage, une séance maternité, des photos de
            famille ou encore un shooting pour des professionnels, je m'efforce
            de créer des images intemporelles qui racontent votre histoire.
            Chaque projet est unique, et j'aime m'adapter à vos envies et
            besoins pour queles souvenirs que vous conserverez soient à la
            hauteur de vos attentes.
            <br />
          </p>
          <div className={styles.image}>
            <Image
              src="/Solene/solene4.webp"
              alt="photo de Solene"
              width={3839}
              height={5758}
              priority
            />
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div className={styles.presentationContainer}>
          <div className={styles.image}>
            <Image
              src="/Solene/solene2.webp"
              alt="photo de Solene"
              width={3501}
              height={5251}
            />
          </div>
          <p className={styles.presentationTexte}>
            Avec un oeil attentif aux détails et une approche naturelle, je
            cherche à immortaliser les moments les plus précieux tout en vous
            offrant une expérience conviviale et sans pression.
            <br />
            <br />
            Ma priorité est que vous vous sentiez à l’aise devant l’objectif et
            que chaque cliché reflète votre personnalité. Si vous recherchez des
            images pleines d’émotions, sincères et créatives, je serai ravie de
            vous accompagner dans cette aventure.
            <br />
            <br />
            N’hésitez pas à me contacter pour discuter de vos projets et de vos
            envies photographiques !
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
