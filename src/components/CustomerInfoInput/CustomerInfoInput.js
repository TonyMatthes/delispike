import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerInfoInput extends Component {

  state = {
    newCustomer:{
        firstName: '',
        lastName: '',
        phoneNumberPrimary: '',
        phoneNumberSecondary: '',
        addressNumber: '',
        unitNumber: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        email: ''
    }
  }

  handleChangeFor = (input) => event => {
    this.setState({
      newCustomer: {
        ...this.state.newCustomer,
        [input]: event.target.value,
      }
    })
  }

  handleSubmit = (event) =>{
      event.preventDefault();
      console.log (this.state.newCustomer)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="first name" value={this.state.newCustomer.firstName} onChange={this.handleChangeFor('firstName')}/>
        <br />
        <input placeholder="last name" value={this.state.newCustomer.lastName} onChange={this.handleChangeFor('lastName')}/>
        <br />
        <input placeholder="primary phone Number" value={this.state.newCustomer.phoneNumberPrimary} onChange={this.handleChangeFor('phoneNumberPrimary')}/>
        <br />
        <input placeholder="secondary phone Number" value={this.state.newCustomer.phoneNumberSecondary} onChange={this.handleChangeFor('phoneNumberSecondary')}/>
        <br />
        <input placeholder="address number" value={this.state.newCustomer.addressNumber} onChange={this.handleChangeFor('addressNumber')}/>
        <br />
        <input placeholder="unit number" value={this.state.newCustomer.unitNumber} onChange={this.handleChangeFor('unitNumber')}/>
        <br />
        <input placeholder="street" value={this.state.newCustomer.street} onChange={this.handleChangeFor('street')}/>
        <br />
        <input placeholder="city" value={this.state.newCustomer.city} onChange={this.handleChangeFor('city')}/>
        <br/>
        <input placeholder="state" value={this.state.newCustomer.state} onChange={this.handleChangeFor('state')}/>
        <br />
        <input placeholder="zip code" value={this.state.newCustomer.zipCode} onChange={this.handleChangeFor('zipCode')}/>
        <br />
        <input placeholder="email adress" value={this.state.newCustomer.email} onChange={this.handleChangeFor('email')}/>
        <br />
        <input type="submit"/>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(CustomerInfoInput);
