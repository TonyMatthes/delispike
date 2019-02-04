import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  List,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormGroup,
  TextField,
  Button,
} from '@material-ui/core'

import MenuItem from '../MenuItem/MenuItem';

class MenuEditor extends Component {

  state = {
    editorOpen: false,
    contentToEdit: {
      item: '',
      description: '',
      price: '',
      id: '',
      category: 1,
      //category hard coded for now
    },
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
    this.props.dispatch({ type: 'FETCH_ITEMS' })
  }

  handleClickOpen = (item) => () => {
    this.setState({ editorOpen: true, contentToEdit: item });
  };

  handleClose = () => {
    this.setState({ editorOpen: false });
  };

  handleChangeFor = (input, type) => event => {
    this.setState({
      ...this.state,
      [type]: {
        ...this.state[type],
        [input]: event.target.value,
      }
    })
  }

  handleSubmit = (type) => (event) => {
    event.preventDefault()
    if (type === 'edit') {
      this.props.dispatch({ type: 'EDIT_ITEM', payload: this.state.contentToEdit })
      this.setState({
        ...this.state,
        editorOpen: false,
        contentToEdit: {
          item: '',
          description: '',
          price: '',
          id: '',
          category: 1,
          //category hard coded for now
        }
      })
    } else if (type === 'add') {
      this.props.dispatch({ type: 'ADD_ITEM', payload: this.state.newContent })
      this.setState({
        ...this.state,
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
    this.props.dispatch({ type: 'DELETE_ITEM', payload: this.state.contentToEdit.id })
    this.handleClose()
  }

  render() {
    return (

      <>
      <form>
        <FormGroup>
          <TextField
            label="Name"
            type="text"
            value={this.state.newContent.item}
            onChange={this.handleChangeFor('item', 'newContent')} />
          <TextField
            label="Description"
            multiline
            rowsMax="4"
            value={this.state.newContent.description}
            onChange={this.handleChangeFor('description', 'newContent')} />
          <TextField
            label="Price"
            type="number"
            value={this.state.newContent.price}
            onChange={this.handleChangeFor('price', 'newContent')} />
          <Button type="submit" onClick={this.handleSubmit('add')}>Submit</Button>
        </FormGroup>
        </form>
        <Dialog
          open={this.state.editorOpen}
          onClose={this.handleClose}
        >
          <DialogContent>
            <DialogContentText>
              Edit this item
        </DialogContentText>
            <FormGroup>
              <TextField
                label="Name"
                type="text"
                value={this.state.contentToEdit.item}
                onChange={this.handleChangeFor('item', 'contentToEdit')} />
              <TextField
                label="Description"
                multiline
                rowsMax="4"
                value={this.state.contentToEdit.description}
                onChange={this.handleChangeFor('description', 'contentToEdit')} />
              <TextField
                label="Price"
                type="number"
                value={this.state.contentToEdit.price}
                onChange={this.handleChangeFor('price', 'contentToEdit')} />
            </FormGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel Editing</Button>
            <Button onClick={this.handleDelete}>Delete</Button>
            <Button onClick={this.handleSubmit('edit')}>Submit</Button>
          </DialogActions>

        </Dialog>
        <List>
          {this.props.state.menu.map(item => (
            <MenuItem key={item.id} icon='Edit' iconAction={this.handleClickOpen(item)} item={item} />
          ))}
        </List>
      </>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(MenuEditor);