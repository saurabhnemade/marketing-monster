import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Row } from 'react-flexbox-grid';

export default class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <Row center="xs" style={{backgroundColor: "#9e9e9e"}}>
        Made with &nbsp;<Icon name="heart" color="red" /> from @saurabhnemade
      </Row>
    );
  }
}
