import styles from "./PostCard.module.css";

export default function PostCard({ title, desc, info, link }) {
    return (
        <>
            <div className={styles.article}>
                <a
                    href={link ? `/abstract/${link}` : "/abstract/id"}
                    className={styles["article-link"]}
                >
                    <img
                        src="/assets/read.svg"
                        className={styles["read-more"]}
                    />
                    <h2>{title}</h2>
                    <span className={styles["about-art"]}>
                        {desc}
                        <br />
                        <br />
                        {info}
                    </span>
                </a>
            </div>

            <style jsx>
                {`
                    h2 {
                        /* font-weight: 300; */
                        letter-spacing: 1px;
                        font-size: 2em;
                        font-family: IBM Plex Serif, "Times New Roman", Times,
                            serif;
                        margin-top: 0.1em;
                    }
                `}
            </style>
        </>
    );
}
