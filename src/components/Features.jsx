import React from 'react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Eye Tracking Technology',
      description: 'Advanced eye-tracking allows users to control the system with precision using only their gaze. Navigate, select, and communicate effortlessly without physical input devices.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          <circle cx="12" cy="9" r="2" fill="currentColor" />
        </svg>
      ),
      title: 'Artificial Intelligence Integration',
      description: 'Powered by Large Language Models (LLM), our AI predicts and completes sentences, making communication faster and more natural. Smart suggestions adapt to your communication style.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={2} />
        </svg>
      ),
      title: 'Text-to-Speech (TTS)',
      description: 'High-quality, natural-sounding voice synthesis gives users their own voice. Express thoughts, emotions, and ideas clearly with customizable speech options.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-4">
            Powerful Features of ParlerVue
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Our comprehensive solution combines three core technologies to deliver 
            an exceptional communication experience
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="text-indigo-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-r from-indigo-50 to-cyan-50 p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                Seamlessly Integrated System
              </h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                All three technologies work together in perfect harmony, creating a 
                user-friendly interface that's both powerful and accessible. ParlerVue 
                adapts to each user's unique needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

