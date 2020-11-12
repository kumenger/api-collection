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
    
      setResult(props.wikiresulrt);
    
    
  }, [result]);
  if(!result){
    return(<div>no con</div>)
  }
  return (
    <div className="row container-fluid" style={{ paddingTop: "20px" }}>
      <div className="col-md-12 ">
        <Accordion>
          {result.map((x, index) => (
            <div>
              <Accordion.Toggle
                class="form-control btn btn-outline-info"
                eventKey={x.publishedAt}
              >
                <div className="row ">
                  <div className="col-md-2">
                    <span class="fas fa-angle-double-down fa-2x"></span>
                  </div>
                  <div className="col-md-10 ">
                    <p class="text-truncate">{x.title}</p>
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
