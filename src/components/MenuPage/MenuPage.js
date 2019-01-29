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

  addToOrder = (item) => () => {
    this.setState({
      order: [...this.state.order, item]
    })
  }

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.order, null, 2)}</pre>
        {this.props.state.menu.map(item => (
          <MenuItem key={item.id} addToOrder={this.addToOrder} item={item} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(MenuSelect);
