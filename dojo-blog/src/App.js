import './App.css';

function App() {

  const title = 'welcome to my world';
  const likes = 50;
  const link = 'http://www.google.com';
  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <h1>{ title }</h1>
        <h1>liked { likes } times.</h1>
        <p>{ 10 }</p>
        <p>{ "hello there!" }</p>
        <p>{ [55,34] }</p>
        <p>{ Math.random() * 10 }</p>
        <a href={ link }>Google</a>
      </div>
     
    </div>
  );
}

export default App;
