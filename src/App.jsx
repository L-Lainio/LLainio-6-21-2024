// import { useState } from 'react';
// import Navigation from './components/Navigation';
// import Footer from './components/Footer';
// import Projects from './components/Projects';
// import Header from './components/Header';
import './App.css';

function App() {
    return (
        <div>
            {/* <Header /> */}
            {/* <Navigation /> */}
            {/* <Projects /> */}
            {/* <Footer /> */}
            <Profile />
        </div>
    );
}

export function Profile() {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <h1>Photo</h1>
                    <img
                        className="avatar"
                        src="https://www.linkedin.com/in/lora-lainio-1a3a55255/"
                        alt="Lora Lainio"
                        width={70}
                        height={70}
                    />
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <h1>About</h1>
                    <p>I am.... here.</p>
                </div>
            </div>
        </div>
    );
}


export default App;
