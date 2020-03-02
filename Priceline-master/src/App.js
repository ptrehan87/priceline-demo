import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./app.css";
import Hotels from "./components/Hotels";
import Flights from "./components/Flights";
import Bundle from "./components/Bundle";
import Cars from "./components/Cars";
import Cruises from "./components/Cruises";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    const { path } = this.props.match;
   
    return (
    

      <div>
<div>
  <Switch>
    
    <h2></h2>
  </Switch>
</div>

        
        <div className="links">

          <Link to={`${path}/Hotels}`} className="link">Hotels</Link>
          <Link to={`${path}/flights`} className="link">Flights</Link>
          <Link to={`${path}/bundle+save`} className="link">Bundle + Save</Link>
          <Link to={`${path}/cars`} className="link">Cars</Link>
          <Link to={`${path}/cruises`} className="link">Cruises</Link>


        </div>
        <div className="tabs">
          <Switch>
            
            <Route path={`${path}/Hotels`} exact component={Hotels} />
            <Route path={`${path}/flights`} component={Flights} />
            <Route path={`${path}/bundle+save`} component={Bundle} />
            <Route path={`${path}/cars`} component={Cars} />
            <Route path={`${path}/cruises`} component={Cruises} />


          </Switch>
        </div>



      </div>
    );
  }
}

export default App;
