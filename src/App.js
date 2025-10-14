import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Features from './components/Features';
import TeamMembers from './components/TeamMembers';
import SupervisorJury from './components/SupervisorJury';
import Documents from './components/Documents';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Introduction />
      <Features />
      <TeamMembers />
      <SupervisorJury />
      <Documents />
      <Footer />
    </div>
  );
}

export default App;

