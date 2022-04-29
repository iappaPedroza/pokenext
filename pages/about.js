import styles from "../styles/About.module.css";

import Image from "next/image";

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>
            Poke<span>Next</span>
          </h1>
          <Image
            src="/images/pokeball.png"
            width="50"
            height="50"
            alt="PokeNext"
          />
        </div>
        <div className={styles.about}>
          <h1>Sobre o projeto</h1>
          <p>
            PokeNext é um App construído em Next.js para consultar Pokémons.
          </p>
          <Image
            src="/images/charizard.png"
            alt="Charizard"
            width="300"
            height="300"
          />
        </div>
      </div>
    </>
  );
}
