import { useState } from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState ([
        { title: 'Luxury perfumes and scents', body: 'lorem ipsum...', author: 'Olusola', id: 1 },
        { title: 'spend little and smell classy!', body: 'lorem ipsum...', author: 'Michael', id: 2 },
        { title: 'Major points of perfume', body: 'lorem ipsum...', author: 'Olaleye', id: 3 }
      ]);
    
    

    return (
        <div className="Home">
            {blogs.map(blog => (
         <div className="blog-preview" key={blog.id} >
           <h2>{ blog.title }</h2>
           <p>Written by { blog.author }</p>
         </div>
            ))}
        </div>
     );
}
 
export default Home;