import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Body from "./Body";
import Summary from "./Summary";
import Header from './Header';

const Navigation = () => {
  return (
    <div className="container-fluid" style={{padding:"0",height:"100vh",overflow:"hidden"}}>
      <div className="row" style={{margin:0,height:"100%"}}>
        <div className="col-md-1 shadow" style={{background:"#1e1e1e"}} >
          <ul style={{listStyle:"none",padding:"5px"}}>
            <li style={{marginTop:"20%",marginBottom:"20%"}}>
              <Link to="/">User</Link>
            </li>
            <li>
              <Link to="/summary">Summary</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-11" >
          <Header/>
          <Switch>
            <Route exact path="/" component={Body}></Route>
            <Route path="/summary" component={Summary}></Route>
          </Switch>

        </div>
      </div>
    </div>
  );
};

export default Navigation;
