import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import BannerHeader from './web-components/BannerHeader.js';
import Track from './pages/Track.js';
import About from './pages/About.js';
import Header from './web-components/Header.js';
import Footer from './web-components/Footer.js';

function App() {
  const pathName = useLocation().pathname;

  return (
    <div className="App">
      { pathName === "/" ? <BannerHeader /> : <Header />}
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/track" element={<Track />} />
          <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
