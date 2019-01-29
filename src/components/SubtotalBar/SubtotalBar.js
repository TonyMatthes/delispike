import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SubTotalBar extends Component {


  render() {
    return (
      <div>
        <h4>
          {this.props.state.order.orderItems.orders.length} items,
          Subtotal: ${this.props.state.order.orderItems.orders.length < 1 ? '0.00' :
            this.props.state.order.orderItems.orders.map(item =>
              (Number(item.price))).reduce((accumulator, currentValue) => accumulator + currentValue).toFixed(2)
          }</h4>
        <Link className="nav-link" to="/currentorder">
          view current order
          </Link>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(SubTotalBar);