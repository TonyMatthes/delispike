import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
class OrderViewer extends Component {

  state = {}



  render() {
    return (
      <div>
        <h2>this is the admin page</h2>
        <table>
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
              <tr key={order.id}>
                <td>{order.customer_id}</td>
                <td>{order.time_ordered}</td>
                <td>{order.order_items}</td>
                <td>{order.notes}</td>
                <td>
                  {order.time_fulfilled ? order.time_fulfilled :
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
