import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://docs.google.com/spreadsheets/d/17YI2cNNtx5ZCvnm0ec-DK72i8KiKIekuh2Jl9pgJC20/edit#gid=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bitcoin Price Historical Data
        </a>
      </header>
    </div>
  );
}

export default App;
