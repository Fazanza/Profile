import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import Projects from './components/Project/Projects';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProjectPage from './components/Project/ProjectPage';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/projects" element={<Projects />}>
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Route>
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </>
);

export default App;
