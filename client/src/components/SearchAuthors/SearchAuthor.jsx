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

        this.options = this.options.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let property = 'value';
        this.setState({ [event.target.name]: event.target[property] });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Inside gui handlesubmit');
        axios.get('http://localhost:5000/getPaper', {
            title: this.state.nameofpaper
        });
        event.preventDefault();
        alert('did it');
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
                    {this.state.papers.length > 0 && this.options()}
                </div>
            </>
        );
    }
}

export default SearchAuthor;
