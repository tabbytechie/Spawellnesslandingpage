import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Booking } from './pages/Booking';
import { ServicesPage } from './pages/ServicesPage';
import { ThemeProvider } from './context/ThemeContext';
import { LoadingOverlay } from './components/Loading';

// Component to handle route changes and loading state
function RouteChangeHandler({ setLoading }: { setLoading: (loading: boolean) => void }) {
  const location = useLocation();

  useEffect(() => {
    // Show loading when route changes
    setLoading(true);
    
    // Simulate loading time (1.5 seconds as requested)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location, setLoading]);

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <RouteChangeHandler setLoading={setIsLoading} />
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Navigation />
          <main className="relative">
            {isLoading && <LoadingOverlay />}
            <div className={isLoading ? 'opacity-20 transition-all' : 'opacity-100 transition-all'}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/services" element={<ServicesPage />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}