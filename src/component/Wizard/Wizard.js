import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import StepTwo from './StepTwo';

class Wizard extends Component{
    constructor(){
        super();
        this.state={
            name: "",
            address: "",
            city: "",
            state: "",
            zip: 0
          };
          
        this.handleName= this.handleName.bind(this)
        this.handleAddress= this.handleAddress.bind(this)
        this.handleCity= this.handleCity.bind(this)
        this.handleState= this.handleState.bind(this)
        this.handleZip= this.handleZip.bind(this)
        }
    addHouse(){
        let {name, address, city, state, zip} = this.props;
               
    axios.post('/api/house/add', {name, address, city, state, zip } );
            }; 

    
 deleteHouse(id){
    axios.delete(`/api/house/${id}`)
    .then(res => {
         this.setState({house: res.data})
 })
}

        handleName(text){
            this.setState({name: text})
        
        };

        handleAddress(text){
            this.setState({address: text})
        };

        handleCity(text){
            this.setState({city: text})
        };

        handleState(text){
            this.setState({state: text})
        };

        handleZip(text){
            this.setState({zip: text})
        };

        
        
    render(){
        return (
            <div>
                <h1> Add New Listing </h1>
               <h3>Property Name <input className='Name' onChange={(e)=> this.handleName(e.target.value)}/></h3>
               <h3>Address <input className='Address' onChange={(e)=> this.handleAddress(e.target.value)}/></h3>
               <h3>City <input className='City' onChange={(e)=> this.handleCity(e.target.value)}/></h3>
               <h3>State <input className='State' onChange={(e)=> this.handleState(e.target.value)}/></h3>
               <h3>Zipcode <input className='Zip' onChange={(e)=> this.handleZip(e.target.value)}/></h3>
            <Link to='/'><button>Cancel</button></Link>  
            <Link to='/wizard/step2'><button>Next- Step 2</button></Link>  

            <Switch>
                <Route path='/wizard/step2' component={StepTwo}/>
            </Switch>
            <button> Submit </button>
            
            </div>
        );
    }
}

export default Wizard;