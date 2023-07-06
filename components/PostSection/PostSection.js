import styles from "@/styles/Abstract.module.css";
import { useEffect, useState } from "react";
import { GetPosts } from "@/contentful/postHandlers";
import PostCard from "../PostCard/PostCard";

export default function PostSection() {
    const [iter, setIter] = useState(0);
    const [more, setMore] = useState(true);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    function LoadMorePosts() {
        setLoading(true);
        GetPosts(iter)
            .then(([posts, func_more]) => {
                setData((d) => [...d, ...posts]);
                setIter(iter + 1);
                setMore(func_more);
            })
            .catch((err) => alert("oops an error occured"))
            .finally(setLoading(false));
    }

    useEffect(() => {
        setLoading(true);
        let loaded_data;
        try {
            loaded_data = JSON.parse(sessionStorage.getItem("data"));
        } catch (err) {
            loaded_data = [];
        }
        if (loaded_data && loaded_data.length !== 0) {
            let loaded_iter = parseInt(sessionStorage.getItem("iter"));
            let loaded_more = sessionStorage.getItem("more") == "true";
            setData(loaded_data);
            setIter(loaded_iter);
            setMore(loaded_more);
        } else {
            const fetchData = async (iter) => {
                const [posts, func_more] = await GetPosts(iter);
                setIter(iter + 1);
                setMore(func_more);
                setData(posts);
            };

            fetchData(iter).catch((err) => console.error(err));
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        sessionStorage.setItem("data", JSON.stringify(data));
        sessionStorage.setItem("more", String(more));
        sessionStorage.setItem("iter", String(iter));
    }, [data, more, iter]);

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
                {loading && <div className={styles.loader}>Loading...</div>}
                {more && !loading && (
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
