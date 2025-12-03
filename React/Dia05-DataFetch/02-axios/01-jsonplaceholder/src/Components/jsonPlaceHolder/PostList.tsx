import { useEffect, useState } from "react";
import type { Post } from "./model/post";
import { api } from "./service/api";

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api
      .get<Post[]>("/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading posts...</div>;

  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id} id={`comment-${post.id}`}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ol>
  );
}
