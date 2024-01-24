import React from 'react';
import Hero from './components/Hero';
import Demo from './components/Demo';
import './App.css';
import { Translate } from './components/Translate';
const App = () => {
    return (
        <main>
            <div className="main">
                <div className="gradient" />
            </div>

            <div className="app">
                <Hero />
                <Demo />
                <Translate />
            </div>
        </main>
    );
};

export default App;
