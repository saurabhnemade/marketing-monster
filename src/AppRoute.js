import React, { Component } from "react";
import { Router, Route, NavLink } from "react-router-dom";

import { createHashHistory } from "history";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import reducers from "./reducers";

import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//import pages here
import Welcome from "./pages/welcome/Welcome";
import Templates from "./pages/templates/Templates";
import Editor from "./pages/editor/Editor";

const hist = createHashHistory();
const routeMiddleWare = routerMiddleware(hist);

// Add the reducer to your store on the `routing` key
const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    }),
    composeWithDevTools(
        applyMiddleware(routeMiddleWare, thunk)
    )
);

const history = syncHistoryWithStore(hist, store);

export default class AppRoute extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={hist}>
                    <div>
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                            <NavLink to="/" className="navbar-brand">MMonster</NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link" to="/">Home</NavLink>
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
                        <Route exact activeClassName="active" path="/" component={Welcome} />
                        <Route activeClassName="active" path="/templates" component={Templates} />
                        <Route activeClassName="active" path="/editor" component={Editor} />
                    </div>
                </Router>
            </Provider>
        );
    }
}