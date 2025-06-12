import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/posts/create-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // If using auth, also send token here:
          // "Authorization": `Bearer ${yourToken}`
        },
        body: JSON.stringify({ title, description }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to create post");
      }

      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
