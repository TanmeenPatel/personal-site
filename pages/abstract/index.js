import PostCard from "@/components/PostCard/PostCard";
import PostSection from "@/components/PostSection/PostSection";
import { GetPosts } from "@/contentful/postHandlers";
import Head from "next/head";

import { useEffect, useState } from "react";

import styles from "@/styles/Abstract.module.css";

export default function AbstractPage({ posts }) {
    let [hamOpen, setHamOpen] = useState(0);
    let toggleHam = () => {
        setHamOpen(hamOpen ? 0 : 1);
    };

    useEffect(() => {
        var x = document.getElementById("myLinks");
        var y = document.getElementById("desc");
        if (hamOpen == 0) {
            x.style.display = "none";
        } else {
            x.style.display = "flex";
            y.style.marginTop = "75vh";
        }
    }, [hamOpen]);
    return (
        <>
            <Head>
                <title>Abstract</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <section className={styles.sect1}>
                <div id="myLinks">
                    <a href="/" id="link1">
                        HOME
                    </a>
                    <a href="/#aboutme" id="link2">
                        ABOUT ME
                    </a>
                    <a
                        href="https://www.polywork.com/tanmeenpatel"
                        id="link3"
                        target="_blank"
                    >
                        PROEJCTS
                    </a>
                    <a href="#" id="link4">
                        BLOG
                    </a>
                </div>
                <a href="#" className={styles.icon} onClick={toggleHam}>
                    <img
                        src="/assets/hamburger-ab.svg"
                        alt=""
                        className={styles["ham-menu"]}
                    />
                </a>
                <img
                    src="/assets/trianglesabmob.svg"
                    alt=""
                    className={styles["tr1-mob"]}
                />
                <img src="/assets/trianglesab.svg" alt="" id="tr1" />
                <div className={styles.imgs}>
                    <img src="/assets/photo1abs.png" alt="" id="landing-img" />
                </div>
                <div className={styles["main-mob"]}>
                    <img
                        src="/assets/photoabsmob.svg"
                        alt=""
                        id="landing-img"
                    />
                    <img
                        src="/assets/abstract.svg"
                        alt=""
                        className={styles.heading}
                    />
                    <p id="landing-text">
                        Just a place to store my thoughts about unique and cool
                        topics.
                    </p>
                </div>
                <div className={styles.main}>
                    <img
                        src="/assets/abstract.svg"
                        alt=""
                        className={styles.heading}
                    />
                    <p id="landing-text">
                        Just a place to store my thoughts about unique and cool
                        topics. I post every once in a while at no regular time
                        interval, so just keep visiting the page.{" "}
                    </p>
                </div>
                <div className={styles.desc} id="desc">
                    i like movies and tech...
                </div>
                <div className={styles.navbar}>
                    <a href="/" className={styles["nav-links"]}>
                        HOME
                    </a>
                    <a href="/#aboutme" className={styles["nav-links"]}>
                        ABOUT ME
                    </a>
                    <a
                        href="https://www.polywork.com/tanmeenpatel"
                        className={styles["nav-links"]}
                        target="_blank"
                    >
                        PROJECTS
                    </a>
                    <a href="#" className={styles["nav-links"]}>
                        BLOG
                    </a>
                </div>
            </section>
            <PostSection posts={posts}></PostSection>

            <style jsx global>
                {`
                    html {
                        overflow-x: hidden;
                    }

                    body {
                        margin: 0;
                        font-size: 24px;
                        background-color: #1d1d1d;
                        font-family: IBM Plex Mono, "Courier New", Courier,
                            monospace;
                        color: white;
                        box-sizing: border-box;
                        overflow-x: hidden;
                    }

                    a {
                        color: white;
                        text-decoration: none;
                    }

                    #tr1 {
                        position: absolute;
                        width: 15vw;
                        margin-left: 85vw;
                        z-index: 2;
                    }

                    #landing-img {
                        width: 25vw;
                    }

                    #landing-text {
                        text-align: center;
                        margin-top: 5vh;
                        width: 60vw;
                        font-size: 0.9em;
                    }

                    #myLinks {
                        display: none;
                    }

                    @media (max-width: 768px) {
                        body {
                            font-size: 20px;
                        }

                        #tr1 {
                            display: none;
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

                        #landing-img {
                            position: absolute;
                            width: 60vw;
                            margin-left: 40vw;
                            margin-top: 15vh;
                        }

                        #landing-text {
                            position: absolute;
                            margin-top: 1vh;
                            width: 80vw;
                            margin-left: 10vw;
                            font-size: 0.8em;
                        }
                    }
                `}
            </style>
        </>
    );
}

export async function getStaticProps() {
    const posts = await GetPosts();
    return {
        props: { posts },
        revalidate: 30,
    };
}
