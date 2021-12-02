import React from 'react';
import Navbar from '../utils/Navbar';
import {Paper} from '../../../../server/src/models/Paper'
import {Journal} from '../../../../server/src/models/Journal'
import {Conference} from '../../../../server/src/models/Conference'
import { conferencerepository } from '../../../../server/src/controllers/conference'

class CreatePaper extends React.Component{
    constructor(props){ 
        super(props);
        this.state = {
            title: '',
            authors: '',
            conference: '',
            journal: '', 
            category: '',
            url: '',
            page: '',
            isconference: false,
            Conferencename:'',
            ConferencetimeHeld:'',
            ConferenceYear:'',
            ConferenceLocation:'',
            Journalname:'',
            Journaldate:'',
            Journalvolume:''
        };
        this.handChange = this.handChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handChange(event)
    {
        this.setState({value : event.target.value});
    }
    
    handleSubmit(event){
        //write the route please and thank you
    }

    render(){
        return(
            <div className="container my-4 py-3">
                <Navbar />
                <form onSubmit={this.handleSubmit} className="card container py-4">
                    <h1 className="card-title text-center ">Add Paper</h1>
                    <label>
                        <input type="checkbox" name="Conference " id= "Conference" onChange={this.handleChange}
                        checked={this.state.conference} onChange={this.handleChange}></input>
                    </label>
                   <div className="row">
                       <label className="col">
                           <input type="text" id="title" name="Title" value={this.state.title}
                           placeholder="title" className="form-control" onChange={this.handleChange}>
                           </input>
                       </label>
                       <label className="col">
                           <input type="text" id="authors" name="Authors" value={this.state.authors}
                           placeholder="authors" className="form-control" onChange={this.handleChange}>
                           </input>
                       </label>                       
                       <label className="col">
                           <input type="text" id="conference" name="Conference" value={this.state.conference}
                           placeholder="conference" className="form-control" onChange={this.handleChange}>
                           </input>
                       </label>                       
                       <label className="col">
                           <input type="text" id="journal" name="Journal" value={this.state.journal}
                           placeholder="journal" className="form-control" onChange={this.handleChange}>
                           </input>
                       </label>                       
                       <label className="col">
                           <input type="text" id="category" name="category" value={this.state.category}
                           placeholder="category" className="form-control" onChange={this.handleChange}>
                           </input>
                       </label>
                       <label className="col">
                           <input type="text" id="url" name="url" value={this.state.url}
                           placeholder="url" className="form-control" onChange={this.handleChange}>
                           </input>
                       </label>
                       <label className="col">
                           <input type="text" id="page" name="page" value={this.state.page}
                           placeholder="page" className="form-control" onChange={this.handleChange}>
                           </input>
                       </label>
                       <label className="col" required={!this.state.isconference} hidden={this.state.isconference}>
                           <input type="text" id="Conferencename" name="Conferencename" value={this.state.Conferencename}
                           placeholder="Conferencename" className="form-control" onChange={this.handleChange}>
                           </input>
                       </label>
                       <label className="col" required={!this.state.isconference} hidden={this.state.isconference}>
                           <input type="text" id="ConferencetimeHeld" name="ConferencetimeHeld" value={this.state.ConferencetimeHeld}
                           placeholder="ConferencetimeHeld" className="form-control" onChange={this.handleChange}>
                           </input>
                       </label>
                       <label className="col" required={!this.state.isconference} hidden={this.state.isconference}>
                           <input type="text" id="ConferenceYear" name="ConferenceYear" value={this.state.ConferenceYear}
                           placeholder="ConferenceYear" className="form-control" onChange={this.handleChange}>
                           </input>
                       </label>
                       <label className="col" required={!this.state.isconference} hidden={this.state.isconference}>
                           <input type="text" id="ConferenceLocation" name="ConferenceLocation" value={this.state.ConferenceLocation}
                           placeholder="ConferenceLocation" className="form-control" onChange={this.handleChange}>
                           </input>
                       </label>
                       <label className="col" >
                           <input type="text" id="Journalname" name="Journalname" value={this.state.Journalname}
                           placeholder="Journalname" className="form-control" onChange={this.handleChange}>
                           </input>
                       </label>
                       <label className="col" >
                           <input type="text" id="Journaldate" name="Journaldate" value={this.state.Journaldate}
                           placeholder="Journaldate" className="form-control" onChange={this.handleChange}>
                           </input>
                       </label>
                       <label className="col" >
                           <input type="text" id="Journalvolume" name="Journalvolume" value={this.state.Journalvolume}
                           placeholder="Journalvolume" className="form-control"onChange={this.handleChange}>
                           </input>
                       </label>
                   </div>
                   <input type="submit" value="submit" className="btn btn-success mt-2 rounded-pill" required/>
                </form>
            </div>
        );
    }
}

export default AddPapers;
