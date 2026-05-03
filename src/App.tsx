
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;