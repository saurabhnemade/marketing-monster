import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Header } from 'semantic-ui-react';
import ReactTable from "react-table";

export class DefaultPage extends Component {
  static propTypes = {
    templates: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  getColumns() {
    return [{
      Header: "Name",
      accessor: "name"
    }];
  }

  render() {
    console.log(this);
    return (
      <div className="templates-default-page">
        <Header as='h2'>Templates</Header>
         <ReactTable
          data={[{name: "test"}]}
          columns={this.getColumns()}
          defaultPageSize={10}
        />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    templates: state.templates,
    isLoading: state.templates.getTemplatesPending,
    isError: state.templates.getTemplatesError
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
