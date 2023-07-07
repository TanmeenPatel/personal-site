import { createClient } from "contentful";

const client = createClient({
    space: process.env["NEXT_PUBLIC_CONTENTFUL_SPACE_ID"],
    accessToken: process.env["NEXT_PUBLIC_CONTENTFUL_API_TOKEN"],
});

export let LoadAllTags = async () => {
    let tags = await client.getTags();
    const initialVal = {};
    let reduced = tags.items.reduce((obj, item) => {
        return { ...obj, [item.sys.id]: item.name };
    }, initialVal);
    return reduced;
};

export let GetPosts = async (iter) => {
    let res = await client.getEntries({
        content_type: "post",
        select: "sys.id,fields.title,fields.desc,fields.slug,metadata.tags",
        order: "-sys.createdAt",
    });

    let resEd = await Promise.all(
        res.items.map(async (it) => {
            it = { ...it, tags: [] };
            for (const j of it.metadata.tags) {
                let { name } = await client.getTag(j.sys.id);
                it.tags.push(name);
            }
            return it;
        })
    );

    return resEd;
};

export let GetAPost = async (slug) => {
    let res = await client.getEntries({
        content_type: "post",
        select: "fields.title,fields.content,fields.slug,sys.createdAt,sys.updatedAt",
        "fields.slug": slug,
    });
    res.items[0].sys.createdAt = new Date(res.items[0].sys.createdAt);
    res.items[0].sys.updatedAt = new Date(res.items[0].sys.updatedAt);
    return res.items[0];
};

export let GetAllPosts = async () => {
    let res = await client.getEntries({
        content_type: "post",
        select: "sys.id,fields.title,fields.desc,fields.slug,fields.readingTime",
    });
    return res.items;
};

export let GetAllPostSlugs = async () => {
    let res = await client.getEntries({
        content_type: "post",
        select: "fields.slug",
    });
    return res.items;
};
