import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';
import ScrollToTop from './pages/ScrollToTop';
import VideoGallery from './pages/VideoGallery';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/videos" element={<VideoGallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;