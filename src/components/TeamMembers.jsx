import React from 'react';

const TeamMembers = () => {
  const teamMembers = [
    {
      name: 'Nuran Er',
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      ),
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Berna Danışman',
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      ),
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      name: 'Yavuz Selim Sever',
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      ),
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Umut Çay',
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      ),
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-700">
              Team Members
            </h2>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Card Content */}
                <div className="relative p-8 text-center">
                  {/* Icon Container */}
                  <div className={`inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-gradient-to-br ${member.gradient} text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    {member.icon}
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    {member.name}
                  </h3>
                  
                  {/* Decorative Line */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className={`w-12 h-1 mx-auto rounded-full bg-gradient-to-r ${member.gradient}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;

