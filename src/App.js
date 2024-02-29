import { Route, Routes } from 'react-router-dom';
import './App.css';
import BannerHeader from './web-components/BannerHeader';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BannerHeader />
      <Routes>
          <Route path="/" element={Home} />
      </Routes>
    </div>
  );
}

export default App;
