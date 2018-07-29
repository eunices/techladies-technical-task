import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import "./index.css";
import App from "./components/App";
import About from "./components/About";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/todos" component={App} />
      <Route exact path="/about" component={About} />
    </div>
    </BrowserRouter>, document.getElementById("root")
    // <App />, document.getElementById("root")
);

