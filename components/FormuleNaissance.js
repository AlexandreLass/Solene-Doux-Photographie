import styles from "../styles/Formule.module.css";
import Link from "next/link";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { FaInstagram } from "react-icons/fa";
import "typeface-poppins";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

function FormuleNaissance() {
  const [open, setOpen] = useState(false);

  const handleOpen = (newOpen) => {
    setOpen(newOpen);
  };

  const drawerList = (
    <Box
      sx={{ width: 250, height: "100vh", fontSize: 34 }}
      role="presentation"
      onClick={() => handleOpen(false)}
    >
      <List>
        <ListItem className={styles.list} disablePadding>
          <Link href="/apropos">
            <span className={styles.lien}>Mon parcours</span>
          </Link>
          <Link href="/prestation">
            <span className={styles.lien}>Prestation</span>
          </Link>
          <Link href="/portfolio">
            <span className={styles.lien}>Portfolio</span>
          </Link>
          <Link href="/">
            <span className={styles.lien}>Galerie privée</span>
          </Link>
          <Link href="/contact">
            <span className={styles.lien}>Contact</span>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Head>
        <title>Solène Photographie</title>
      </Head>
      <div className={styles.head}>
        <div className={styles.headContainer}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => handleOpen(true)}
            className={styles.icon}
            size="2x"
          />
          <Drawer
            open={open}
            onClose={() => handleOpen(false)}
            sx={{ backgroundColor: "transparent" }}
          >
            {drawerList}
          </Drawer>
          <Link href="/">
            <div className={styles.logo}>
              <Image
                width={296}
                height={44}
                src="/Logo/logo_nom2.png"
                style={{ backgroundColor: "transparent" }}
              />
            </div>
          </Link>
          <a
            href="https://www.instagram.com/solenedoux_photographie/"
            className={styles.instaIcon}
            target="_blank"
          >
            <FaInstagram style={{ backgroundColor: "transparent" }} size={40} />
          </a>
        </div>
      </div>
      <div style={{ textAlign: "center", fontFamily: "serif" }}>
        <h1>Séance naissance</h1>
        <p style={{ fontSize: 18 }}>
          La séance photo naissance est un moment magique où je capture les
          premiers jours de vie de votre bébé, dans toute sa douceur et sa
          fragilité.
          <br /> Immortalisée dans les 30 premiers jours, cette séance permet de
          photographier votre tout-petit dans des poses naturelles et
          sécurisées, en mettant l’accent sur les détails précieux. <br />
          Elle se déroulera à domicile, pour que chaque photo soit réalisée dans
          le respect du bien-être de votre nouveau-né, tout en étant dans votre
          univers, pour des souvenirs tendres et intemporels.
        </p>
      </div>
      <ScrollAnimation animateIn="fadeInUp">
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/Naissance/naissance1.jpg"
              alt="photo portrait"
              width={3510}
              height={5270}
            />
          </div>
          <div className={styles.description}>
            <div>
              <h1 className={styles.formulaTitle}>Formule Instants</h1>
              <h2 className={styles.h2}>Séance de 30 min</h2>
              <span className={styles.price}>150 €</span>
              <p className={styles.p}>
                Galerie complète envoyée (environ 50 photos)
              </p>
            </div>
            <div>
              <Link href="/contact">
                <p style={{ textAlign: "center" }}>
                  Pour plus d'informations{" "}
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Contactez-moi
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" delay={1 * 100}>
        <div className={styles.container}>
          <div className={styles.description}>
            <div>
              <h1 className={styles.formulaTitle}>Formule Douceur</h1>
              <h2 className={styles.h2}>Séance de 45 min</h2>
              <span className={styles.price}>200 €</span>
              <p className={styles.p}>
                Galerie complète envoyée (environ 80 photos)
              </p>
            </div>
            <div>
              <Link href="/contact">
                <p style={{ textAlign: "center" }}>
                  Pour plus d'informations{" "}
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Contactez-moi
                  </span>
                </p>
              </Link>
            </div>
          </div>
          <div className={styles.image}>
            <Image
              src="/Naissance/naissance7.jpg"
              alt="photo portrait"
              width={3510}
              height={5270}
            />
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft" delay={1 * 100}>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/Naissance/naissance2.jpg"
              alt="photo portrait"
              width={3510}
              height={5270}
            />
          </div>
          <div className={styles.description}>
            <div>
              <h1 className={styles.formulaTitle}>Formule Prestige</h1>
              <h2 className={styles.h2}>Séance d'1h</h2>
              <span className={styles.price}>250 €</span>
              <p className={styles.p}>
                Galerie complète envoyée (environ 100 photos)
              </p>
            </div>
            <div>
              <Link href="/contact">
                <p style={{ textAlign: "center" }}>
                  Pour plus d'informations{" "}
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Contactez-moi
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default FormuleNaissance;
