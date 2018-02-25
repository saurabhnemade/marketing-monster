import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
import { Row, Col } from 'react-flexbox-grid';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router.
  You should adjust it according to the requirement of your app.
*/
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };

  render() {
    return (
      <div>
        <Header />

        <div style={{display: "flex", flexDirection: "row", minHeight: "calc(100vh - 47px)"}}>
           <div style={{width: "100px"}}>
             <Sidebar />
           </div>
           <div style={{flex: 1, overflow: "auto"}}>
              {this.props.children}
           </div>
        </div>
        
        <Footer />
      </div>
    );
  }
}
