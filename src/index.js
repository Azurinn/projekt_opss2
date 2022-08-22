import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Layout/Header/Header';
import { Main } from './Layout/Main/Main';
import { Footer } from './Layout/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Header />
		<Main />
		<Footer />
	</BrowserRouter>
);
