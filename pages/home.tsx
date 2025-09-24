// pages/home.tsx
import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

type Post = {
  title: string;
  content: string;
};

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Home Page</h1>

      {/* Button to open the modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        ➕ Add New Post
      </button>

      {/* Render posts */}
      <div className="grid gap-4">
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet — click "Add New Post" to create one.</p>
        ) : (
          posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))
        )}
      </div>

      {/* Post modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default HomePage;
