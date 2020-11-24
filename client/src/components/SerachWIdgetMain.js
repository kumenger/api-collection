import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

const SearchWidgetMain = () => {
  const [term, setTerm] = useState("wikipidia");
  const [response, setResponse] = useState([]);
  const [con,setCon]=useState(false)
  useEffect(() => {
    if(navigator.onLine){setCon(true)
    const search = async () => {
      const  {data}  = await axios.get(
        `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=${term}`
      );
      setResponse(data.query.search);
    };
    const settiomeout = setTimeout(() => {
      if (term) {
        search();
      }
    }, 1000);

    return () => clearTimeout(settiomeout);
  }}, [term]);
  async function getres(term) {
    
      const { data } = await axios.get(`
    https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=${term}`);
      setResponse(data.query.search);
     
  }
  if(!con){return<div>"mm no conection"</div>}
  return (
    <div>
      <div className="row">
        <div className="col-md-10 offset-md-1 input-group">
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="form-control"
          />
          <div className="input-group-append">
            {" "}
            <button
              className="btn btn-outline-info"
              onClick={() => getres(term)}
            >
          <i class="fas fa-search"></i>     Wiki Serach
            </button>
          </div>
        </div>
      </div>
      <br></br>
      <div className="">
        {response.map((x) => (
          <div className="row ">
            <div className="col-md-10 offset-md-1 justify-content-center">
              <Jumbotron>
                <h1>{x.title}</h1>
                <p>
                  <span dangerouslySetInnerHTML={{ __html: x.snippet }}></span>
                </p>
                <p>
                  <Button
                    variant="primary"
                    onClick={() =>
                      window.open(`http://en.wikipedia.org/?curid=${x.pageid}`)
                    }
                  >
                    {" "}
                    More
                  </Button>
                </p>
              </Jumbotron>
              <br></br>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SearchWidgetMain;
