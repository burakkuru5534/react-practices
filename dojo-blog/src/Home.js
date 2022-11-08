import { useState } from "react";

const Home = () => {

    const [blogs,setBlogs] = useState([

        { title: ' A Clockwork Orange', body: 'lorem ipsum...', author: 'Anthony Burgess', id: 1 },
        { title: '1984', body: 'lorem ipsum...', author: 'Gerorge Orwell', id: 2 },
        { title: 'Kürk Mantolu Madonna ', body: 'lorem ipsum...', author: 'Sabahattin Ali', id: 3 }
    ])

    return ( 
        <div className="home">
            {blogs.map( blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                </div>
            ))}

        </div>
     );
}
 
export default Home;