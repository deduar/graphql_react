import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MessageList from "./components/MessageList";
import MessageFrom from "./components/MessageFrom";
import "bootswatch/dist/lux/bootstrap.min.css";
import { Navigation } from "./components/NavBar";

function App() {
  return (
    <Router>
      <Navigation />
      <div class="contaner p-4">
        <Switch>
          <Route exact path="/" component={MessageList} />
          <Route exact path="/new-message" component={MessageFrom} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
