import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import OrderViewer from './OrderViewer'
import MenuEditor from './MenuEditor'
class AdminPage extends Component {

  state = {}

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ORDERS' })
  }

  render() {
    return (
      <div>
        <h2>this is the admin page</h2>
        {/* <OrderViewer orders={this.props.state.order.orderViewer}/> */}
        <MenuEditor/>
      </div>
      
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(AdminPage);
