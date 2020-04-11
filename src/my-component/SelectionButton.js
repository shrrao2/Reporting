import React, { Component } from 'react';


class SelectionButton extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            datanew:[]
        }
    }
    componentDidUpdate(prevProps){
        if (prevProps.showBatch!==this.props.showBatch){
            //const data = this.props.showBatch.map(dat => {
            //     return <a className="dropdown-item" href="#">{batch.batchName}</a>
            // })
            this.setState({datanew:this.props.showBatch})
        }
        
    }
    render(){
        
    return(
        <div>
            <section>
            <div className="container"> 
                 <div className="d-block mb-5">  

                    <div className="dropdown d-inline-block">

                            <button id="my-btn"className="btn  waves-effect waves-teal dropdown-toggle ml-4 mt-4" 
                            type="button" id="dropdownMenuButton" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false" style={{ backgroundColor:"#26a69a",color:"white"}}
                            onClick={this.props.click}>
                               Select Batch
                            </button>

                            
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {console.log("Batch :"+this.props.showBatch)}
                                    {
                                    this.state.datanew.map(dat => 
                                    <button className="dropdown-item" href="#" onClick={()=>{this.props.onClick(dat.batchId)}}>{this.props.showBatch.batchName}</button>
                                    )}
                             
                              </div>
                              </div>

                              <div className="dropdown d-inline-block">

                            <button id="my-btn"className="btn  waves-effect waves-teal dropdown-toggle ml-4 mt-4" 
                            type="button" id="dropdownMenuButton" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false" style={{ backgroundColor:"#26a69a",color:"white"}}
                            >
                              Select Cateory
                            </button>

                            
                            
                            
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                
                                    {
                                    this.props.showcat.map(dat => 
                                    <button className="dropdown-item" href="#">{dat.categoryName}</button>
                                    )}
                             
                              </div>


                    </div>
            
        </div>
        </div>
    </section>
</div>
    )
}
}
export default SelectionButton;