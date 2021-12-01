import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/css/index.css';
import './styles/sass/index.scss';
import Home from './components/Home';
import AddPapers from './components/AddPapers/AddPapers';
import Search from './components/SearchPapers/Search';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/'>
                <Route index element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='addPapers' element={<AddPapers />}>
                    {/*gonna do some stuff here*/}
                </Route>
                <Route path='searchPapers' element={<Search />}>
                    {/*gonna do some stuff here*/}
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
