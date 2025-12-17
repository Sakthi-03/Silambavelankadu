// import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Village Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div> */}
              <div className="w-15 h-15 rounded-full flex items-center justify-center overflow-hidden">
                <img src="/Silambavelankadu/images/logo.png" alt="Silambavelangadu Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">சிலம்பவேளாங்காடு</h3>
                <p className="text-gray-400 font-bold text-sm">நம்ம சிலம்பை</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              பாரம்பரியமும் நவீனத்துவமும் இணைந்த சிலம்பவேளாங்காடு கிராமம் ஒரு சிறந்த வாழ்விடமாக விளங்குகிறது.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">விரைவு இணைப்புகள்</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors">முகப்பு</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">எங்களைப் பற்றி</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">சேவைகள்</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-emerald-400 transition-colors">படங்கள்</Link>
              </li>
              <li>
                <Link to="/videos" className="text-gray-300 hover:text-emerald-400 transition-colors">இயங்குபடங்கள்</Link>
              </li>
              <li>
                {/* <Link to="/news" className="text-gray-300 hover:text-emerald-400 transition-colors">செய்திகள்</Link> */}
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">தொடர்பு</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">எங்கள் சேவைகள்</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">கல்வி வசதிகள்</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">சுகாதார சேவைகள்</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">போக்குவரத்து</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">மின்சார வசதி</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">குடிநீர் வசதி</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">டிஜிட்டல் சேவைகள்</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">தொடர்பு விவரங்கள்</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>சிலம்பவேளாங்காடு,</p>
                  <p>மூத்தாக்குறிச்சி அஞ்சல்,</p>
                  <p>பட்டுக்கோட்டை வட்டம்,</p>
                  <p>தஞ்சாவூர் மாவட்டம்,</p>
                  <p>தமிழ்நாடு - 614 906</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>+91 98765 43210</p>
                  <p>+91 98765 43211</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>info@ourvillage.com</p>
                  <p>support@ourvillage.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 எங்கள் கிராமம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                தனியுரிமை கொள்கை
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                விதிமுறைகள்
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                குக்கீ கொள்கை
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;