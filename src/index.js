import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.module.scss';

// Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer/index';

// Root
const root = ReactDOM.createRoot(document.querySelector('#root'));


root.render(
<>
    <Header />
    <Main />
    <Footer />
</>
)