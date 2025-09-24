// pages/posts.tsx
import React from "react";
import { GetStaticProps, NextPage } from "next";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

type PostsPageProps = {
  posts: PostProps[];
};

const PostsPage: NextPage<PostsPageProps> = ({ posts }) => {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>

      <div className="grid gap-4">
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts available.</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.content}
              userId={post.id /* or map to a userId if you want */}
            />
          ))
        )}
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  try {
    // limit to 10 posts to keep build light — remove _limit if you want all
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data: { userId: number; id: number; title: string; body: string }[] = await res.json();

    // Map JSONPlaceholder shape (body) to our PostProps shape (content)
    const posts: PostProps[] = data.map((p) => ({
      id: p.id,
      title: p.title,
      content: p.body,
    }));

    return {
      props: { posts },
      revalidate: 60, // optional: rebuild page at most once per minute
    };
  } catch (error) {
    // on error, return empty list and avoid build failure
    return {
      props: { posts: [] },
      revalidate: 60,
    };
  }
};

export default PostsPage;
