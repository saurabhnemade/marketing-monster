import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Row, Col } from 'react-flexbox-grid';

export default class Header extends Component {
  static propTypes = {

  };

  render() {
    return (
        <Row middle="xs" style={{ backgroundColor: '#1E88E5' }}>
          <Col xs={11} sm={11} md={11} lg={11}>
            <Icon name="mail outline" size="big" color="yellow" />
            <span>Marketing Monster</span>
          </Col>
          <Col xs={11} sm={1} md={1} lg={1}>
            <Row>
              <Col>
                <div style={{float: "right"}}>
                  <Icon name="user circle" size="big" inverted={true} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
    );
  }
}
