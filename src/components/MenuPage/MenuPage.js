import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  List,
  Tabs,
  Tab,
}
  from '@material-ui/core'
import MenuItem from '../MenuItem/MenuItem';

class MenuSelect extends Component {

  state = {
    value: 1,
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ITEMS' })
  }

  addItemToOrder = (item) => () => {
    this.props.dispatch({ type: 'ADD_ORDER_ITEM', payload: { ...item, orderSpecificId: this.props.state.order.orderItems.key } })
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const TabContainer = (props) => {
      return (
        <>
        {props.children}
        <List>
          {props.menu.filter(item => item.category === this.state.value).map(item => (
            <MenuItem key={item.id} icon='AddCircle' iconAction={this.addItemToOrder(item)} item={item} />
          ))}
        </List>
        </>)
    }
    return (
      <>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto">
          <Tab label="Sandwiches" value={1} />
          <Tab label="Pasta" value={2} />
          <Tab label="Soups &amp; Salads" value={3} />
          <Tab label="Pizza" value={4} />
          <Tab label="Sides" value={5} />
          <Tab label="Desserts" value={6} />
        </Tabs>
        {this.state.value === 1 && <TabContainer menu={this.props.state.menu}></TabContainer>}
        {this.state.value === 2 && <TabContainer menu={this.props.state.menu}></TabContainer>}
        {this.state.value === 3 && <TabContainer menu={this.props.state.menu}></TabContainer>}
        {this.state.value === 4 && <TabContainer menu={this.props.state.menu}><p>Pizza Customizer yet to be made</p></TabContainer>}
        {this.state.value === 5 && <TabContainer menu={this.props.state.menu}></TabContainer>}
        {this.state.value === 6 && <TabContainer menu={this.props.state.menu}></TabContainer>}

      </>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(MenuSelect);
