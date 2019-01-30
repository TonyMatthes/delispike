import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SubTotalBar extends Component {


  render() {
    return (
      <Link className="nav-link" to="/currentorder">
        Cart: {this.props.state.order.orderItems.orders.length} {this.props.state.order.orderItems.orders.length === 1 ? 'item' : 'items'},
          Subtotal: ${this.props.state.order.orderItems.orders.map(item => (Number(item.price))
        ).reduce((accumulator, currentValue) => accumulator + currentValue
        ).toFixed(2)}
      </Link>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(SubTotalBar);