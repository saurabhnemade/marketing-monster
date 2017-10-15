import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

//import pages here
import Welcome from "./pages/welcome/Welcome";
import Templates from "./pages/templates/Templates";
import Editor from "./pages/editor/Editor";

export default class AppRoute extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                        <NavLink to="/" className="navbar-brand">MMonster</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/templates">Templates</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/editor">Editor</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/templates" component={Templates} />
                    <Route path="/editor" component={Editor} />
                </div>
            </Router>
        );
    }
}