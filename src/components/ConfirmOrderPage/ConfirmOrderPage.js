import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        <h5>Subtotal: ${this.props.state.order.orderItems.orders.map(item => (Number(item.price))
        ).reduce((accumulator, currentValue) => accumulator + currentValue
        ).toFixed(2)}</h5>
        <h5>Tax: {((this.props.state.order.orderItems.orders.map(item => (Number(item.price))
        ).reduce((accumulator, currentValue) => accumulator + currentValue
        ).toFixed(2)) * .08025).toFixed(2)}</h5>
        <br />
        <h3>Total {((this.props.state.order.orderItems.orders.map(item => (Number(item.price))
        ).reduce((accumulator, currentValue) => accumulator + currentValue
        ).toFixed(2)) * 1.08025).toFixed(2)}</h3>
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