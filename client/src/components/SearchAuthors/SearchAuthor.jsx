import React from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../utils/Navbar';

class SearchAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            res: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let property = 'value';
        this.setState({ [event.target.name]: event.target[property] });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const [fName, lName] = this.state.author.split(' ');
        let res = await axios.get('http://localhost:5000/authors');
        let data = res.data;

        let returnedData = data.filter(
            (author) =>
                author.firstName === fName ||
                author.firstName === lName ||
                author.lastName === lName ||
                author.lastName === fName
        );

        let ids = returnedData.map((author) => {
            return author._id;
        });

        let paperRes = (await axios.get('http://localhost:5000/papers')).data;
        console.log(paperRes.data);
        let joined = paperRes.filter((paper) => {
            for (const authorId of paper.authors) {
                if (ids.includes(authorId)) {
                    return true;
                }
            }
            return false;
        });

        /*
        *
        *getConfId
getJournId
        * 
        */
        let publicationInfo = [];
        for (let paper of joined) {
            if (paper.conference) {
                await axios
                    .get('http://localhost:5000/getConfId', {
                        params: { id: paper.conference }
                    })
                    .then((res) => {
                        console.log(res.data.conference);
                        publicationInfo.push(res.data.conference);
                    });
            } else {
                await axios
                    .get('http://localhost:5000/getJournId', {
                        params: { id: paper.journal }
                    })
                    .then((res) => {
                        publicationInfo.push(res.data.journal);
                    });
            }
        }

        let complete = joined.map((paper, idx) => {
            return {
                ...paper,
                pubInfo: publicationInfo[idx]
            };
        });
        console.log(complete);
        this.setState({ res: complete });
    }

    render() {
        return (
            <>
                <div>
                    <Navbar />
                    <label className='col'>
                        <form
                            onSubmit={this.handleSubmit}
                            className='card container py-4'
                        >
                            <input
                                type='text'
                                id='author'
                                name='author'
                                value={this.state.author}
                                placeholder='Author Name'
                                className='form-control'
                                onChange={this.handleChange}
                            />
                            <input
                                type='submit'
                                value='submit'
                                className='btn btn-primary mt-2 rounded-pill'
                                required
                            />
                        </form>
                    </label>
                </div>
                {this.state.res &&
                    this.state.res.map((paper) => {
                        return (
                            <div
                                className='text-align-center align-self-center card my-3 mx-3 p-3'
                                key={paper._id}
                            >
                                <h1>{paper.title}</h1>
                                <h5>URL : {paper.url || 'NA'}</h5>
                                <h5>Pages: {paper.page || 'Unspecified'}</h5>
                                <h5>
                                    Type :{' '}
                                    {paper.conference
                                        ? 'Conference'
                                        : 'Journal'}
                                </h5>
                                {paper.conference ? (
                                    <div className='card p-3'>
                                        <h5>Conference Info</h5>
                                        <h6>
                                            Location:{' '}
                                            {paper.pubInfo.location || 'NA'}
                                        </h6>
                                        <h6>
                                            Year : {paper.pubInfo.year || 'NA'}
                                        </h6>
                                        <h6>
                                            Conference Name:{' '}
                                            {paper.pubInfo.name || 'Unnamed'}
                                        </h6>
                                        <h6>
                                            Times Held:{' '}
                                            {paper.pubInfo.timeHeld || '1'}
                                        </h6>
                                    </div>
                                ) : (
                                    <div className='card p-3'>
                                        <h5>Journal Info</h5>
                                        <h6>
                                            Journal Date :{' '}
                                            {Date(
                                                paper.pubInfo.date
                                            ).toString() || 'NA'}
                                        </h6>
                                        <h6>
                                            Journal Name :{' '}
                                            {paper.pubInfo.name || 'NA'}
                                        </h6>
                                        <h6>
                                            Volume:{' '}
                                            {paper.pubInfo.volume || 'NA'}
                                        </h6>
                                    </div>
                                )}
                            </div>
                        );
                    })}
            </>
        );
    }
}

export default SearchAuthor;
