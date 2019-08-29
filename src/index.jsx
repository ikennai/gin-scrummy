// Start of Gin Scrummy App
// Core imports
import React from 'react';
import { render } from 'react-dom';

// Layout Imports
import { Content } from "./Layout/Content/Content";
import Header from './Layout/Header/Header';
import { Footer } from "./Layout/Footer/Footer";

// Style imports
import './base.scss';

const app = document.querySelector('.js-app');

render(
    <div className="app-container">
       <Header />
       <Content />
       <Footer />
    </div>, app);
