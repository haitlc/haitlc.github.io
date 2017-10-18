import React from 'react'
import * as  reactRedux from 'react-redux'
import Form from '../components/form'
import * as action from '../actions/index'


const mapStateToProps = (state) => {    
  return{
      newBook: state.editingBook,
      formattedValue: state.formattedValue
  }
}

const mapDispatchToProps =(dispatch) => {
    return {
        handleSubmitInConnect:          ()          => { dispatch(action.ediFormUpdateInAction()) },
        handleInputChangeInConnect:     (target)    => { dispatch(action.inputUpdateInAction(target, "editingBook"))},
        handleDateChangeInConnect:      (date, formattedValue) => { dispatch(action.dateUpdateInAction(date, formattedValue, "editingBook")) }, 
        handleChkboxChangeInConnect:    (target)    => { dispatch(action.chkbxUpdateInAction(target, "editingBook")) },   
        getBookInConnect:               ()          => { dispatch(action.fetchPosts())}
    }
}

const EditFormAction = reactRedux.connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

export default EditFormAction