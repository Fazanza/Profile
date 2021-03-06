import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import Projects from './components/Projects';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </>
);

export default App;
