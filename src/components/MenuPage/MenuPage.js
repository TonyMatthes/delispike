import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      <div>
        {this.props.state.menu.map(item => (
          <div>
            <MenuItem key={item.id} item={item} />
            <button onClick={this.addItemToOrder(item)}> Add to Order</button>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(MenuSelect);
