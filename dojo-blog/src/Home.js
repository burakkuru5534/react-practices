import { useState } from "react";

const Home = () => {

    const [name,setName] = useState('suzi')
    const [age, setAge] = useState(23)
    const handleClick = (e) =>{

        setName('suzan')
        setAge(24)
        
    }
    const handleClickAgain = (name,e) =>{
        console.log('clicked by '+name, e.target)
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <h2>{ name } is { age } years old. </h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=> handleClickAgain('burak',e)}>Click me again</button>
        </div>
     );
}
 
export default Home;