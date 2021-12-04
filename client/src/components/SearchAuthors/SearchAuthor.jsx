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
        console.log('Inside gui handlesubmit');
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
        this.setState({ res: returnedData });
        console.log(this.state.res);
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
            </>
        );
    }
}

export default SearchAuthor;
