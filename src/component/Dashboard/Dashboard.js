import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Dashboard extends Component {
  constructor(){
    super();
    this.state={
      listOfHouses:[]
    }
  }
  componentDidMount(){
    axios.get('/api/houses')
    .then(res => {
      this.setState({listOfHouses: res.data})
    })
  }
  
 deleteHouse(id){
   axios.delete(`/api/house/${id}`)
   .then(res => {
     this.setState({house: res.data})
   })
 }

  render() {
    // let mappedhouses= this.state.listOfHouses.map((house)=>{
    //   return {id, name, address, city, state, zip}= house
    // })
    return (
      <div>
         <h1> Dashboard </h1>
        <Link to='/wizard'><button>Add New Property</button></Link> 

        {/* {mappedhouses} */}
      </div>
    );
  }
}

export default Dashboard;