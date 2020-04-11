import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './my-component/Header'
import Body from './my-component/Body';


class App extends Component{
  render(){
  return (
    <div className="App">
     <Nav></Nav>
    <Body></Body>
    </div>
  );
}
}
export default App;
