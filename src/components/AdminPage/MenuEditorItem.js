import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    return (
      <div>
        {!this.state.editing ?
          <div>
            <MenuItem key={this.props.item.id} item={this.props.item} />
            <button onClick={() => this.setState({ editing: true })}>Edit</button>
          </div> :
          <form>
            <label htmlFor="name">name:</label>
            <input name="name" value={this.state.newContent.item} onChange={this.handleChangeFor('item')} />
            <br/>
            <label htmlFor="description">description:</label>
            <textarea name="description" value={this.state.newContent.description} onChange={this.handleChangeFor('description')} />
            <br/>
            <label htmlFor="price">price:</label>
            <input name="price" value={this.state.newContent.price} onChange={this.handleChangeFor('price')} />
            {this.props.editing && (<><button onClick={() => this.setState({ editing: false })}>Cancel Editing</button>
              <button onClick={this.handleDelete}>Delete</button></>)
            }
            <button onClick={this.handleSubmit}>Submit</button>
          </form>}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(MenuEditorItem);