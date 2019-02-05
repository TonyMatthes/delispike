import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button'

class NavButton extends Component {

    handleClick = () => {
        this.props.history.push(this.props.path)
    }

    render() {
        return (
            !this.props.icon?
            <Button color={this.props.color} onClick={this.handleClick}>{this.props.name}</Button>:
            <Button color={this.props.color} onClick={this.handleClick}>{this.props.icon} {this.props.name}</Button>
        );
    }
}

export default withRouter(NavButton);