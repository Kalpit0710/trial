import './App.css';
import logo from './logo.svg'

function App() {

  let name = "library";
  let arr = [10, 20, 30, 40];
  let obj = {
    name: "Sagar",
    cname: "Second",
    desc: "Student",
  }

  let status = false;

  return (
    <div className="App">
      <h2>{name}</h2>
      {
        arr.map((v) => {
          return (
            <h2>{v}</h2>
          )
        })
      }
      <div><img src={logo} className="App-logo" alt="logo" /></div>

      <div>{obj.cname}</div>
      {10 + 50}

      {(status) ? <h1 style={{ color: 'blueviolet' }}>Welcome to home page</h1> : <h1 style={{ color: 'red' }}>Welcome to home page</h1>}

    </div>
  );
}

export default App;