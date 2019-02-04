import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, } from '@material-ui/core'

import MenuItem from '../MenuItem/MenuItem';
class CurrentOrder extends Component {

  state = {}

  removeItemFromOrder = (item) => () => {
    this.props.dispatch({ type: 'REMOVE_ORDER_ITEM', payload: item })
  }

  render() {
    return (
      <>
        <List>
          {/* <pre>{JSON.stringify(this.state.order, null, 2)}</pre> */}
          {this.props.state.order.orderItems.orders.map(item => (
            <MenuItem key={item.orderSpecificId} icon='RemoveCircle' iconAction={this.removeItemFromOrder(item)} item={item} />
          ))}
        </List>
        <button><Link to="/confirm">Confirm Order</Link></button>
      </>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(CurrentOrder);
