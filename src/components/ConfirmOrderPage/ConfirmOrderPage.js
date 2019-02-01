import React, { Component } from 'react';
import { connect } from 'react-redux';
import subtotalCalulator from '../SubtotalBar/subtotalCalculator'

class CurrentOrder extends Component {

  state = {
    notes: '',
  }

  handleChangeFor = (input) => event => {
    this.setState({
      [input]: event.target.value,
    })
  }

  render() {
    return (
      <div>
        {/* <pre>{JSON.stringify(this.state.order, null, 2)}</pre> */}
        {this.props.state.order.orderItems.orders.map(item => (
          <h4>{item.item} --- ${item.price}</h4>
        ))}
        <h5>Subtotal: ${subtotalCalulator(this.props.state.order.orderItems.orders)}</h5>
        <h5>Tax: {(subtotalCalulator(this.props.state.order.orderItems.orders) * .08025).toFixed(2)}</h5>
        <br />
        <h3>Total {(subtotalCalulator(this.props.state.order.orderItems.orders) * 1.08025).toFixed(2)}</h3>
        <br />
        <label htmlFor="notes">Any notes for us?: </label>
        <textarea name="notes" value={this.state.notes} onChange={this.handleChangeFor('notes')} />
        <button onClick={() => this.props.dispatch(
          {
            type: 'ADD_ORDER',
            payload: {
              notes: this.state.notes,
              orderItems: this.props.state.order.orderItems.orders.map(item => item.id)
            }
          }
        )
        }
        >submit order</button>
      </div>

    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(CurrentOrder);