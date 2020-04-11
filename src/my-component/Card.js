import React, { Component } from 'react';
import '../my-css/card.css'
import Example from './Example.js'

class Card extends Component{
    
 
   
   render(){
   
    
    return(
       
           
    //      <div className="card ml-4 mr-2 mt-4 d-inline-block">

    //           <div className="view overlay">
    //                  <img className="card-img-top" src={this.props.pic} alt="Card image cap" style={{height:"150px"}}></img> 
    //                  <a href="#!">
    //                  <div className="mask rgba-white-slight"></div>
    //                  </a>
    //           </div>

    //          <div className="card-body">
    //                   <h5 className="card-title">{this.props.title}</h5>
    //                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //     <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    //     Launch demo modal
    //   </button>
      
      
    //   <div className="modal fade" id="exampleModal"  tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //     <div className="modal-dialog" role="document"style={{opacity:"1"}} >
    //       <div className="modal-content" >
    //         <div className="modal-header">
    //           <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
    //           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    //             <span aria-hidden="true">&times;</span>
    //           </button>
    //         </div>
    //         <div className="modal-body">
    //           ...
    //         </div>
    //         <div className="modal-footer">
    //           <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    //           <button type="button" className="btn btn-primary">Save changes</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
                               
    //           </div>
    //       </div>
            

        <div>
            <div className="flip-card ml-2">

                 <div className="flip-card-inner">
                      <div className="flip-card-front">
                             <img src={this.props.pic} alt="Avatar" style={{width:"250px",height:"220px"}} />
                             <h5 className="card-title mt-4">{this.props.title}</h5>
                      </div>

                 <div className="flip-card-back" style={{backgroundColor:this.props.color}}>
                         <h3 className="mb-3" style={{textAlign:'center'}}>{this.props.title}</h3>
                         <div  style={{textAlign:'left'}}>
                         <ol>
                         <h5><li>Hi</li></h5>
                          </ol>
                         </div>
        
                         <button type="button" class="btn bg-white" data-toggle="modal" data-target="#exampleModalLong">
                            See Result
                        </button>
        
        
       
                         

                </div>
              </div>
         </div>

        
         <div class="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
       
      </div>
      <div class="modal-body">
      <table class="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Product 1</td>
              <td>100$</td>
              <td><a><i class="fas fa-times"></i></a></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Product 2</td>
              <td>100$</td>
              <td><a><i class="fas fa-times"></i></a></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Product 3</td>
              <td>100$</td>
              <td><a><i class="fas fa-times"></i></a></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Product 4</td>
              <td>100$</td>
              <td><a><i class="fas fa-times"></i></a></td>
            </tr>
            <tr class="total">
              <th scope="row">5</th>
              <td>Total</td>
              <td>400$</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>




     </div>

       
    )
   }
}
export default Card;