import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Gallery from './pages/Gallery';
import ComponentDetail from './pages/ComponentDetail';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/component/:id" element={<ComponentDetail />} />
      </Routes>
    </div>
  );
}

export default App;

