import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a
            href="https://instagram.com/miguelgargallo.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            AirDetails!
          </a>
        </h1>
        <p className={styles.description}>
          Get started by knowing our{" "}
          <code className={styles.code}>VIP events</code>
        </p>
        <div className={styles.grid}>
          <a
            href="https://express.adobe.com/page/sTLdQH7sQVsgb/index.html"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>VIP Galas &rarr;</h2>
            <p>
              Premios ESLAND, IBAI, El Xokas, IlloJuan, Jordi Wild, Jagger ...
              The Grefg!
            </p>
          </a>
          <a
            href="https://express.adobe.com/page/OopViOPVJhVgV/index.html"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Professional Sports &rarr;</h2>
            <p>
              FC Barcelona, Barça, Barça B, Femeni, Basquet, Events Burocratics
              i Hockey.
            </p>
          </a>
          <a
            href="https://express.adobe.com/page/t6UQMW9VDePJP/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Drone Pilot &rarr;</h2>
            <p>Mavic 2 Pro built in Hasselblad camera shootings sessions.</p>
          </a>
          <a
            href="https://express.adobe.com/page/podDpYbThdPUR/index.html"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>RACING &rarr;</h2>
            <p>Tesla Motors collab, Model X, Barcelona EXPO.</p>
          </a>
          <a
            href="https://mailto:miguelgargalloes@gmail.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Send me Mail! &rarr;</h2>
            <p>Contact me for any kind of event or project.</p>
          </a>
          <a
            href="https://twitter.com/miguelgargallo"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>DM on Twitter now &rarr;</h2>
            <p>Send me a DM on Twitter for any kind of event or dev project.</p>
          </a>
        </div>
        <p className={styles.description}>
          I am a ,{" "}
          <code className={styles.code}>Javascript and Typescript</code>and
          <code className={styles.code}>React and Next developer</code>.
        </p>
        <div className={styles.grid}>
          <a
            href="https://pylar.org"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>AI projects &rarr;</h2>
            <p>Pylar draws what you want with Stable Diffusion.</p>
          </a>
          <a
            href="https://huggingface.co/miguelgargallo/huggingtweets?text=My+dream+is"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Artificial Intelligence &rarr;</h2>
            <p>
              I write a free AI license called Pylar AI creative ML license.
            </p>
          </a>
          <a
            href="https://github.com/miguelgargallo"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>See my Dev profile &rarr;</h2>
            <p>See my Github profile for more info.</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/itamaesanorg/AIRDETAILS-WEB"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the code. 2023 © AirDetails, all rights reserved.
        </a>
      </footer>
    </div>
  );
}
