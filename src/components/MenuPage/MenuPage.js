import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  List,
}
  from '@material-ui/core'
import MenuItem from '../MenuItem/MenuItem';

class MenuSelect extends Component {

  state = {
    order: [],
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ITEMS' })
  }

  addItemToOrder = (item) => () => {
    this.props.dispatch({ type: 'ADD_ORDER_ITEM', payload: { ...item, orderSpecificId: this.props.state.order.orderItems.key } })
  }


  render() {
    return (
      <List>
        {this.props.state.menu.map(item => (
            <MenuItem key={item.id} icon='AddCircle' iconAction={this.addItemToOrder(item)} item={item} />
        ))}
      </List>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(MenuSelect);
