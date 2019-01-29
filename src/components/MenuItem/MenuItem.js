import React, { Component } from 'react';
import { connect } from 'react-redux';

class MenuItem extends Component {


  removeItemButton = () => {
    if (this.state.count === 0) {
      return null;
    } else {
      return (
        <button>Remove</button>
      )
    }
  }

  // handleAdd = () => {
  //     this.props.dispatch({ type: 'ADD_PIZZA', payload: this.props.pizza });
  //     this.setState({
  //         count: this.state.count + 1,
  //     });
  // }

  // handleSubtract = () => {
  //     let id = this.props.pizzas.find( item => this.props.pizza.name === item.name).id;
  //     this.props.dispatch( {type: 'REMOVE_PIZZA', payload: id});
  //     this.setState({
  //         count: this.state.count - 1,
  //     })
  // }
  addItemToOrder = (item) => () => {
    this.props.dispatch({ type: 'ADD_ORDER_ITEM', payload: item })
  }

  render() {

    return (
      <div>
        <h4>{this.props.item.item + ' $' + this.props.item.price}</h4>
        <h5>{this.props.item.description}</h5>
        <button onClick={this.props.addToOrder(this.props.item)} aria-label="Add"> Add to Order
        </button>
      </div>
    );
  }
}

const mapReduxToProps = state => ({ pizzas: state.pizzas });

export default connect(mapReduxToProps)(MenuItem);
