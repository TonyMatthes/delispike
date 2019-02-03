import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '../MenuItem/MenuItem';
import { Link } from 'react-router-dom';
class CurrentOrder extends Component {

  state = {}
  
  removeItemFromOrder = (item) => () => {
    this.props.dispatch({ type: 'REMOVE_ORDER_ITEM', payload: item })
  }

  render() {
    return (
      <div>
        {/* <pre>{JSON.stringify(this.state.order, null, 2)}</pre> */}
        {this.props.state.order.orderItems.orders.map(item => (
          <div>
            <MenuItem item={item} buttonAction={this.removeItemFromOrder} buttonText="Remove"/>
          </div>
        ))}

        <button><Link to="/confirm">Confirm Order</Link></button>

      </div>

    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(CurrentOrder);
