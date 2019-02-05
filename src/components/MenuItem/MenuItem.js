import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider
}
  from '@material-ui/core';

import {
  AddCircle,
  RemoveCircle,
  Edit as EditCircle,
}
  from '@material-ui/icons'


class MenuItem extends Component {

  state={
    selected:false
  }

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
        return <EditCircle />
      default: console.log('no icon')
        break;
    }
  }
  render() {
    return (
      <>
      <ListItem button onClick={()=>this.setState({selected:!this.state.selected})}>
          <ListItemText
            primary={this.props.item.item + ' $' + this.props.item.price}
            secondary={this.state.selected?this.props.item.description : this.props.item.description} />
        <ListItemSecondaryAction>
          <IconButton color="secondary" onClick={this.props.iconAction}>
            {this.iconToShow(this.props.icon)}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
  <Divider/>
  </>
    );
  }
}

const mapReduxToProps = state => ({ state });

export default connect(mapReduxToProps)(MenuItem);
