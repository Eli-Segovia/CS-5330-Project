/* eslint-disable */
import React from 'react';
import Navbar from '../utils/Navbar';

var conferencepages;
var journalpages;
class AddPapers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            authors: '',
            conference: '',
            journal: '',
            category: '',
            url: '',
            page: '',
            isconference: true,
            Conferencename: '',
            ConferencetimeHeld: '',
            ConferenceYear: '',
            ConferenceLocation: '',
            Journalname: '',
            Journaldate: '',
            Journalvolume: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderExtraOptions = this.renderExtraOptions.bind(this);
    }

    renderExtraOptions() {
        if (this.state.isconference) {
            return (
                <div>
                    <label className='col'>
                        <input
                            type='text'
                            id='Conferencename'
                            name='Conferencename'
                            value={this.state.Conferencename}
                            placeholder='Conferencename'
                            className='form-control'
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className='col'>
                        <input
                            type='text'
                            id='ConferencetimeHeld'
                            name='ConferencetimeHeld'
                            value={this.state.ConferencetimeHeld}
                            placeholder='ConferencetimeHeld'
                            className='form-control'
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className='col'>
                        <input
                            type='text'
                            id='ConferenceYear'
                            name='ConferenceYear'
                            value={this.state.ConferenceYear}
                            placeholder='ConferenceYear'
                            className='form-control'
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className='col'>
                        <input
                            type='text'
                            id='ConferenceLocation'
                            name='ConferenceLocation'
                            value={this.state.ConferenceLocation}
                            placeholder='ConferenceLocation'
                            className='form-control'
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
            );
        } else
            return (
                <div>
                    <label className='col'>
                        <input
                            type='text'
                            id='Journalname'
                            name='Journalname'
                            value={this.state.Journalname}
                            placeholder='Journalname'
                            className='form-control'
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className='col'>
                        <input
                            type='text'
                            id='Journaldate'
                            name='Journaldate'
                            value={this.state.Journaldate}
                            placeholder='Journaldate'
                            className='form-control'
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className='col'>
                        <input
                            type='text'
                            id='Journalvolume'
                            name='Journalvolume'
                            value={this.state.Journalvolume}
                            placeholder='Journalvolume'
                            className='form-control'
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
            );
    }

    handleChange(event) {
        let property = 'value';
        if (event.target.name === 'isconference') property = 'checked';
        this.setState({ [event.target.name]: event.target[property] });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('did it');
    }

    render() {
        return (
            <>
                <Navbar />
                <div className='container my-4 py-3'>
                    <form
                        onSubmit={this.handleSubmit}
                        className='card container py-4'
                    >
                        <h1 className='card-title text-center '>Add Paper</h1>
                        <div className='align-self-center'>
                            <label className='switch'>
                                <input
                                    name='isconference'
                                    checked={this.state.isconference}
                                    type='checkbox'
                                    onChange={this.handleChange}
                                />
                                <span className='slider round'></span>
                            </label>
                            <label className='m-1' htmlFor='isconference'>
                                {this.state.isconference
                                    ? 'Conference'
                                    : 'Journal'}
                            </label>
                        </div>
                        <div className='row'>
                            <label className='col'>
                                <input
                                    type='text'
                                    id='title'
                                    name='Title'
                                    value={this.state.title}
                                    placeholder='title'
                                    className='form-control'
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label className='col'>
                                <input
                                    type='text'
                                    id='authors'
                                    name='Authors'
                                    value={this.state.authors}
                                    placeholder='authors'
                                    className='form-control'
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label className='col'>
                                <input
                                    type='text'
                                    id='conference'
                                    name='Conference'
                                    value={this.state.conference}
                                    placeholder='conference'
                                    className='form-control'
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label className='col'>
                                <input
                                    type='text'
                                    id='journal'
                                    name='Journal'
                                    value={this.state.journal}
                                    placeholder='journal'
                                    className='form-control'
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label className='col'>
                                <input
                                    type='text'
                                    id='category'
                                    name='category'
                                    value={this.state.category}
                                    placeholder='category'
                                    className='form-control'
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label className='col'>
                                <input
                                    type='text'
                                    id='url'
                                    name='url'
                                    value={this.state.url}
                                    placeholder='url'
                                    className='form-control'
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label className='col'>
                                <input
                                    type='text'
                                    id='page'
                                    name='page'
                                    value={this.state.page}
                                    placeholder='page'
                                    className='form-control'
                                    onChange={this.handleChange}
                                />
                            </label>
                            {this.renderExtraOptions()}
                        </div>
                        <input
                            type='submit'
                            value='submit'
                            className='btn btn-primary mt-2 rounded-pill'
                            required
                        />
                    </form>
                </div>
            </>
        );
    }
}

export default AddPapers;
