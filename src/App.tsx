import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Railway } from './pages/Railway';
import { Techletter } from './pages/Techletter';
import { Insights } from './pages/Insights';
import { About } from './pages/About';
import { Connect } from './pages/Connect';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/railway" element={<Railway />} />
            <Route path="/techletter" element={<Techletter />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/about" element={<About />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
