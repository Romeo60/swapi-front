import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Header from '../header/header';
import About from '../../pages/about/about.page';
import Home from '../../pages/home/home.page';
import Searcher from '../../pages/search/search';


import client from '../../common/apollo-client';

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/:urlPage' element={<Home/>} />
                    <Route path='/about/:star' element={<About/>} />
                    <Route path='/search' element={<Searcher/>} />
                </Routes>
            </Router>
        </ApolloProvider>
    );
}

export default App;