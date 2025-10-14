import React from 'react';

const Introduction = () => {
  return (
    <section id="introduction" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-16">
            Vision & Mission
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                About ParlerVue
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ParlerVue is an innovative assistive technology solution designed to empower 
                individuals with paralysis and speech impairments. By combining cutting-edge 
                eye-tracking technology with advanced artificial intelligence, we create a 
                seamless communication experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our system integrates Large Language Models (LLM) for intelligent text prediction 
                and completion, precise eye-tracking for device control, and natural Text-to-Speech 
                (TTS) technology to give voice to those who cannot speak.
              </p>
              <p className="text-gray-600 leading-relaxed">
                ParlerVue represents more than just technology—it's a bridge to independence, 
                social connection, and improved quality of life for users and their families.
              </p>
            </div>

            {/* Right Column - Mission Statement */}
            <div className="bg-gradient-to-br from-indigo-600 to-cyan-500 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-white">
                <svg
                  className="w-12 h-12 mb-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
                <p className="text-lg leading-relaxed">
                  "Enhancing independence, social interaction, and quality of life through 
                  accessible and human-centric communication solutions."
                </p>
                <div className="mt-6 pt-6 border-t border-white/30">
                  <p className="text-sm">
                    We believe everyone deserves the ability to express themselves, 
                    connect with others, and live with dignity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

