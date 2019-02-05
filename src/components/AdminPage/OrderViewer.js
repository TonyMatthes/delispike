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

  state = {}



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
            {this.props.orders ? this.props.orders.map((order) =>
              <TableRow key={order.id}>
                <TableCell>{order.first_name} {order.last_name}</TableCell>
                <TableCell>{moment(order.time_ordered).format('MMMM Do YYYY, h:mm a')}</TableCell>
                <TableCell>{order.order_items.map((thing, index) => <p key={index}>{this.props.state.menu.filter(entree=> entree.id === thing)[0].item}, </p>)}</TableCell>
                <TableCell>{order.notes}</TableCell>
                <TableCell>
                  {order.time_fulfilled ? moment(order.time_fulfilled).format('MMMM Do YYYY, h:mm a') :
                    <Button color="secondary" onClick={()=>this.props.dispatch({type:'EDIT_ORDER', payload: order.id})}>mark order as complete</Button>}
                </TableCell>
              </TableRow>) :
              <tr></tr>
            }
          </TableBody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(OrderViewer);
