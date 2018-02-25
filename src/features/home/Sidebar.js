import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Input, Label, Menu } from 'semantic-ui-react';

export default class Sidebar extends Component {
  static propTypes = {};
  static contextTypes = {
    router: PropTypes.object,
  };

  handleItemClick(name) {
    this.context.router.history.push(name);
  }

  render() {
    const activeItem = 'inbox';
    return (
      <div className="home-sidebar">
        <Menu vertical style={{ width: '100px' }}>
          <Menu.Item name="stats" active={activeItem === 'stats'} onClick={this.handleItemClick.bind(this, "/dashboard")}>
            Home
          </Menu.Item>
          <Menu.Item name="templates" active={activeItem === 'templates'} onClick={this.handleItemClick.bind(this, "/templates")}>
            Templates
          </Menu.Item>
          <Menu.Item name="campaign" active={activeItem === 'campaign'} onClick={this.handleItemClick.bind(this, "/campaigns")}>
            Campaign
          </Menu.Item>
          <Menu.Item name="users" active={activeItem === 'users'} onClick={this.handleItemClick.bind(this, "/users")}>
            Users
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
