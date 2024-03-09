import styles from "@/styles/Home.module.css";

export default function AboutMe() {
    return (
        <>
            <section id="aboutme">
                <div className={styles.container2}>
                    <img
                        src="/assets/photo3.jpg"
                        alt="Tanmeen's Photo 3"
                        className={styles.photo3}
                    />
                    <h2>Welcome to my site.</h2>
                    <p className={styles.about}>
                        I&apos;m Tanmeen Patel, a high school senior that
                        dabbles in coding and making websites primarily.
                        I&apos;ve been curious for as long as I can remember,
                        reading and learning anything and everything that
                        interests me.
                        <br />
                        <br />
                        My interests lie in:
                    </p>
                    <p className={styles["about-mob"]}>
                        I&apos;m Tanmeen Patel, a high school senior that
                        dabbles in coding and making websites. I&apos;ve been
                        curious for as long as I can remember, reading and
                        learning everything that interests me. <br />
                        <br />
                        My interests lie in:
                    </p>
                    <div className={styles.interests}>
                        <span>👨‍💻</span>
                        <span>📕</span>
                        <span>🎥</span>
                    </div>
                    <div className={styles.interests} id="titles">
                        <span>Coding</span>
                        <span>Reading</span>
                        <span>Watching</span>
                    </div>
                </div>
            </section>
            <style jsx>
                {`
                    h2 {
                        text-align: right;
                        font-size: 3em;
                        font-family: IBM Plex Serif, Georgia, "Times New Roman",
                            Times, serif;
                        margin-right: 5vw;
                        margin-top: 10vh;
                    }
                    span {
                        font-size: 5em;
                    }

                    #titles {
                        font-size: 0.3em;
                        margin-top: auto;
                    }

                    @media (max-width: 768px) {
                        h2 {
                            position: relative;
                            font-size: 2em;
                            z-index: 10;
                        }

                        span {
                            text-align: center;
                            font-size: 3.5em;
                        }
                    }
                `}
            </style>
        </>
    );
}
