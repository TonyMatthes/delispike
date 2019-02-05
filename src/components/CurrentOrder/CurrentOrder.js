import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, } from '@material-ui/core'

import MenuItem from '../MenuItem/MenuItem';
import NavButton from '../Nav/NavButton'
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
        <NavButton path="/confirm" name="Confirm order"/>
      </>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(CurrentOrder);
