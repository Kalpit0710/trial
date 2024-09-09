import logo from './angular-icon.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Forks..
        </p>
        <a
          className="App-link"
          href="https://angularjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn angular
        </a>
      </header>
    </div>
  );
}

export default App;
