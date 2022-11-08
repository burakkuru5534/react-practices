import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs,setBlogs] = useState([

        { title: ' A Clockwork Orange', body: 'lorem ipsum...', author: 'Anthony Burgess', id: 1 },
        { title: '1984', body: 'lorem ipsum...', author: 'Gerorge Orwell', id: 2 },
        { title: 'Kürk Mantolu Madonna ', body: 'lorem ipsum...', author: 'Sabahattin Ali', id: 3 }
    ])

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All blogs!"/>

        </div>
     );
}
 
export default Home;