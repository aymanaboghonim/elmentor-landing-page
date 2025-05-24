import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      {/* Main content sections will go here */}
      <main style={{ marginTop: 80 }}>
        {/* Placeholder for Hero, About, etc. */}
        <section id="hero" style={{ height: '100vh', background: '#F5F7FA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1>Welcome to Elmentor Landing Page</h1>
        </section>
      </main>
    </>
  );
}

export default App;
