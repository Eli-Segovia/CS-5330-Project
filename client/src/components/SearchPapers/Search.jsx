import React from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../utils/Navbar';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameofpaper: '',
            papers: [],
            a:[],
            j:[],
            c:[]
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
            this.setState({ a: res.data.a });
            this.setState({ j: res.data.j });
            this.setState({ c: res.data.c });
            alert('set State');
            //console.log(this.state.papers[0]);
            //console.log(this.state.a);
            console.log(this.state.j);
            console.log(this.state.c);
            //console.log(this.state.c[0].name);
        })
        event.preventDefault();
        alert('did it');
    }

    

    options(){

        if(!this.state.c)
        {
            return (
            <li className="form-inline row list-group-item" >
            <div className="card ">
                <div className="card-header">
                    <h2 className-="card-title">
                    <div className="authors"> {this.state.papers[0].title} </div>
                    </h2>
                    {this.state.a.map((x,i)=>
                        <li className="form-inline row list-group-item" key={i}>
                            <div className="card">
                                Authors
                                <div className="card-body">
                                    {x.firstName}
                                </div>
                                <div className="card-body">
                                    {x.lastName}
                                </div>
                                {x.affiliation.map((k,z) => 
                                 <li className="form-inline row list-group-item" key={z}>
                                <div className="card">
                                    Affiliation
                                 <div className="card-body">
                                    {k.name}
                                </div>
                                <div className="card-body">
                                    {k.start}
                                </div>
                                <div className="card-body">
                                    {k.end}
                                </div>
                                </div>
                                </li>
                                )}
                            </div>
                        </li>
                    )}
                    <div className="card-body">
                    {this.state.j[0] && this.state.j[0].name}
                    </div>
                    <div className="card-body">
                    { this.state.j[0] && this.state.j[0].date}
                    </div>
                    <div className="card-body">
                    {this.state.j[0] && this.state.j[0].volume}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].url}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].page}
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
                    {this.state.a.map((x,i)=>
                        <li className="form-inline row list-group-item" key={i}>
                            <div className="card">
                                Authors
                                <div className="card-body">
                                    {x.firstName}
                                </div>
                                <div className="card-body">
                                    {x.lastName}
                                </div>
                                {x.affiliation.map((k,z) => 
                                 <li className="form-inline row list-group-item" key={z}>
                                <div className="card">
                                    Affiliation
                                 <div className="card-body">
                                    {k.name}
                                </div>
                                <div className="card-body">
                                    {k.start}
                                </div>
                                <div className="card-body">
                                    {k.end}
                                </div>
                                </div>
                                </li>
                                )}
                            </div>
                        </li>
                    )}
                    <div className="card-body">
                    {this.state.c[0] && this.state.c[0].name}
                    </div>
                    <div className="card-body">
                    {this.state.c[0] && this.state.c[0].timeHeld}
                    </div>
                    <div className="card-body">
                    {this.state.c[0] && this.state.c[0].year}
                    </div>
                    <div className="card-body">
                    {this.state.c[0] && this.state.c[0].location}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].url}
                    </div>
                    <div className="card-body">
                    {this.state.papers[0].page}
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