import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
import { Row, Col } from 'react-flexbox-grid';

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
        <Row middle="xs" style={{backgroundColor: "#1E88E5"}}>
          <Col xs={12} sm={3} md={2} lg={10}>
            Logo
          </Col>
          <Col lg={2}>
            <Row>
              <Col>
                <div>
                  <Icon name="user circle" size="big" inverted={true}/>
                </div>
              </Col>
              <Col>
                <Button
                  color="red"
                  content="Like"
                  icon="heart"
                  label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="home-app">{this.props.children}</div>
        <div>
          Made with <Icon name="heart" color="red" /> from @saurabhnemade
        </div>
      </div>
    );
  }
}
