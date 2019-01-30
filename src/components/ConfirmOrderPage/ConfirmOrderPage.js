import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentOrder extends Component {

  state = {}

  render() {
    return (
      <div>
        {/* <pre>{JSON.stringify(this.state.order, null, 2)}</pre> */}
        {this.props.state.order.orderItems.orders.map(item => (
          <MenuItem key={item.itemSpecificId} editing={true} item={item} />
        ))}
        <button>Confirm Order</button>
      </div>
      
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(CurrentOrder);