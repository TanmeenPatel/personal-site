import styles from "@/styles/Abstract.module.css";
import { useEffect, useState } from "react";
import { GetPosts } from "@/contentful/postHandlers";
import PostCard from "../PostCard/PostCard";

export default function PostSection() {
    let [isLoaded, setLoaded] = useState(true);
    let [data, setData] = useState([]);
    let [iter, setIter] = useState(0);
    let [isMore, setMore] = useState(true);

    function LoadMorePosts() {
        setLoaded(false);
        GetPosts(iter)
            .then(([posts, more]) => {
                setLoaded(true);
                setData((d) => [...d, ...posts]);
                setIter(iter + 1);
                setMore(more);
            })
            .catch((err) => alert("oops an error occured"));
    }

    useEffect(() => {
        setLoaded(false);
        try {
            let d = JSON.parse(sessionStorage.getItem("data"));
            if (d.length !== 0) {
                let i = parseInt(sessionStorage.getItem("iter"));
                let more = sessionStorage.getItem("isMore") == "true";
                setLoaded(true);
                setData(d);
                setIter(i);
                setMore(more);
            } else {
                GetPosts(iter).then(([posts, more]) => {
                    setLoaded(true);
                    setData(posts);
                    setIter(iter + 1);
                    setMore(more);
                });
            }
        } catch (err) {
            console.error(err);
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem("data", JSON.stringify(data));
        sessionStorage.setItem("iter", iter);
        sessionStorage.setItem("isMore", isMore);
    }, [data, isMore, iter]);

    return (
        <>
            <section className={styles.sect2}>
                {data &&
                    data.map((post) => {
                        return (
                            <PostCard
                                title={post.fields.title}
                                desc={post.fields.desc}
                                info="6 MINS, 345 WORDS"
                                link={post.fields.slug}
                                key={post.sys.id}
                            />
                        );
                    })}
                {!isLoaded && <div className={styles.loader}>Loading...</div>}
                {isMore && isLoaded && (
                    <div className={styles.loadMoreDiv}>
                        <button
                            className={styles.loadMore}
                            onClick={LoadMorePosts}
                        >
                            Load More Posts
                        </button>
                    </div>
                )}
            </section>
        </>
    );
}
