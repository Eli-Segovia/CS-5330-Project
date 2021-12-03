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
            params: {
                title: this.state.nameofpaper
            }

        })
        .then((res) => {
            //console.log(res.data.paper[0]);
            this.setState({ papers: res.data.paper });
            alert('set State');
            console.log(this.state.papers[0]);
            console.log(this.state.papers[0].title);
        })
        event.preventDefault();
        alert('did it');
    }

    

    options(){
        
        if(!this.state.papers.conference)
        {
            return (
            <li className="form-inline row list-group-item" >
            <div className="card ">
                <div className="card-header">
                    <h2 className-="card-title">
                    <div className="authors"> {this.state.papers[0].title} </div>
                    </h2>
                    <div className="card-body">
                    {this.state.papers[0].authors.firstName}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].authors.lastName}
                    </div>
                    <div className="card-body">
                    { this.state.papers[0].authors.affiliation && this.state.papers[0].authors.affiliation.name}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].authors.affiliation && this.state.papers[0].authors.affiliation.start}
                    <div className="card-body">
                    {this.state.papers[0].authors.affiliation && this.state.papers[0].authors.affiliation.end}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].journal && this.state.papers[0].journal.name}
                    </div>
                    <div className="card-body">
                    { this.state.papers[0].journal && this.state.papers[0].journal.date}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].journal && this.state.papers[0].journal.volume}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].url}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].page}
                    </div>
                    </div>
                </div>
            </div>    
        </li>
            )
        }
        else
        {
            return (
            <li className="form-inline row list-group-item" >
            <div className="card ">
                <div className="card-header">
                    <h2 className-="card-title">
                    <div className="authors"> {this.state.papers[0].title} </div>
                    </h2>
                    <div className="card-body">
                    {this.state.papers[0].authors.firstname}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].authors.lastName}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].authors.affiliation && this.state.papers[0].authors.affiliation.name}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].authors.affiliation && this.state.papers[0].authors.affiliation.start}
                    <div className="card-body">
                    {this.state.papers[0].authors.affiliation && this.state.papers[0].authors.affiliation.end}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].conference.Name}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].conference.timeHeld}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].conference.Year}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].conference.Location}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].url}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].authors.page}
                    </div>
                    </div>
                </div>
            </div>    
        </li>
        )
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

export default Search;