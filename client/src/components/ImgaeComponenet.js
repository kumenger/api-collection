import React from 'react'
import SerachBar from './SearchBar'
import ImageList from './ImageList'
class ImgaeComponenet extends React.Component{
    render(){
        return(
            <div className='row ' style={{paddingTop:"20px"}} >
                <div className='col-12' >
                <SerachBar/>
                <br/>
                <ImageList/>
                </div>
                
            </div>

        )
    }
}
export default ImgaeComponenet