const Home = () => {

    const handleClick = (e) =>{
        console.log('clicked',e)
    }
    const handleClickAgain = (name,e) =>{
        console.log('clicked by '+name, e.target)
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=> handleClickAgain('burak',e)}>Click me again</button>
        </div>
     );
}
 
export default Home;