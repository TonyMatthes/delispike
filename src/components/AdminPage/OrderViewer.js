import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
// import { Link } from 'react-router-dom';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button
}
from '@material-ui/core'
import MenuItem from '../MenuItem/MenuItem'
class OrderViewer extends Component {

componentDidMount(){
  this.props.dispatch({ type: 'FETCH_ORDERS'})
  this.props.dispatch({ type: 'FETCH_ITEMS'})
}


  render() {
    return (
      <div>
        <h2>this is the admin page</h2>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>order for:</TableCell>
              <TableCell>time ordered:</TableCell>
              <TableCell>items:</TableCell>
              <TableCell>notes:</TableCell>
              <TableCell>time fulfilled:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.order ? this.props.order.orderViewer.map((order) =>
              <TableRow key={order.id}>
                <TableCell>{order.first_name} {order.last_name}</TableCell>
                <TableCell>{moment(order.time_ordered).format('MMMM Do YYYY, h:mm a')}</TableCell>
                <TableCell>{order.order_items.map((thing, index) => <p key={index}>{this.props.menu.filter(entree=> entree.id === thing)[0].item}, </p>)}</TableCell>
                <TableCell>{order.notes}</TableCell>
                <TableCell>
                  {order.time_fulfilled ? moment(order.time_fulfilled).format('MMMM Do YYYY, h:mm a') :
                    <Button color="secondary" onClick={()=>this.props.dispatch({type:'EDIT_ORDER', payload: order.id})}>mark order as complete</Button>}
                </TableCell>
              </TableRow>) :
              <p>no orders given to this component</p>
            }
          </TableBody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = ({order, menu}) => ({order, menu})

export default connect(mapStateToProps)(OrderViewer);
