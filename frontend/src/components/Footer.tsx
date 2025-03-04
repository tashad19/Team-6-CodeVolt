import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Github, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-700/50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Map className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold">Raptee Maps</span>
            </Link>
            <p className="text-gray-400 mb-4">
              User-driven exploration and updates for more accurate and reliable navigation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/#features" className="text-gray-400 hover:text-primary-400 transition-colors">Features</Link></li>
              <li><Link to="/#how-it-works" className="text-gray-400 hover:text-primary-400 transition-colors">How It Works</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-primary-400 transition-colors">Pricing</Link></li>
              <li><Link to="/roadmap" className="text-gray-400 hover:text-primary-400 transition-colors">Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-primary-400 transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/documentation" className="text-gray-400 hover:text-primary-400 transition-colors">Documentation</Link></li>
              <li><Link to="/help" className="text-gray-400 hover:text-primary-400 transition-colors">Help Center</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-primary-400 transition-colors">Community</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-700/50 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Raptee Maps. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 justify-center md:justify-end">
            <Link to="/terms" className="text-gray-500 hover:text-primary-400 text-sm">Terms of Service</Link>
            <Link to="/privacy" className="text-gray-500 hover:text-primary-400 text-sm">Privacy Policy</Link>
            <Link to="/cookies" className="text-gray-500 hover:text-primary-400 text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;