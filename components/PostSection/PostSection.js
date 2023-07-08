import styles from "@/styles/Abstract.module.css";
import Pagination, { paginate } from "../Pagination/Pagination";
import PostCard from "../PostCard/PostCard";
import { useState, useEffect } from "react";

export default function PostSection({ posts }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [loaded, setLoaded] = useState(false);
    const pageSize = 3;

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        let p = sessionStorage.getItem("current_page");
        if (p) {
            let cur_page = parseInt(p);
            console.log("Setting");
            setCurrentPage(cur_page);
        }
        setLoaded(true);
    }, []);

    useEffect(() => {
        if (!loaded) return;
        console.log("Setting in sessionStorage");
        sessionStorage.setItem("current_page", JSON.parse(currentPage));
    }, [currentPage]);

    const paginatedPosts = paginate(currentPage, pageSize, posts);

    return (
        <>
            <section className={styles.sect2}>
                {paginatedPosts.map((post) => {
                    return (
                        <PostCard
                            title={post.fields.title}
                            desc={post.fields.desc}
                            link={post.fields.slug}
                            wordCount={post.fields.wordCount}
                            key={post.sys.id}
                        />
                    );
                })}
                <Pagination
                    current_page={currentPage}
                    page_size={pageSize}
                    onPageChange={onPageChange}
                    posts_length={posts.length}
                ></Pagination>
            </section>
        </>
    );
}
