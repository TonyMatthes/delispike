import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardContent,
  CardActions,
  Button,
}
  from '@material-ui/core'
import MenuItem from '../MenuItem/MenuItem'
class MenuEditorItem extends Component {

  state = {
    editing: true,
    newContent: {
      item: '',
      description: '',
      price: '',
      id: '',
      category: 1,
      //category hard coded for now
    }
  }

  componentDidMount() {
    if (this.props.editing) {
      this.setState({
        editing: false,
        newContent: {
          item: this.props.item.item,
          description: this.props.item.description,
          price: this.props.item.price,
          id: this.props.item.id,
          category: this.props.item.category,
        }
      })
    }
  }

  handleChangeFor = (input) => event => {
    this.setState({
      newContent: {
        ...this.state.newContent,
        [input]: event.target.value,
      }
    })
  }

  enableEditing = () => () => this.setState({ editing: true })

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.props.editing) {
      this.props.dispatch({ type: 'EDIT_ITEM', payload: this.state.newContent })
      this.setState({ editing: false })
    }
    else {
      this.props.dispatch({ type: 'ADD_ITEM', payload: this.state.newContent })
      this.setState({
        editing: true,
        newContent: {
          item: '',
          description: '',
          price: '',
          id: '',
          category: 1,
          //category hard coded for now
        }
      })
    }
  }

  handleDelete = (event) => {
    event.preventDefault()
    this.props.dispatch({ type: 'DELETE_ITEM', payload: this.state.newContent.id })
  }


  render() {
    const styles = {
      card: {
        width: '24vw'
      },
      media: {
        height: '300px',
        width: '100%'
      },
    };
    return (
      <div>
        {!this.state.editing ?
          <MenuItem buttonAction={this.enableEditing} buttonText="edit" item={this.props.item} />
          :
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

              </form>
            </CardContent>
            <CardActions>
              <Button onClick={this.handleSubmit}>Submit</Button>
            {this.props.editing && (<><Button onClick={() => this.setState({ editing: false })}>Cancel</Button>
                  <Button onClick={this.handleDelete}>Delete</Button></>)
                }
                
          </CardActions>
          </Card>}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(MenuEditorItem);