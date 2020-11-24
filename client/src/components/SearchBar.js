import React from 'react';
import searchpics from './actions'
import {connect} from 'react-redux'
class SearchBar extends React.Component{
 
  
    state={inputerText:""}
    buttonClick=()=>{
        this.props.searchpics(this.state.inputerText)
        
    }
    
    render(){
        console.log(this.props.pictures)
        return(
            <div className='row' >
            
            <div className='col-8 offset-1' >
              <input placeholder='Type here' className='form-control' type='text' value={this.state.inputerText} onChange={(e)=>this.setState({inputerText:e.target.value})}/>
            </div>
           < div className='col-2 text-left '>
            <button onClick={this.buttonClick} className='btn btn-info'>Search</button>
          </div>
            </div>
        )
    }

}
 function mapStateToProps(state){
  return{pictures:state.fetchPicsReducer}  
}
export default connect(mapStateToProps,{searchpics}) (SearchBar)