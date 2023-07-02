import styles from "@/styles/AbstractPost.module.css";
import Head from "next/head";
import { GetAPost, GetAllPostSlugs } from "@/contentful/postHandlers";
import { remark } from "remark";
import html from "remark-html";

export default function PostPage(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <img
                src="/assets/trianglesart.svg"
                className={styles["triangles"]}
            />
            <div className={styles["return"]}>
                <a href="abstract.html">
                    <img
                        src="/assets/arrow.svg"
                        alt=""
                        style={{
                            marginLeft: "3vw",
                            marginTop: "5vh",
                            width: "3vh",
                            userSelect: "none",
                        }}
                    />
                </a>
                <span>
                    <a href="/abstract">back to blog</a>
                </span>
            </div>
            <div className={styles["heading-info"]}>
                <h1>{props.title}</h1>
                <span className={styles["read-info"]}>345 words, 6 mins</span>
            </div>
            <div
                className={styles["article"]}
                dangerouslySetInnerHTML={{ __html: props.content }}
            ></div>

            <style jsx>
                {`
                    html {
                        scroll-behavior: smooth;
                        overflow-x: hidden;
                    }

                    body {
                        margin: 0;
                        background-color: #1d1d1d;
                        font-size: 24px;
                        /* background-image: url("/assets/stars.svg");
                    background-repeat: no-repeat; */
                        font-family: IBM Plex Mono, "Courier New", Courier,
                            monospace;
                        color: white;
                    }

                    h1 {
                        font-family: IBM Plex Serif;
                        margin-left: 3vw;
                        margin-bottom: 3vh;
                    }

                    span {
                        font-size: 0.8em;
                        user-select: none;
                    }
                `}
            </style>
        </>
    );
}

export async function getStaticPaths() {
    let slugs = await GetAllPostSlugs();
    const paths = slugs.map(({ fields }) => {
        return { params: { id: fields.slug } };
    });
    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({ params }) {
    let slug = params.id;
    let data = await GetAPost(slug);
    let { title, content } = data.fields;
    let { createdAt, updatedAt } = data.sys;
    let parsed = await remark().use(html).process(content);
    let str_content = parsed.toString();
    return {
        props: {
            title,
            created: createdAt.toDateString(),
            updated: updatedAt.toDateString(),
            content: str_content,
        },
        revalidate: 30,
    };
}
