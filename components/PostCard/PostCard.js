import styles from "./PostCard.module.css";

export default function PostCard({ title, desc, info }) {
    return (
        <>
            <div className={styles.article}>
                <a href="article.html" className={styles["article-link"]}>
                    <img
                        src="/assets/read.svg"
                        className={styles["read-more"]}
                    />
                    <h2 style={{ textAlign: "left" }}>{title}</h2>
                    <span className={styles["about-art"]}>
                        {desc}
                        <br />
                        <br />
                        {info}
                    </span>
                </a>
            </div>
        </>
    );
}
