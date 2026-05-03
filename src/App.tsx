
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

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
      {!isAboutPage && <Footer />}
    </div>
  );
}

export default App;