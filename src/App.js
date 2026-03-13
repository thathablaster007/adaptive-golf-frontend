import logo from './logo1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-bar">
          <div className="nav-left">
            <a href="#about">About</a>
            <a href="#adaptive-golf">What is Adaptive Golf?</a>
            <a href="#try-golf">Try Golf</a>
            <a href="#competition">Competition</a>
            <a href="#media">Media</a>
          </div>
          <div className="nav-center">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="foundation-text">Adaptive Golf Alliance Foundation</div>
          </div>
          <div className="nav-right">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="insta-logo">&#x1F4F7;</a>
            <a href="#blog">Blog</a>
            <a href="#get-involved" className="get-involved">Get Involved</a>
            <a href="#news">News</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
