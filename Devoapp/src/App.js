import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo glowing-logo" alt="logo" />
        <h1 className="title">🚀 DevSecOps Project Dashboard</h1>
        <p className="subtitle">
          Secure. Automate. Deploy. Monitor. Repeat.
        </p>
        <a
          className="App-link btn-glow"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore React 🚀
        </a>
      </header>
    </div>
  );
}

export default App;
