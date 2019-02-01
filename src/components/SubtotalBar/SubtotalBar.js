import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import subtotalCalulator from './subtotalCalculator'

class SubTotalBar extends Component {


  render() {
    return (
      <Link className="nav-link" to="/currentorder">
        Cart: {this.props.state.order.orderItems.orders.length} {this.props.state.order.orderItems.orders.length === 1 ? 'item' : 'items'},
          Subtotal: ${subtotalCalulator(this.props.state.order.orderItems.orders)}
      </Link>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(SubTotalBar);