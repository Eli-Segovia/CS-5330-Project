import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/css/index.css';
import './styles/sass/index.scss';
import Home from './components/Home';
import AddPapers from './components/AddPapers/AddPapers';
import Search from './components/SearchPapers/Search';
import SearchAuthor from './components/SearchAuthors/SearchAuthor';
import SearchPublication from './components/SearchPublication/SearchPublication';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faBookMedical, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faBookMedical, faSearch);

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

                <Route path='searchAuthor' element={<SearchAuthor />}></Route>
                <Route
                    path='searchPublication'
                    element={<SearchPublication />}
                ></Route>
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
