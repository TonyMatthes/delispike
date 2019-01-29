import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubTotalBar extends Component {

  state = {
    order: [],
  }

  render() {
    return (
      <div>
        <h4>
          {this.props.state.order.orderItems.orders.length} items,
          Subtotal: ${this.props.state.order.orderItems.orders.length < 1? '0.00':
          this.props.state.order.orderItems.orders.map(item => (Number(item.price))).reduce((accumulator, currentValue) => accumulator + currentValue).toFixed(2)
          }</h4>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(SubTotalBar);