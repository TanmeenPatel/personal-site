import styles from "@/styles/Abstract.module.css";

export default function Pagination({
    posts_length,
    page_size,
    current_page,
    onPageChange,
}) {
    const pageCount = Math.ceil(posts_length / page_size);

    if (pageCount === 1) return null;

    const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

    return (
        <div>
            <ul className={styles.pagination}>
                {pages.map((page) => {
                    return (
                        <li
                            key={page}
                            className={
                                page == current_page
                                    ? styles.pageItemActive
                                    : styles.PageItem
                            }
                        >
                            <a
                                className={styles.pageLink}
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export function paginate(current_page, page_size, items) {
    let startIndex = (current_page - 1) * page_size;
    return items.slice(startIndex, startIndex + page_size);
}
