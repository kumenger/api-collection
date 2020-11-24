import React from  'react';
import {connect} from 'react-redux'
const ImageList=(props)=>{
    if(props.pictures.pictures===""&&props.pictures.status===""){
        return <div className="text-center">
        <p className='text-center text-dark'>Wating please type to search....</p>
    <div className="spinner-border text-dark" role="status">
    
    </div>
    </div>
    }
    if(props.pictures.pictures.length===0&&props.pictures.status==="ok"){
  return <div><p className='text-center text-dark'>No results found</p></div>
    }
    return(
        <div className="container-fluidb row"  >
            <div className='col-10 offset-1'>
            {props.pictures.pictures.map(x=>
            <a href={x.links.download}>
            <img src={x.urls.small} className='img-responsive' style={{padding:"5px",width:"25%"}}/>
            
            </a>
            
            )}
        
            </div>
           
        </div>
    )
}
function mapStateToProps(state){
    return {pictures:state.fetchPicsReducer}
}
export default connect(mapStateToProps) (ImageList)