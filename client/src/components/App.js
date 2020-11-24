import React from "react";
import Accor from "./Accor";
import SearchWidget from "./SerachWidget";
import SearchWidgetMain from "./SerachWIdgetMain";
import Header from "./Header";
import DropDown from "./DropDown";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ImgaeComponenet from  "./ImgaeComponenet"

const App = (props) => {
  const [checkonncetio, setcheckConnection] = useState("online");
  useEffect(() => {
    setcheckConnection(navigator.onLine ? "online" : "offline");
    window.addEventListener("offline", displayNoInternet());
    window.addEventListener("online", displayNoInternet());
  }, [checkonncetio]);
  const displayNoInternet = () => {
    if (checkonncetio === "offline") {
      return (
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">
              Your connection is intrupted.<br></br>try reloading the page or
              check your connection
            </h1>
          </div>
        </div>
      );
    }
    return (
      <div className="" >
        <h1 className='text-center ' style={{fontFamily:"monospace",color:"royalblue",fontWeight:"bold"}}>  News Wikipidia Image starwars Movies Search App</h1>
        <Router>
          <Header />

          <Route path="/" exact component={Accor} />
          <Route path="/SearchWidgetMain" component={SearchWidgetMain} />
          <Route path="/DropDown" component={DropDown} />
          <Route path="/SearchWidget" component={SearchWidget} />
          <Route path="/ImgaeComponenet" component={ImgaeComponenet}/>
        </Router>
      </div>
    );
  };

  return (
    <div className="" style={{ padding: "10px" }}>
      {displayNoInternet()}
    </div>
  );
};

export default App;
