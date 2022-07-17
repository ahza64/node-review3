import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/team_members", { method: 'GET' })
      .then((res) => res.json())
      .then((data) => setData(data.length));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}


export default App;
