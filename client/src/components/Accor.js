import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
const Accor = ({ files }) => {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const wikiresulr = async () => {
      const { data } = await axios.get(
        '/api/topheadline'
      );
      setSearchResult(data);
      if(!searchResult){
        window.location.reload()
      }
    };
    wikiresulr();

  }, [searchResult]);

  return (
    <div>
      <div className="row "  >
       
        <div className=" col-md-4">
          {searchResult.splice(0,Math.ceil((searchResult.length)/3)).map((x) => (
            <div>
            <Card className='bg-dark'>
              <Card.Img src={x.urlToImage} width='50%' />

              <Card.Title className='text-white'>{x.title}</Card.Title>
              <Card.Body>
                <Card.Text className='text-white'>{x.content}</Card.Text>
                <Button className='btn btn-block btn-light' onClick={() =>
                  window.open(x.url)}>More</Button>
              </Card.Body>
            </Card>
            <br></br>
            </div>
          ))}
        </div>
        <div className=" col-md-4">
          {searchResult.splice(0,Math.ceil((searchResult.length)/2)).map((x) => (
            <div>
            <Card className='bg-dark'>
              <Card.Img src={x.urlToImage} width='50%' />

              <Card.Title className='text-white'>{x.title}</Card.Title>
              <Card.Body>
                <Card.Text className='text-white'>{x.content}</Card.Text>
                <Button className='btn btn-block btn-light' onClick={() =>
                  window.open(x.url)}>More</Button>
              </Card.Body>
            </Card>
            <br></br>
            </div>
          ))}
        </div>
        <div className=" col-md-4 ">
          {searchResult.map((x) => (
            <div>
            <Card className='bg-dark rounded'>
              <Card.Img src={x.urlToImage} width='50%' />

              <Card.Title className='text-white'>{x.title}</Card.Title>
              <Card.Body>
                <Card.Text className='text-white'>{x.content}</Card.Text>
                <Button className='btn btn-block btn-light' onClick={() =>
                  window.open(x.url)}>More on this Story</Button>
              </Card.Body>
            </Card>
            <br></br>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Accor;
