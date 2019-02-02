import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuEditorItem from './MenuEditorItem';

class MenuEditor extends Component {

  state = {
    order: [],
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ITEMS' })
  }


  render() {
    return (
      <div>
        <MenuEditorItem />
        {this.props.state.menu.map(item => (
          <div>
            
            <MenuEditorItem editing={true} key={item.id} item={item} />
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(MenuEditor);