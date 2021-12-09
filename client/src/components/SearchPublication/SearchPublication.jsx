/*eslint-disable */

import React, { useState } from 'react';
import Navbar from '../utils/Navbar';
import axios from 'axios';
/*
* getConferencePaper
getJournalPaper
*/
function SearchPublication() {
    const [name, setname] = useState('');
    const [isConference, setIsConference] = useState(true);
    const [initYear, setInitYear] = useState(null);
    const [finalYear, setFinalYear] = useState(null);
    const [results, setResults] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isConference) {
            alert('Doing Conference');
            const res = await axios.get(
                'http://localhost:5000/getConferencePaper',
                {
                    params: {
                        name: name,
                        start: initYear,
                        end: finalYear
                    }
                }
            );
            setResults(res.data.paper);
        } else {
            const res = await axios.get(
                'http://localhost:5000/getJournalPaper',
                {
                    params: {
                        name: name,
                        start: initYear,
                        end: finalYear
                    }
                }
            );
            setResults(res.data.paper);
            console.log(res.data.paper);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='my-4 d-flex flex-column'>
                <div className='align-self-center'>
                    <label className='switch'>
                        <input
                            name='isconference'
                            checked={isConference}
                            type='checkbox'
                            onChange={() => setIsConference(!isConference)}
                        />
                        <span className='slider round'></span>
                    </label>
                    <label className='m-1' htmlFor='isconference'>
                        {isConference ? 'Conference' : 'Journal'}
                    </label>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className='my-3 d-flex flex-column align-items-center justify-content-center'
                >
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        value={name}
                        id='name'
                        onChange={(e) => setname(e.target.value)}
                    />
                    <label className='my-3'>
                        Start Year
                        <input
                            onChange={(e) => setInitYear(e.target.value)}
                            type='number'
                            name='initYear'
                            id='initYear'
                            value={initYear}
                        />
                    </label>
                    <label>
                        End Year
                        <input
                            onChange={(e) => setFinalYear(e.target.value)}
                            type='number'
                            name='finalYear'
                            id='finalYear'
                            value={finalYear}
                        />
                    </label>

                    <button className='my-4 btn btn-primary' type='submit'>
                        Submit
                    </button>
                </form>
            </div>
            <div className='results card d-flex align-items-center'>
                {results.length > 0
                    ? results.map((paper, idx) => (
                          <div className='card my-2 w-75 d-flex flex-column'>
                              <h4>Paper {idx + 1}</h4>
                              {paper.title}
                          </div>
                      ))
                    : 'No results...'}
            </div>
        </div>
    );
}

export default SearchPublication;
