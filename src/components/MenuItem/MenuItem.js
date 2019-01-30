import React, { Component } from 'react';
import { connect } from 'react-redux';

class MenuItem extends Component {

  addItemToOrder = (item) => () => {
    this.props.dispatch({ type: 'ADD_ORDER_ITEM', payload: {...item, orderSpecificId: this.props.state.order.orderItems.key }})
  }
  removeItemFromOrder = (item) => () => {
    this.props.dispatch({ type: 'REMOVE_ORDER_ITEM', payload: item })
  }

  render() {

    return (
      <div>
        <h4>{this.props.item.item + ' $' + this.props.item.price}</h4>
        <h5>{this.props.item.description}</h5>
        {!this.props.editing ? <button onClick={this.addItemToOrder(this.props.item)}> Add to Order</button> : 
        <button onClick={this.removeItemFromOrder(this.props.item)}>Remove</button>}
      </div>
    );
  }
}

const mapReduxToProps = state => ({state});

export default connect(mapReduxToProps)(MenuItem);
