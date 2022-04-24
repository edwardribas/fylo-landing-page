import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/styles.css';

// Components
import Header from './components/header.js';
import Hero from './pages/hero.js';
import Main from './components/main.js';
import Footer from './components/footer.js';

// Root
const root = ReactDOM.createRoot(document.querySelector('#root'));


root.render(
<>
    <Header />
    <Hero />
    <Main />
    <Footer />
</>
)