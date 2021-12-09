/* eslint-disable */
import React from 'react';
import Navbar from '../utils/Navbar';
import axios from 'axios';

class AddPapers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            authors: [''],
            affiliations: [''],
            startDate: [''],
            endDate: [''],
            url: '',
            page: '',
            isconference: true,
            Conferencename: '',
            ConferencetimeHeld: '',
            ConferenceYear: '',
            ConferenceLocation: '',
            Journalname: '',
            Journaldate: '',
            Journalvolume: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderExtraOptions = this.renderExtraOptions.bind(this);
        this.addResources = this.addResources.bind(this);
    }

    async addResources() {
        let authors = [];
        for (let idx = 0; idx < this.state.authors.length; idx++) {
            let author = this.state.authors[idx];
            const [firstName, lastName] = author.split(' ');
            let affiliation = null;
            if (
                this.state.affiliations[idx].replace(' ', '') &&
                this.state.startDate[idx]
            ) {
                let aff_data = {
                    name: this.state.affiliations[idx],
                    start: this.state.startDate[idx] || Date()
                };

                if (this.state.endDate[idx]) {
                    aff_data = { ...aff_data, end: this.state.endDate[idx] };
                }

                affiliation = { ...aff_data };
            }
            let data = { firstName, lastName };
            if (affiliation) data = { ...data, affiliation };

            if (firstName && lastName) {
                let res = await axios.post(
                    'http://localhost:5000/createAuthor',
                    data
                );
                authors.push(res.data.newAuthor._id);
            }
        }
        if (this.state.isconference) {
            console.log(authors);
            await axios.post('http://localhost:5000/createPaperConference', {
                name: this.state.Conferencename,
                timeHeld: this.state.ConferencetimeHeld,
                year: this.state.ConferenceYear,
                location: this.state.ConferenceLocation,
                title: this.state.title,
                url: this.state.url || null,
                page: this.state.page || null,
                authors: [...authors]
            });
        } else {
            await axios.post('http://localhost:5000/createPaperJournal', {
                name: this.state.Journalname,
                date: this.state.Journaldate,
                volume: this.state.Journalvolume,
                title: this.state.title,
                url: this.state.url || null,
                page: this.state.page || null,
                authors: [...authors]
            });
        }
    }

    renderExtraOptions() {
        if (this.state.isconference) {
            return (
                <>
                    <label className='my-3'>
                        <input
                            type='text'
                            id='Conferencename'
                            name='Conferencename'
                            value={this.state.Conferencename}
                            placeholder='Conference Name'
                            className='form-control'
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className='my-3'>
                        <input
                            type='number'
                            id='ConferencetimeHeld'
                            name='ConferencetimeHeld'
                            value={this.state.ConferencetimeHeld}
                            placeholder='Conference Time Held'
                            className='form-control'
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className='my-3'>
                        <input
                            type='number'
                            id='ConferenceYear'
                            name='ConferenceYear'
                            value={this.state.ConferenceYear}
                            placeholder='Conference Year'
                            className='form-control'
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className='my-3'>
                        <input
                            type='text'
                            id='ConferenceLocation'
                            name='ConferenceLocation'
                            value={this.state.ConferenceLocation}
                            placeholder='Conference Location'
                            className='form-control'
                            onChange={this.handleChange}
                        />
                    </label>
                </>
            );
        } else
            return (
                <>
                    <label className='my-3'>
                        <input
                            type='text'
                            id='Journalname'
                            name='Journalname'
                            value={this.state.Journalname}
                            placeholder='Journal Name'
                            className='form-control'
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className='my-2'>
                        <span className='align-self-center'>Journal Date</span>
                        <input
                            type='date'
                            id='Journaldate'
                            name='Journaldate'
                            value={this.state.Journaldate}
                            placeholder='Journal Date'
                            className='form-control'
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className='my-3'>
                        <input
                            type='text'
                            id='Journalvolume'
                            name='Journalvolume'
                            value={this.state.Journalvolume}
                            placeholder='Journal Volume'
                            className='form-control'
                            onChange={this.handleChange}
                        />
                    </label>
                </>
            );
    }

    handleChange(event) {
        let property = 'value';
        if (event.target.name === 'isconference') {
            property = 'checked';
            this.setState({});
        }
        this.setState({ [event.target.name]: event.target[property] });
    }

    async handleSubmit(event) {
        event.preventDefault();
        await this.addResources();
        alert('Submitted');
        this.setState({
            title: '',
            authors: [''],
            affiliations: [''],
            startDate: [''],
            endDate: [''],
            url: '',
            page: '',
            isconference: true,
            Conferencename: '',
            ConferencetimeHeld: '',
            ConferenceYear: '',
            ConferenceLocation: '',
            Journalname: '',
            Journaldate: '',
            Journalvolume: ''
        });
    }

    render() {
        return (
            <>
                <Navbar />
                <div className='container my-4 py-3'>
                    <form
                        onSubmit={this.handleSubmit}
                        className='card container py-4 d-flex flex-column'
                    >
                        <h1 className='card-title text-center '>Add Paper</h1>
                        <div className='align-self-center'>
                            <label className='switch'>
                                <input
                                    name='isconference'
                                    checked={this.state.isconference}
                                    type='checkbox'
                                    onChange={(e) => {
                                        [
                                            'Conferencename',
                                            'ConferencetimeHeld',
                                            'ConferenceYear',
                                            'ConferenceLocation',
                                            'Journalname',
                                            'Journaldate',
                                            'Journalvolume'
                                        ].forEach((st) => {
                                            this.setState({ [st]: '' });
                                        });

                                        this.handleChange(e);
                                    }}
                                />
                                <span className='slider round'></span>
                            </label>
                            <label className='m-1' htmlFor='isconference'>
                                {this.state.isconference
                                    ? 'Conference'
                                    : 'Journal'}
                            </label>
                        </div>
                        <div className='d-flex flex-column my-3'>
                            <label className='my-2'>
                                <input
                                    type='text'
                                    id='title'
                                    name='title'
                                    value={this.state.title}
                                    placeholder='Title'
                                    className='form-control'
                                    onChange={this.handleChange}
                                />
                            </label>
                            {this.state.authors.map((author, idx) => (
                                <div key={idx}>
                                    <h5 className='align-self-center'>
                                        Author {idx + 1}
                                    </h5>
                                    <div className='my-2 d-flex flex-md-row flex-sm-column flex-xs-column align-items-center justify-content-between'>
                                        <label className=''>
                                            <input
                                                type='text'
                                                id={`authors${idx}`}
                                                value={this.state.authors[idx]}
                                                placeholder='Name'
                                                className='form-control'
                                                onChange={(e) => {
                                                    let authors =
                                                        this.state.authors;
                                                    authors[idx] =
                                                        e.target.value;
                                                    this.setState({ authors });
                                                }}
                                            />
                                        </label>
                                        <label>
                                            <input
                                                type='text'
                                                id='affiliations'
                                                name='affiliations'
                                                value={
                                                    this.state.affiliations[idx]
                                                }
                                                placeholder='Affiliations'
                                                className='form-control my-2'
                                                onChange={(e) => {
                                                    let affiliations =
                                                        this.state.affiliations;
                                                    affiliations[idx] =
                                                        e.target.value;
                                                    this.setState({
                                                        affiliations:
                                                            affiliations
                                                    });
                                                }}
                                            />
                                        </label>
                                        <label className='d-flex align-items-center'>
                                            <span className='mx-2'>Start</span>
                                            <input
                                                type='date'
                                                id='startDate'
                                                name='startDate'
                                                value={
                                                    this.state.startDate[idx]
                                                }
                                                onChange={(e) => {
                                                    let startDates =
                                                        this.state.startDate;
                                                    startDates[idx] =
                                                        e.target.value;
                                                    this.setState({
                                                        startDate: startDates
                                                    });
                                                }}
                                                className='form-control'
                                            />
                                        </label>
                                        <label className='d-flex align-items-center'>
                                            <span className='mx-2'>End</span>
                                            <input
                                                type='date'
                                                id='endDate'
                                                name='endDate'
                                                value={this.state.endDate[idx]}
                                                onChange={(e) => {
                                                    let endDates =
                                                        this.state.endDate;
                                                    endDates[idx] =
                                                        e.target.value;
                                                    this.setState({
                                                        endDate: endDates
                                                    });
                                                }}
                                                className='form-control'
                                            />
                                        </label>
                                        {idx ===
                                            this.state.authors.length - 1 && (
                                            <button
                                                className='btn btn-success'
                                                type='button'
                                                onClick={(e) => {
                                                    [
                                                        'authors',
                                                        'affiliations',
                                                        'startDate',
                                                        'endDate'
                                                    ].forEach((st) => {
                                                        let thisState =
                                                            this.state[st];
                                                        thisState.push('');
                                                        this.setState({
                                                            [st]: thisState
                                                        });
                                                    });
                                                }}
                                            >
                                                +
                                            </button>
                                        )}
                                        {this.state.authors.length > 1 &&
                                            idx ===
                                                this.state.authors.length -
                                                    1 && (
                                                <button
                                                    className='btn btn-danger'
                                                    type='button'
                                                    onClick={(e) => {
                                                        [
                                                            'authors',
                                                            'affiliations',
                                                            'startDate',
                                                            'endDate'
                                                        ].forEach((st) => {
                                                            let thisState =
                                                                this.state[st];
                                                            thisState.pop();
                                                            this.setState({
                                                                [st]: thisState
                                                            });
                                                        });
                                                    }}
                                                >
                                                    -
                                                </button>
                                            )}
                                    </div>
                                </div>
                            ))}
                            <label className='my-2'>
                                <input
                                    type='url'
                                    id='url'
                                    name='url'
                                    value={this.state.url}
                                    placeholder='URL'
                                    className='form-control'
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label className='my-2'>
                                <input
                                    type='text'
                                    id='page'
                                    name='page'
                                    value={this.state.page}
                                    placeholder='Page count'
                                    className='form-control'
                                    onChange={this.handleChange}
                                />
                            </label>
                            {this.renderExtraOptions()}
                        </div>
                        <input
                            type='submit'
                            value='submit'
                            className={`btn btn-${
                                this.state.isconference
                                    ? 'primary'
                                    : 'secondary'
                            } mt-2 rounded-pill`}
                            required
                        />
                    </form>
                </div>
            </>
        );
    }
}

export default AddPapers;
