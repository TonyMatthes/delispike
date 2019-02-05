import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ShoppingCart } from '@material-ui/icons'
import subtotalCalulator from './subtotalCalculator'
import NavButton from '../Nav/NavButton'

class SubTotalBar extends Component {


  render() {
    return (
      <NavButton
        color="inherit"
        path="/currentorder"
        name={`${this.props.state.order.orderItems.orders.length} ${this.props.state.order.orderItems.orders.length === 1 ? 'item' : 'items'}, Subtotal: $${subtotalCalulator(this.props.state.order.orderItems.orders)}`}
        icon={<ShoppingCart />} />
    );
  }
}

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(SubTotalBar);