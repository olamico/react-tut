import { useEffect, useState } from 'react';
import Bloglist from './Bloglist';

const Home = () => {

    const [blogs, setBlogs] = useState (null);
    
    useEffect (() => {
          fetch ('http://localhost:3000/blogs')
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data);
          })
    }, []);

    return (
        <div className="Home">
            {/* <Bloglist blogs={blogs} title="All blogs"/>
            <Bloglist blogs={blogs.filter((blogs) => blogs.author === 'Olaleye')} title="Olaleye's blog"/> */}
        </div>
     );
}
 
export default Home;