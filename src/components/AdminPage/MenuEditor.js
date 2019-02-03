import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Grid} from '@material-ui/core'
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
        <Grid container
        spacing={32}
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        {this.props.state.menu.map(item => (
            <Grid key={item.id} item>
            <MenuEditorItem editing={true}  item={item} />
            </Grid>
        ))}
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(MenuEditor);