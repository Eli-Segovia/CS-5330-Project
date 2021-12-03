import React from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../utils/Navbar';

class Search extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            nameofpaper: '',
            papers: []
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
        console.log("Inside gui handlesubmit");
        axios.get('http://localhost:5000/getPaper', {
            title: this.state.nameofpaper

        })
        event.preventDefault();
        alert('did it');
    }


    options(){
        
        if(!this.state.papers.conference)
        {
            <li className="form-inline row list-group-item" >
            <div className="card ">
                <div className="card-header">
                    <h2 className-="card-title">
                    <div className="authors"> {this.state.papers.title} </div>
                    </h2>
                    <div className="card-body">
                    {this.state.papers.authors.firstName}
                    </div>
                    <div className="card-body">
                    {this.state.papers.authors.lastName}
                    </div>
                    <div className="card-body">
                    {this.state.papers.authors.affiliation.type.name}
                    </div>
                    <div className="card-body">
                    {this.state.papers.authors.affiliation.type.start}
                    <div className="card-body">
                    {this.state.papers.authors.affiliation.type.end}
                    </div>
                    <div className="card-body">
                    {this.state.papers.journal.name}
                    </div>
                    <div className="card-body">
                    {this.state.papers.journal.date}
                    </div>
                    <div className="card-body">
                    {this.state.papers.journal.volume}
                    </div>
                    <div className="card-body">
                    {this.state.papers.url}
                    </div>
                    <div className="card-body">
                    {this.state.papers.page}
                    </div>
                    </div>
                </div>
            </div>    
        </li>
        }
        else
        {
            <li className="form-inline row list-group-item" >
            <div className="card ">
                <div className="card-header">
                    <h2 className-="card-title">
                    <div className="authors"> {this.state.papers.title} </div>
                    </h2>
                    <div className="card-body">
                    {this.state.papers.authors.firstname}
                    </div>
                    <div className="card-body">
                    {this.state.papers.authors.lastName}
                    </div>
                    <div className="card-body">
                    {this.state.papers.authors.affiliation.type.name}
                    </div>
                    <div className="card-body">
                    {this.state.papers.authors.affiliation.type.start}
                    <div className="card-body">
                    {this.state.papers.authors.affiliation.type.end}
                    </div>
                    <div className="card-body">
                    {this.state.papers.conference.Name}
                    </div>
                    <div className="card-body">
                    {this.state.papers.conference.timeHeld}
                    </div>
                    <div className="card-body">
                    {this.state.papers.conference.Year}
                    </div>
                    <div className="card-body">
                    {this.state.papers.conference.Location}
                    </div>
                    <div className="card-body">
                    {this.state.papers.url}
                    </div>
                    <div className="card-body">
                    {this.state.papers.authors.page}
                    </div>
                    </div>
                </div>
            </div>    
        </li>
        }
    }

    render() {
        return<>
            <div>
                <Navbar />
                <label className='col'>
                    <form
                    onSubmit={this.handleSubmit}
                    className='card container py-4'
                    >
                    
                                <input
                                    type='text'
                                    id='Name of paper'
                                    name='nameofpaper'
                                    value={this.state.nameofpaper}
                                    placeholder='nameofpaper'
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
            {
                this.state.papers.length > 0 && 
                this.options()
            }
            </div>
        </>
    }
}

export default SearchPapers;