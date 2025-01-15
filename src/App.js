import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
