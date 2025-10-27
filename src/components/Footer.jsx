import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">
                ParlerVue
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Accessible and Human-Centric Communication Solution
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#introduction" className="text-gray-300 hover:text-indigo-400 transition-colors text-sm">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-300 hover:text-indigo-400 transition-colors text-sm">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#reports" className="text-gray-300 hover:text-indigo-400 transition-colors text-sm">
                    Reports
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Project Info</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Graduation Project 2025<br />
                Assistive Communication Technology<br />
                Version 1.0
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2025 ParlerVue. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-indigo-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-400 text-sm">
                  Built with accessibility and compassion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

