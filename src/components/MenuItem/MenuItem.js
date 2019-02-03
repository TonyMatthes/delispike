import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
}
  from '@material-ui/core'


class MenuItem extends Component {


  render() {
    const styles = {
      card: {
        width: '15vw'
      },
      media: {
        height: '300px',
        width: '100%'
      },
    };
    return (
      !this.props.editing ?
        <Card style={styles.card}>
          <CardContent>
            <h4>{this.props.item.item + ' $' + this.props.item.price}</h4>
            <h5>{this.props.item.description}</h5>
          </CardContent>
          <CardActions>
            <Button onClick={this.props.buttonAction(this.props.item)}>{this.props.buttonText}</Button>
          </CardActions>
        </Card> :
        <Card style={styles.card}>
          <CardContent>
            <form>
              <label htmlFor="name">name:</label>
              <input name="name" value={this.state.newContent.item} onChange={this.handleChangeFor('item')} />
              <br />
              <label htmlFor="description">description:</label>
              <textarea name="description" value={this.state.newContent.description} onChange={this.handleChangeFor('description')} />
              <br />
              <label htmlFor="price">price:</label>
              <input name="price" value={this.state.newContent.price} onChange={this.handleChangeFor('price')} />
              {this.props.editing && (<><button onClick={() => this.setState({ editing: false })}>Cancel Editing</button>
                <button onClick={this.handleDelete}>Delete</button></>)
              }
              <button onClick={this.handleSubmit}>Submit</button>
            </form>
          </CardContent>
          {/* <CardActions>
            <Button onClick={this.props.buttonAction(this.props.item)}>{this.props.buttonText}</Button>
          </CardActions> */}
        </Card>
    );
  }
}

export default MenuItem;
