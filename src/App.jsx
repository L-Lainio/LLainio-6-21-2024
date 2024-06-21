import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Header from './Header'; // Add this line
import './App.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <main className={`${darkMode? 'dark' : 'light'}`}>
      <Header />
      <Navigation />
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
