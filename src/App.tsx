import React from 'react';
import Header from './components/Header';
import Section01 from './components/Section01';
import Section02 from './components/Section02';
import Footer from './components/Footer';
import Section03 from './components/Section03';

const App: React.FC = () => {
  return (
    <div className="w-full">
      <Header />
      <main className="pt-16">  {/* Ensure header does not overlap */}
        <Section01 />
        <Section02 />
        <Section03/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
