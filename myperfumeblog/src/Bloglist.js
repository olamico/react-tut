const BlogList = ({ blogs }) => {
  if (!Array.isArray(blogs)) return <div>No blogs available</div>;
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
