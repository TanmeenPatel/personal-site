import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Hero() {
    let [hamOpen, setHamOpen] = useState(0);
    let toggleHam = () => {
        setHamOpen(hamOpen ? 0 : 1);
    };

    useEffect(() => {
        var x = document.getElementById("myLinks");
        var y = document.getElementById("desc");
        var z = document.getElementById("tr3");
        var w = document.getElementById("stars");
        if (hamOpen == 0) {
            // when it's not open
            x.style.display = "none";
            y.style.marginTop = "90vh";
            z.style.marginTop = "99.5vh";
            w.style.backgroundImage = 'url("/assets/stars.svg")';
        } else {
            // when it's open
            x.style.display = "flex";
            y.style.marginTop = "75vh";
            z.style.marginTop = "84.5vh";
            w.style.backgroundImage = "none";
        }
    }, [hamOpen]);
    return (
        <>
            <section>
                <div className={styles.container}>
                    <div id="myLinks">
                        <a href="#" id="link1">
                            HOME
                        </a>
                        <a href="#aboutme" id="link2">
                            ABOUT ME
                        </a>
                        <a
                            href="https://www.polywork.com/tanmeenpatel"
                            id="link3"
                            target="_blank"
                        >
                            PROEJCTS
                        </a>
                        <a href="/abstract" id="link4">
                            BLOG
                        </a>
                    </div>
                    <a href="#" className={styles.icon} onClick={toggleHam}>
                        <img
                            src="/assets/hamburger.svg"
                            alt=""
                            className={styles["ham-menu"]}
                        />
                    </a>
                    <div className={styles.stars} id="stars">
                        <img
                            src="/assets/triangles.svg"
                            width="300px"
                            className={styles.tr1}
                        />
                        <img
                            src="/assets/hello.svg"
                            className={styles.text}
                            width="800px"
                        />
                        <img
                            src="/assets/hello_mob.svg"
                            className={styles["text-mob"]}
                            width="400px"
                        />
                    </div>
                    <img
                        src="/assets/photo1.png"
                        alt="Tanmeen's Photo 1"
                        className={styles.photo1}
                    />
                    <img
                        src="/assets/photo2.png"
                        alt="Tanmeen's Photo 2"
                        className={styles.photo2}
                    />
                    <div className={styles["vertical-div"]}></div>
                    <div className={styles.navbar}>
                        <a href="#" className={styles["nav-links"]}>
                            HOME
                        </a>
                        <a href="#aboutme" className={styles["nav-links"]}>
                            ABOUT ME
                        </a>
                        <a
                            href="https://www.polywork.com/tanmeenpatel"
                            className={styles["nav-links"]}
                            target="_blank"
                        >
                            PROJECTS
                        </a>
                        <a href="/abstract" className={styles["nav-links"]}>
                            BLOG
                        </a>
                    </div>
                    <div className={styles.desc} id="desc">
                        <span id="desc-text">
                            developer and ice cream enthusiast
                        </span>
                    </div>
                    <img src="/assets/triangles2.svg" className={styles.tr2} />
                    <img
                        src="/assets/triangles3.svg"
                        className={styles.tr3}
                        id="tr3"
                    />
                </div>
            </section>

            <style jsx>
                {`
                    #myLinks {
                        display: none;
                    }

                    #desc-text {
                        font-size: 0.85em;
                    }

                    @media (max-width: 768px) {
                        body {
                            font-size: 20px;
                        }

                        #desc-text {
                            font-size: 0.85em;
                            text-align: center;
                        }

                        #myLinks {
                            display: none;
                            /* position: absolute; */
                            flex-wrap: wrap;
                            justify-content: center;
                            align-items: center;
                            padding: 3vh 0;
                        }

                        #myLinks a {
                            display: block;
                            color: white;
                            width: 30vw;
                            margin: 10px;
                            padding: 14px 16px;
                            text-decoration: none;
                            font-size: 17px;
                        }

                        #myLinks a.icon {
                            display: block;
                            position: absolute;
                        }

                        #link1 {
                            background-color: #8d46b9;
                        }

                        #link2 {
                            background-color: #c8791d;
                        }

                        #link3 {
                            background-color: #369545;
                        }

                        #link4 {
                            background-color: #54b6c2;
                        }
                    }
                `}
            </style>
        </>
    );
}
