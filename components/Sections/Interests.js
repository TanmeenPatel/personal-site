import styles from "@/styles/Home.module.css";

export default function Interests() {
    return (
        <>
            <section>
                <div className={styles.container} id="last-cont">
                    <p className={styles.about2}>
                        From a young age, I&apos;ve felt that rush of adrenaline
                        while solving a problem or doing something I find
                        remotely cool. I&apos;ve tried seeking this feeling
                        everywhere I go, leading to some truly unique hobbies.
                        <br />
                        <br />I love solving Rubik&apos;s cubes, playing
                        football, taking photos, and doing (an extremely watered
                        down version of) parkour.
                    </p>
                    <p className={styles["about2-mob"]}>
                        From a young age, I&apos;ve felt that rush of adrenaline
                        while solving a problem or doing something I find
                        remotely cool. I&apos;ve tried seeking this feeling
                        everywhere I go.
                        <br />
                        <br />I love solving Rubik&apos;s cubes, playing
                        football, taking photos, and doing (an extremely watered
                        down version of) parkour.
                    </p>
                    <p className={styles.blog}>
                        Read my blog{" "}
                        <a href="/abstract">
                            <b>Abstract</b>
                        </a>{" "}
                        for my views on random topics that intrigue me like if
                        prisons actually work and why I hate Anupamaa.
                    </p>
                    <div className={styles["socials-mob"]}>
                        <a
                            href="https://github.com/TanmeenPatel"
                            className={styles["soc-links"]}
                            target="_blank"
                        >
                            GITHUB
                        </a>
                        <a href="#" className={styles["soc-links"]}>
                            LINKEDIN
                        </a>
                        <a
                            href="mailto:tanmeenpatel@gmail.com"
                            className={styles["soc-links"]}
                        >
                            EMAIL
                        </a>
                    </div>
                    <div className={styles.footer}>
                        <img
                            src="/assets/polygons.svg"
                            height="220px"
                            className={styles.polygons}
                        />
                        <div className={styles.socials}>
                            <a
                                href="https://github.com/TanmeenPatel"
                                className={styles["soc-links"]}
                                target="_blank"
                            >
                                GITHUB
                            </a>
                            <a href="https://www.linkedin.com/in/tanmeen-patel" className={styles["soc-links"]} target="_blank">
                                LINKEDIN
                            </a>
                            <a
                                href="mailto:tanmeenpatel@gmail.com"
                                className={styles["soc-links"]}
                            >
                                EMAIL
                            </a>
                        </div>
                        <img
                            src="/assets/trianglessquare.svg"
                            width="210px"
                            className={styles.trsq}
                        />
                    </div>
                </div>
            </section>

            <style jsx>
                {`
                    #last-cont {
                        height: auto;
                        margin-top: 30vh;
                    }

                    @media (max-width: 768px) {
                        #last-cont {
                            margin: 0;
                        }
                    }
                `}
            </style>
        </>
    );
}
