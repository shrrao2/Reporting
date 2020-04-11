import React, { Component } from 'react';
import Nav from './Header';
import SelectionButton from './SelectionButton';
import Card from './Card'; 
import Winner from '../my-images/winner2.jpg';
import Active from '../my-images/active.jpg';
import Dormant from '../my-images/dormant.png';
import Fail from '../my-images/fail.jfif';
import Active2 from '../my-images/image1.png'
import Learning from '../my-images/pupil.jpg'
import Slow from '../my-images/slow_learner.jpg'
import axios from 'axios'
class Body extends Component{

  
  constructor(props){
    super(props);
    this.state={

        mybatch:[],
        mycategory:[],
        myactivity:[],
        myuser:[]
    }
  }
  
  showMyId=(Id)=>{
    console.log("ShowMyId is Called");
    console.log(Id);
    if(this.state.mycategory.length===0){
    axios.get('https://5e907d692810f4001648afe6.mockapi.io/GetCategoryByBatch')
    .then(response => {
      const cat=response.data;
      this.setState({
        mycategory:cat,
      })
      console.log("category :"+response.data)
    })
  }
  }

  componentDidMount(){
    if(this.state.myuser.length===0){
      console.log("Users is Called");
    axios.get('https://5e907d692810f4001648afe6.mockapi.io/getusers')
    .then(response => {
      const user=response.data;
      this.setState({
        myuser:user
      })
      console.log("Users :"+response.data);

      
    })
    
  }
  if(this.state.mybatch.length===0){
    console.log("Batch is Called");
  axios.get('https://5e907d692810f4001648afe6.mockapi.io/GetBatch')
    .then(response => {
      const my_Batch=response.data;
      this.setState({mybatch:my_Batch})
      console.log("Batch :"+this.state.mybatch)
    })
   
  }
  if(this.state.myactivity.length===0){
    console.log("Activity is Called");
  axios.get('https://5e907d692810f4001648afe6.mockapi.io/activity')
    .then(response => {
      const data=response.data;
      this.setState({
        myactivity:data,
      })
      console.log("Activity is: "+response.data)
    })
  }
  }
    render(){

        return(
        <div>
          <div className="container">
              <div className="d-flex d-inline-block justify-content-end">
                   <SelectionButton 
                   onClick={(id)=>{this.showMyId(id)}}
                   showBatch={this.state.mybatch}
                   showcat={this.state.mycategory}/>

              </div>
              
            </div>    

        <div className="container border rounded pb-5 pr-4 pl-4" style={{backgroundColor:"#7395ae",}}>
            <h1 className="d-flex ml-4 mt-5 mb-3 pt-2" style={{color:"white"}}>Contests</h1>
            <div className="d-flex align-baseline justify-content-between">
              <Card title="Top Performers" pic={Winner} color="#7395ae"></Card>
              <Card title="Not Signed In" pic={Active} color="#7395ae"></Card>
              <Card title="Dormant Uers" pic={Dormant} color="#7395ae"></Card>
              <Card title="Failed Users" pic={Fail} color="#7395ae"></Card>
            </div>
      </div>


      <div className="container mt-5 border rounded pb-4 pl-4 pr-4 " style={{backgroundColor:"#afd275",}}>
            <h1 className="d-flex mt-5 mb-3 ml-4" style={{color:"#7e685a"}}>Learning</h1>
            <div className="d-flex align-baseline justify-content-between">
              <Card title="Learning Legends" pic={Active2} color="#afd275"></Card>
              <Card title="Capable Pupils" pic={Learning} color="#afd275"></Card>
              <Card title="Mild Learners" pic={Slow} color="#afd275"></Card>
            </div>
      </div>

      

      

      </div>
    )
    }
}

export default Body;