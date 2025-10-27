import React from 'react';

const SupervisorJury = () => {
  const supervisor = {
    name: 'Dr. Mehmet Evren Coşkun',
    title: 'Supervisor',
    icon: (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    ),
    gradient: 'from-amber-500 to-orange-600'
  };

  const juryMembers = [
    {
      name: 'Prof. Dr. Tolga Kurtuluş Çapın',
      title: 'Jury Member',
      icon: (
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Prof. Dr. Gökçe Nur Yılmaz',
      title: 'Jury Member',
      icon: (
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-700">
              Our Supervisor and Jury Members
            </h2>
          </div>

          {/* Supervisor Card - Centered and Larger */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-md group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 overflow-hidden border-2 border-amber-200">
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${supervisor.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Card Content */}
              <div className="relative p-10 text-center">
                {/* Title Badge */}
                <div className={`inline-block px-4 py-2 mb-6 rounded-full bg-gradient-to-r ${supervisor.gradient} text-white text-sm font-bold shadow-md`}>
                  {supervisor.title}
                </div>
                
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center w-28 h-28 mb-6 rounded-full bg-gradient-to-br ${supervisor.gradient} text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                  {supervisor.icon}
                </div>
                
                {/* Name */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {supervisor.name}
                </h3>
                
                {/* Decorative Line */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className={`w-16 h-1.5 mx-auto rounded-full bg-gradient-to-r ${supervisor.gradient}`}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Jury Members Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {juryMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 overflow-hidden border border-gray-200"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Card Content */}
                <div className="relative p-8 text-center">
                  {/* Title Badge */}
                  <div className={`inline-block px-3 py-1 mb-4 rounded-full bg-gradient-to-r ${member.gradient} text-white text-xs font-bold shadow-md`}>
                    {member.title}
                  </div>
                  
                  {/* Icon Container */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-gradient-to-br ${member.gradient} text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    {member.icon}
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
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

export default SupervisorJury;

