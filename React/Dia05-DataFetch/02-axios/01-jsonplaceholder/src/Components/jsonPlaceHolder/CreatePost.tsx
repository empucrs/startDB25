import { useState } from "react";
import type { Post, PostPartial } from "./model/post";
import { api } from "./service/api";

export default function CreatePost() {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      //const newPost: Omit<Post, "id"> = { title, body };
      const newPost: PostPartial = { title, body };
      const response = await api.post<PostPartial>("/posts", newPost);
      console.log("Post created:", response.data);
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
}
