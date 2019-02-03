import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
// import { Link } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem'
class OrderViewer extends Component {

  state = {}



  render() {
    return (
      <div>
        <h2>this is the admin page</h2>
        <table style={{border: '1px solid black'}}>
          <thead>
            <tr>
              <th>order for:</th>
              <th>time ordered:</th>
              <th>items:</th>
              <th>notes:</th>
              <th>time fulfilled:</th>
            </tr>
          </thead>
          <tbody>
            {this.props.orders ? this.props.orders.map((order) =>
              <tr style={{border: '1px solid black'}} key={order.id}>
                <td style={{border: '1px solid black'}}>{order.first_name} {order.last_name}</td>
                <td style={{border: '1px solid black'}}>{moment(order.time_ordered).format('MMMM Do YYYY, h:mm a')}</td>
                <td style={{border: '1px solid black'}}>{order.order_items.map(thing => <p>{this.props.state.menu.filter(entree=> entree.id === thing)[0].item}, </p>)}</td>
                <td style={{border: '1px solid black'}}>{order.notes}</td>
                <td style={{border: '1px solid black'}}>
                  {order.time_fulfilled ? moment(order.time_fulfilled).format('MMMM Do YYYY, h:mm a') :
                    <button onClick={()=>this.props.dispatch({type:'EDIT_ORDER', payload: order.id})}>mark order as complete</button>}
                </td>
              </tr>) :
              <tr></tr>
            }
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(OrderViewer);
