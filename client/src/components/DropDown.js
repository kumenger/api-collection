import React, { useState, useEffect } from "react";
import { Button, DropdownButton } from "react-bootstrap";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import FormControl from "react-bootstrap/FormControl";
import ListGropup from "react-bootstrap/ListGroup";
import axios from "axios";

const DropDown = () => {
  const [select, setSelecet] = useState("films");
  const [numbers, setNumbers] = useState(1);
  const [starResult, setstarResult] = useState({});

  const [erro, setError] = useState("");
  useEffect(() => {
    const search = async () => {
      const resp = await axios
        .post('/api/starwar',{select:select,numbers:numbers})
        .catch((error) => {
          
          setError(error.response);
          //.catch((error)=>{setError(error.response.data.detail)
        });
      //.catch((error)=>setError(error.response));
      if (resp) {
        setstarResult(resp.data);
        setError("");
      }
    };

    search();
  }, [select, numbers, erro]);

  const handleSelect = (e) => {
    setSelecet(e);
  };
  const renderDate = () => {
    switch (select) {
      case "films":
        return (
          <div>
            <Card>
              <Card.Body>
                <Card.Img></Card.Img>
                <Card.Title>{starResult.title}</Card.Title>
                <Card.Text>{starResult.opening_crawl}</Card.Text>
              </Card.Body>
              <ListGropup>
                <ListGropup.Item>
                  <h5>
                    {"          "}
                    Producer{"         "}
                    <Badge variant="info">{starResult.producer}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    {"          "}
                    Director{"         "}
                    <Badge variant="info">{starResult.director}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    {"          "}
                    Release date{"         "}
                    <Badge variant="info">
                      <div className="row">
                        <div className="col-md-12">
                          {starResult.release_date}
                        </div>
                      </div>
                    </Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    {"          "}
                    Episode id{"         "}
                    <Badge variant="info">
                      {"          "}
                      {starResult.episode_id}
                    </Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
              </ListGropup>
            </Card>
          </div>
        );
      case "people":
        return (
          <div>
            <Card>
              <ListGropup>
                <ListGropup.Item>
                  <h5>
                    {"          "}
                    Name{"         "}
                    <Badge variant="info">
                      {"          "}
                      {starResult.name}
                    </Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    {"          "}
                    Birth year{"         "}
                    <Badge variant="info">
                      {"          "}
                      {starResult.birth_year}
                    </Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    {"          "}
                    Gender{" "}
                    <Badge variant="info">
                      {"          "}
                      {starResult.gender}
                    </Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    {"          "}
                    Height{" "}
                    <Badge variant="info">
                      {"          "}
                      {starResult.height}
                    </Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    {"          "}
                    Eye color{"         "}
                    <Badge variant="info"> {starResult.eye_color}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    {"          "}
                    Hair color{"         "}
                    <Badge variant="info">
                      {"          "}
                      {starResult.hair_color}
                    </Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    {"          "}
                    Body mas{" "}
                    <Badge variant="info">
                      {"          "}
                      {starResult.mass}
                    </Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
              </ListGropup>
            </Card>
          </div>
        );
      case "planets":
        return (
          <div>
            <Card>
              <ListGropup>
                <ListGropup.Item>
                  <h5>
                    {"          "}
                    Name <Badge variant="info">{starResult.name}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    Terrain <Badge variant="info">{starResult.terrain}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    Orbital period{"         "}
                    <Badge variant="info"> {starResult.orbital_period}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    Population{"         "}
                    <Badge variant="info">{starResult.population}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    Diameter{"         "}
                    <Badge variant="info">{starResult.diameter}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    Rotation period{"         "}
                    <Badge variant="info">{starResult.rotation_period}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    Gravity{"         "}
                    <Badge variant="info"> {starResult.gravity}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    Climate{"         "}
                    <Badge variant="info"> {starResult.climate}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
              </ListGropup>
            </Card>
          </div>
        );
      case "species":
        return (
          <div>
            {"          "}
            <Card>
              <ListGropup>
                <ListGropup.Item>
                  <h5>
                    {"          "}
                    Name <Badge variant="info"> {starResult.name}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    {"          "}
                    Average_lifespan{"         "}
                    <Badge variant="info">
                      {"          "}
                      {starResult.average_lifespan}
                    </Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    Average_height{"         "}
                    <Badge variant="info">{starResult.average_height}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    Classification{"         "}
                    <Badge variant="info"> {starResult.classification}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    Designation{"         "}
                    <Badge variant="info"> {starResult.designation}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    Language{"         "}
                    <Badge variant="info"> {starResult.language}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    Skin colors{"         "}
                    <Badge variant="info"> {starResult.skin_colors}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
                <ListGropup.Item>
                  <h5>
                    Hair colors{"         "}
                    <Badge variant="info"> {starResult.hair_colors}</Badge>
                    {"         "}
                  </h5>
                </ListGropup.Item>
              </ListGropup>
            </Card>
          </div>
        );
      case "starships":
        return (
          <div>
            {"          "}
            <ListGropup>
              <ListGropup.Item>
                <h5>
                  {"          "}
                  Name <Badge variant="info">{starResult.name}</Badge>
                  {"         "}
                </h5>
              </ListGropup.Item>
              <ListGropup.Item>
                <h5>
                  {"          "}
                  Model <Badge variant="info">{starResult.model}</Badge>
                  {"         "}
                </h5>
              </ListGropup.Item>
              <ListGropup.Item>
                <h5>
                  {"          "}
                  Manufacturer{"         "}
                  <Badge variant="info">{starResult.manufacturer}</Badge>
                  {"         "}
                </h5>
              </ListGropup.Item>
              <ListGropup.Item>
                <h5>
                  {"          "}
                  Cargo capacity{"         "}
                  <Badge variant="info">{starResult.cargo_capacity}</Badge>
                  {"         "}
                </h5>
              </ListGropup.Item>
              <ListGropup.Item>
                <h5>
                  {"          "}
                  Maximum atmosphering speed{"         "}
                  <Badge variant="info">
                    {"          "}
                    {starResult.max_atmosphering_speed}
                  </Badge>
                  {"         "}
                </h5>
              </ListGropup.Item>
              <ListGropup.Item>
                <h5>
                  {"          "}
                  Passengers{"         "}
                  <Badge variant="info"> {starResult.passengers}</Badge>
                  {"         "}
                </h5>
              </ListGropup.Item>
              <ListGropup.Item>
                <h5>
                  {"          "}
                  Consumables{"         "}
                  <Badge variant="info"> {starResult.consumables}</Badge>
                  {"         "}
                </h5>
              </ListGropup.Item>
              <ListGropup.Item>
                <h5>
                  {"          "}
                  Hyperdrive rating{"         "}
                  <Badge variant="info">{starResult.hyperdrive_rating}</Badge>
                  {"         "}
                </h5>
              </ListGropup.Item>
            </ListGropup>
          </div>
        );

      default:
        return <div>no data found</div>;
    }
  };
  const finalrender = () => {
    if (starResult && erro === "") {
      return renderDate();
    }
    return (
      <p className="text-center text-danger">
        No data found Please Change The Id of {select} or check you internet
        connection
      </p>
    );
  };


 console.log(starResult)
  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-md-s col-md-12">
          <h3 className="text-dark text-center" style={{fontFamily:"monospace",color:"royalblue",fontWeight:"bold"}}>
            All the Star Wars data you've ever wanted,From all SEVEN Star Wars
            films
          </h3>
          
        </div>
      </div>
      <div class="row">
        <div className="col-xs-12 col-md-s col-md-12  ">
          <h2 className="text-center" style={{fontFamily:"monospace",color:"royalblue",fontWeight:"bold"}}>
            Planets, Spaceships,People, Films and Species
          </h2>
        </div>
      </div>

      <div className="row ">
        <div className="col-xs-6 col-s-6 col-md-6 offset-xs-3 offset-s-3 offset-md-3">
          <ButtonToolbar className="justify-content-between">
            <ButtonGroup>
              <Button variant="white">Select</Button>

              <DropdownButton
                as={ButtonGroup}
                title={`${select}`}
                id="dropdown-menu-align-right"
                variant="primary"
                onSelect={handleSelect}
                size="md"
              >
                <DropdownItem eventKey="films">
                  <i class="fas fa-film text-info"></i> Films
                </DropdownItem>
                <DropdownItem eventKey="people">
                  <i class="fas fa-users text-info"></i> People
                </DropdownItem>
                <DropdownItem eventKey="planets">
                  <i class="fas fa-globe-europe text-info"></i> Planets
                </DropdownItem>
                <DropdownItem eventKey="species">
                  <i class="fas fa-paw text-info"></i> Species
                </DropdownItem>
                <DropdownItem eventKey="starships">
                  <i class="fas fa-space-shuttle text-info"></i> Starships
                </DropdownItem>
              </DropdownButton>
            </ButtonGroup>{" "}
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="btnGroupAddon">ID</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="number"
                value={numbers}
                onChange={(e) => setNumbers(e.target.value)}
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
              />
            </InputGroup>
          </ButtonToolbar>
        </div>
      </div>

      <br></br>
      <div className="row">
        <div className="col-md-6 offset-md-3 justify-content-center ">
          {finalrender()}
        </div>
      </div>
    </div>
  );
};
export default DropDown;
