import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '../MenuItem/MenuItem';
import { Link } from 'react-router-dom';
class CurrentOrder extends Component {

  state = {}

  render() {
    return (
      <div>
        {/* <pre>{JSON.stringify(this.state.order, null, 2)}</pre> */}
        {this.props.state.order.orderItems.orders.map(item => (
          <MenuItem key={item.orderSpecificId} editing={true} item={item} />
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
