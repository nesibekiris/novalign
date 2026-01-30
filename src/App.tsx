import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Railway } from './pages/Railway';
import { Insights } from './pages/Insights';
import { About } from './pages/About';
import { Connect } from './pages/Connect';
import { Admin } from './pages/Admin';
import { AdminCMS } from './pages/AdminCMS';
import Downloads from './pages/Downloads';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/railway" element={<Railway />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/about" element={<About />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/cms" element={<AdminCMS />} />
            <Route path="/downloads" element={<Downloads />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
