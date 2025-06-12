import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch("http://localhost:5000/api/posts/all-posts");

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { <BlogList blogs={blogs.data} /> }
    </div>
  );
}
 
export default Home;