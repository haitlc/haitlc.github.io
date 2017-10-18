import React from 'react'
import { connect } from 'react-redux'
import Form from '../components/form'
import * as action from '../actions/index'


const mapStateToProps = (state) => {
  return{
      newBook: state.newBook,
      formattedValue: state.formattedValue
  }
}

const mapDispatchToProps =(dispatch) => {
    return {
        handleSubmitInConnect:          ()          => { dispatch(action.submitUpdateInAction()) },
        handleInputChangeInConnect:     (target)    => { dispatch(action.inputUpdateInAction(target, "newBook"))},
        handleDateChangeInConnect:      (date, formattedValue) => { dispatch(action.dateUpdateInAction(date, formattedValue, "newBook")) }, 
        handleChkboxChangeInConnect:    (target)    => { dispatch(action.chkbxUpdateInAction(target, "newBook")) },   
        getBookInConnect:               ()          => { dispatch(action.fetchPosts())}
    }
}

const VisibleForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

export default VisibleForm