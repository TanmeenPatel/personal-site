import Head from "next/head";
import Hero from "@/components/Sections/Hero";
import AboutMe from "@/components/Sections/AboutMe";
import Interests from "@/components/Sections/Interests";
import styles from "@/styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Tanmeen Patel</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <main>
                <Hero></Hero>
                <AboutMe></AboutMe>
                <Interests></Interests>
            </main>
            <style jsx global>
                {`
                    body {
                        margin: 0;
                        background-color: #1d1d1d;
                        font-size: 24px;
                        /* background-image: url("../src/stars.svg");
                        background-repeat: no-repeat; */
                        font-family: IBM Plex Mono, "Courier New", Courier,
                            monospace;
                        color: white;
                    }
                    a {
                        text-align: center;
                    }

                    @media (max-width: 768px) {
                        body {
                            font-size: 20px;
                        }
                    }
                `}
            </style>
        </>
    );
}
