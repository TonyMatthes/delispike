import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import AdminPage from '../AdminPage/AdminPage'
import OrderViewer from '../AdminPage/OrderViewer'
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import MenuPage from '../MenuPage/MenuPage';
import CurrentOrderPage from '../CurrentOrder/CurrentOrder';
import ConfirmOrderPage from '../ConfirmOrderPage/ConfirmOrderPage'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            {this.props.user.is_admin &&(
            <ProtectedRoute
              exact
              path="/admin"
              component={AdminPage}
            />
            )}
            {this.props.user.is_admin &&(
            <ProtectedRoute
              exact
              path="/orderviewer"
              component={OrderViewer}
            />
            )}
            <Route
              exact
              path="/menu"
              component={MenuPage}
            />
            {/* The current order page will only be available if there are items in the order, if all items are
            removed, then the user will be redirected to the menu page */}
            {this.props.order.orderItems.orders.length >= 1 ?
              <ProtectedRoute
                exact
                path="/currentorder"
                component={CurrentOrderPage}
              /> : <Redirect exact from="/currentorder" to="/menu" />}
            <ProtectedRoute
              exact
              path="/confirm"
              component={ConfirmOrderPage}
            /> : <Redirect exact from="/confirm" to="/menu" />}
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

const mapReduxStateToProps = ({ order, user }) => ({ order, user })

export default connect(mapReduxStateToProps)(App);
