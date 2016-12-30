export interface Post {
    title: string;
    category: string;
}

export interface GroupPosts {
    category: string;
    posts: Post[];
}