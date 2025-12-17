import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navItems = [
    { path: '/', label: 'முகப்பு' },
    { path: '/about', label: 'எங்களைப் பற்றி' },
    { path: '/services', label: 'சேவைகள்' },
    { path: '/gallery', label: 'படங்கள்' },
    { path: '/videos', label: 'இயங்குபடங்கள்' },
    { path: '/contact', label: 'தொடர்பு' }
  ];

  // Determine if we should use the transparent style (only on Home page and at top)
  const isHome = location.pathname === '/';
  const useTransparent = isHome && !isScrolled;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 border-b border-transparent ${useTransparent
        ? 'bg-transparent py-4'
        : 'glass py-2 border-white/20'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/50 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <img src="/Silambavelankadu/images/logo.png" alt="Silambai Logo" className="w-full h-full object-cover" />
            </div>
            <div className={`transition-opacity duration-300 ${useTransparent ? 'opacity-100 text-white drop-shadow-md' : 'opacity-100'}`}>
              <h1 className={`text-xl font-bold font-tamil ${useTransparent ? 'text-white' : 'text-gray-900'}`}>
                சிலம்பவேளாங்காடு
              </h1>
              <p className={`text-xs font-semibold tracking-wide ${useTransparent ? 'text-emerald-200' : 'text-primary-600'}`}>
                நம்ம சிலம்பை
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                    ? 'text-white bg-primary-600 shadow-lg shadow-primary-500/30'
                    : useTransparent
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-full transition-colors ${useTransparent ? 'text-white hover:bg-white/20' : 'text-gray-800 hover:bg-gray-100'
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-transform duration-500 ease-in-out lg:hidden flex flex-col pt-24 px-6 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col space-y-4">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between p-4 rounded-xl text-lg font-medium transition-all duration-300 animate-fade-in-up ${isActive
                  ? 'bg-primary-50 text-primary-700 shadow-sm'
                  : 'text-gray-700 hover:bg-gray-50'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span>{item.label}</span>
                {isActive && <ChevronRight className="w-5 h-5" />}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Footer Decoration */}
        <div className="mt-auto mb-8 text-center text-gray-400 text-sm">
          <p>© 2024 சிலம்பவேளாங்காடு</p>
        </div>
      </div>
    </header>
  );
};

export default Header;