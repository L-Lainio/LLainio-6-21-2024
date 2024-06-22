import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Profile from './components/Profile';
import Header from './components/Header';
import './App.css';


function App() {
    return (
        <div>
            <Header /> <h2>{Header}</h2>
            <Navigation />
            <Projects />
            <Footer />
            <Profile />
        </div>
    );
}


export default App;
