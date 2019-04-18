import React, { Component } from "react";
import "./App.css";
import Posts from "./components/Posts";
import Postform from "./components/Postform";
import SearchRepos from "./components/SearchRepos";
import { Provider } from "react-redux";
import store from "./components/store";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostRepo from "./components/PostRepo";
import RepoDelete from "./components/RepoDelete";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          {" "}
          <div className="App">
            <Router>
            <Switch>
              <Route path="/SearchRepo" component={SearchRepos} />
              <Route path="/PostRepo" component={PostRepo} />
              <Route path="/RepoDelete" component={RepoDelete} />
              </Switch>
            </Router>
          </div>
        
      </Provider>
    );
  }
}

const Home = () => <h1>Hello & welcome to the Home Page!</h1>;

export default App;
