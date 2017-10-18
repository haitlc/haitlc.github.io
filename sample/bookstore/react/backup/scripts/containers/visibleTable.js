import React from 'react';
import { connect } from 'react-redux'
import Table from '../components/table'
import * as action from '../actions/index'


const mapStateToProps = (state) => {
console.log(state)
  return{
      books: state.books,
      tabActiveKey: state.tabActiveKey
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadJSON:               ()      => {dispatch(action.fetchPosts())},
        closeConnection:        ()      => {dispatch(action.closeConnectionInAction())},
        updateRecInCon:         (target)=> {dispatch(action.updateRecInAction(target))},
        handleSelectTabInCon:   (key)   => {dispatch(action.handleSelectTabInAction(key))}  
    }
}

const VisibleTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);


export default VisibleTable;