import React from "react";
import {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {getNews} from './actions'
import {connect} from "react-redux";
const Header = (props) => {
  const[term,setTerm]=useState("")
  const[news,setNews]=useState("")
 useEffect(()=>{
  setNews(term)
  },[term])
 const termchange=()=>{
  props.getNews(term)
 
 }
  
  return (
    <div className='row'  >
      <div className='col-md-12'>
      <Navbar  expand="lg" style={{backgroundColor:"snow"}}>
        
      
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link ><Link to="/"><button className='btn btn-outline-info btn-block'><i class="far fa-newspaper"></i> word News</button></Link></Nav.Link>
      <Nav.Link ><Link to="/SearchWidgetMain"><button className='btn btn-outline-info btn-block'><i class="fab fa-wikipedia-w"></i> wikipidia Search</button></Link></Nav.Link>
      <Nav.Link ><Link to="/DropDown"><button className='btn btn-outline-info btn-block'><i class="fab fa-galactic-senate"></i> Star War Movies</button></Link></Nav.Link>
      <Nav.Link ><Link to="/ImgaeComponenet"><button className='btn btn-outline-info btn-block'><i class="fas fa-images"></i> Image Search</button></Link></Nav.Link>
      
    </Nav>
    <Form inline>
      <FormControl type="text" id='inputvalu' placeholder={` Search News`} className="mr-sm-2" value={term} onChange={e=>setTerm(e.target.value)} />
    <Link to={`/SearchWidget`}   > <button onClick={()=>termchange()} className='btn btn-outline-info btn-block' ><i class="fas fa-search"></i> News Search</button> </Link> 
    </Form>
    
  </Navbar.Collapse>
</Navbar>
    </div>
    <br></br>
    </div>
  );
};
const mapStateToProps=(state)=>{
return  {getwikireduce:state.getwikireduce}}
export default connect(mapStateToProps,{getNews}) (Header);
