import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Challenge from "./screens/Challenges/Challenges";
import Home from "./screens/Home";
import LogIn from "./screens/Login";
//import Exercises from "./screens/Exercises/index";
import AddPost from "./screens/AddPost";



class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route exact path="/login">
              <LogIn/>
            </Route>  
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/createPost">
              <AddPost/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
