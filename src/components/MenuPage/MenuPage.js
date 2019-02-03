import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '../MenuItem/MenuItem';
import Grid from '@material-ui/core/Grid'

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
      <Grid container
        spacing={32}
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        {this.props.state.menu.map(item => (
          <Grid item key={item.id}>
            <MenuItem item={item} buttonAction={this.addItemToOrder} buttonText="Add to Order"/>
          </Grid>
        ))}
      </Grid>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(MenuSelect);
