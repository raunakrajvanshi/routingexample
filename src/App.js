import React from "react";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    //Used to handle routing Wrap all components that req
    <Router>
      <div className="App">
        <Nav />
        {/*When u use switch you are stopping the process of going through all of these as soon as it matches one it stops */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>HomePage</h1>
  </div>
);

export default App;
