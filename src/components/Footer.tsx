
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-10">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-bold text-primary">
              <span className="text-primary">&gt;</span> Kurniadi<span className="text-primary">_</span>
            </Link>
            <p className="mt-3 text-sm text-foreground/70">
              Software Engineer with 3+ years of experience in backend and full-stack development.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-foreground/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/timeline" className="text-foreground/70 hover:text-primary transition-colors">Timeline</Link></li>
              <li><Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-2">
              <li className="text-foreground/70">📍 Jakarta, Indonesia</li>
              <li>
                <a href="mailto:kurniadiahmadwijaya@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
                  ✉️ kurniadiahmadwijaya@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4 flex space-x-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-foreground/50 text-sm">
          &copy; {new Date().getFullYear()} Kurniadi Ahmad Wijaya. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
