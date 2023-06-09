import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { getNews } from "./actions";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

const SearchWidget = (props) => {

  const [result, setResult] = useState(props.wikiresulrt);
  const [con, setcon] = useState(false);
  useEffect(() => {
    if (navigator.onLine) {
      setcon(true);
      setResult(props.wikiresulrt);
    }
    
  }, [result]);
  if(!props.wikiresulrt){
    return(<div>no con</div>)
  }
  return (
    <div className="row " style={{ paddingTop: "20px" }}>
      <div className="col-md-12 ">
        <Accordion>
          {props.wikiresulrt.map((x, index) => (
            <div>
              <Accordion.Toggle
                class="form-control btn btn-outline-info"
                eventKey={x.publishedAt}
              >
                <div className="row">
                  
                  <div className="col-md-12 ">
                    <p class=" text-truncate text-left text-dark" >{x.title}<span class="fas fa-angle-double-down float-right text-info"></span></p>
                  </div>
                </div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey={x.publishedAt} class="border">
                <div className="row bg-white border">
                  <div className="col-md-6" style={{ padding: "30px" }}>
                    <img src={x.urlToImage} className="img-fluid border" />
                  </div>
                  <div className="col-md-6">
                    <div class="row">
                      <div
                        className="col-md-8 offset-md-2"
                        style={{ padding: "30px" }}
                      >
                        {x.content}
                      </div>
                      <div
                        className="col-md-8 offset-md-2"
                        style={{ padding: "30px" }}
                      >
                        <button
                          class="btn btn-outline-info"
                          onClick={() => window.open(x.url)}
                        >
                          More on this Story
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Collapse>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    wikiresulrt: state.getwikireduce,
  };
};
export default connect(mapStateToProp)(SearchWidget);
