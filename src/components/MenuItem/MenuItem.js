import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
}
  from '@material-ui/core';

import {
  AddCircle,
  RemoveCircle,
  Edit,
}
  from '@material-ui/icons'


class MenuItem extends Component {

  addItemToOrder = (item) => () => {
    this.props.dispatch({ type: 'ADD_ORDER_ITEM', payload: { ...item, orderSpecificId: this.props.state.order.orderItems.key } })
  }
  removeItemFromOrder = (item) => () => {
    this.props.dispatch({ type: 'REMOVE_ORDER_ITEM', payload: item })
  }
  iconToShow = (icon) => {
    switch (icon) {
      case 'AddCircle':
        return <AddCircle />
      case 'RemoveCircle':
        return <RemoveCircle />
      case 'Edit':
        return <Edit />
      default: console.log('no icon')
        break;
    }
  }
  render() {
    return (
      <ListItem>
        <ListItemText
          primary={this.props.item.item + ' $' + this.props.item.price}
          secondary={this.props.item.description} />
        <ListItemSecondaryAction>
          <IconButton onClick={this.props.iconAction}>
            {this.iconToShow(this.props.icon)}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

const mapReduxToProps = state => ({ state });

export default connect(mapReduxToProps)(MenuItem);
