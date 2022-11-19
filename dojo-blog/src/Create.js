import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('George Orwell');
    const [isPending, setIsPending] = useState(false); 
    const history = useHistory();

    const handleSubmit = (e) => {

        setIsPending(true);
        e.preventDefault(); // to prevent refresh 
        const blog = {title, body, author} 

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
                setIsPending(false);
               // history.go(-1); we can go back and forward with this function
                history.push('/'); // we can set the router again with push method instead.
        })
    }

    return ( 
        <div className="create">
            <h2>Create a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type="text"
                required
                value = { title }
                onChange = {(e) => setTitle(e.target.value)}
                >
                </input>
                <label>Blog Body:</label>
                <textarea 
                required
                value = { body }
                onChange = {(e) => setBody(e.target.value)}>
                    
                </textarea>
                <label>Blog Author:</label>
                <select
                 value = { author }
                 onChange = {(e) => setAuthor(e.target.value)}>
                    <option value="George Orwell">George Orwell</option>
                    <option value="Emile Zola">Emile Zola</option>
                </select>
                {!isPending && <button>Add Blog</button>}  
                {isPending && <button disabled>Adding...</button>}
            </form>
        </div>
     );
}
 
export default Create;