import React from 'react'
import $ from 'jquery';
import DatePicker from 'react-bootstrap-date-picker';
import '../../styles/index.css'
import {Button, Modal, OverlayTrigger, FormGroup, Radio, Checkbox, FormControl, ControlLabel} from 'react-bootstrap';

class Form extends React.Component{
  constructor(props){
    super(props); 
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleInputChange = this.handleInputChange.bind(this)
      this.handleDateChange = this.handleDateChange.bind(this)
      this.handleChkboxChange = this.handleChkboxChange.bind(this)
      this.checkRadioChecked = this.checkRadioChecked.bind(this)
      //this.getBook = this.getBook.bind(this)
  }

  componentWillReceiveProps(){
    
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.handleSubmitInConnect()
    this.props.closeModal()
  }

  handleDateChange(date, formattedValue) {    
    this.props.handleDateChangeInConnect(date, formattedValue)
  }  

  handleInputChange(event) { 
    this.props.handleInputChangeInConnect(event.target)
  }  

  handleChkboxChange(event){
    this.props.handleChkboxChangeInConnect(event.target)
  }

  checkRadioChecked(){
    
  }

  // getBook(event){
  //   event.preventDefault()
  //   this.props.getBookInConnect()
  //   this.props.closeModal()
  // }

  render(){
    //console.log(this.props.newBook)
    return(
        <div>
          <form className="myForm" action="">
                      <ControlLabel>Title:</ControlLabel>
                      <FormControl
                        name="title"
                        type="text"
                        value={this.props.newBook.title}
                        placeholder="Enter text"
                        onChange={this.handleInputChange}
                      />                      
                      {/*<input type='text' name='title' value={this.state.newbook.title} onChange={this.handleInputChange}/>*/}
                      <ControlLabel>Author:</ControlLabel>
                      {/*<input type='text' name='author' value={this.state.newbook.author} onChange={this.handleInputChange}/>*/}
                      <FormControl
                        name="author"
                        type="text"
                        value={this.props.newBook.author}
                        placeholder="Enter text"
                        onChange={this.handleInputChange}
                      />                        
                      <ControlLabel>Rating:</ControlLabel>
                      <FormControl
                        name="rating"
                        type="text"
                        value={this.props.newBook.rating}
                        placeholder="Enter text"
                        onChange={this.handleInputChange}
                      />                         
                      <ControlLabel>Cover:</ControlLabel>
                      <FormControl
                        name="cover"
                        componentClass="textarea"
                        value={this.props.newBook.cover}
                        placeholder="Enter text"
                        onChange={this.handleInputChange}
                      />    
                      <ControlLabel>Date:</ControlLabel>
                      <DatePicker
                        name="date"
                        id="example-datepicker"  
                        dateFormat='YYYY-MM-DD' 
                        name1='date'
                        value={this.props.newBook.date} 
                        onChange={this.handleDateChange} />
                      <br/>   
                      <FormGroup controlId="formControlsSelect" onChange={this.handleInputChange}>
                        <ControlLabel>Drop down:</ControlLabel>
                        <FormControl name='dropDown' componentClass="select" placeholder="select">
                          <option value="select">Select</option>
                          <option value="other">Other</option>
                          <option value="other1">Other1</option>
                          <option value="other2">Other2</option>
                        </FormControl>
                      </FormGroup>                      
                      <ControlLabel>Radio:</ControlLabel>
                        <FormGroup onChange={this.handleInputChange}>
                          <Radio name="radio" value="A" checked={this.props.newBook.radio === "A"} inline>
                            A
                          </Radio>
                          {' '}
                          <Radio name="radio" value="B" checked={this.props.newBook.radio === "B"} inline>
                            B
                          </Radio>
                          {' '}
                          <Radio name="radio" value="C" checked={this.props.newBook.radio === "C"} inline>
                            C
                          </Radio>
                        </FormGroup>                      

                      <ControlLabel>Checkbox:</ControlLabel>
                        <FormGroup onChange={this.handleChkboxChange}>
                        
                          <Checkbox name="checkbox1" checked={this.props.newBook.checkbox1} inline>
                            1
                          </Checkbox>
                          {' '}
                          <Checkbox name="checkbox2" checked={this.props.newBook.checkbox2} inline>
                            2
                          </Checkbox>
                          {' '}
                          <Checkbox name="checkbox3" checked={this.props.newBook.checkbox3} inline>
                            3
                          </Checkbox>                               
                        </FormGroup>          
            {/*<Button onClick={this.getBook} >1232131231</Button>*/}
            <Button onClick={this.handleSubmit} bsStyle="primary">Save</Button>
              {/*id:<br/>
            <input type="text" name="id" value={this.props.newBook.id} onChange={this.handleInputChange}/>
            <br/>
            title:<br/> 
            <input type="text" name="title" value={this.props.newBook.title} onChange={this.handleInputChange}/>
            <br/>
            author:<br/>
            <input type="text" name="author" value={this.props.newBook.author} onChange={this.handleInputChange}/>
            <br/> 
            rating:<br/>
            <input type="text" name="rating" value={this.props.newBook.rating} onChange={this.handleInputChange}/>
            <br/>
            cover:<br/>
            <input type="text" name="cover" value={this.props.newBook.cover} onChange={this.handleInputChange}/>
            <br/>
            Date:<br/>
            <DatePicker 
              id="example-datepicker" 
              dateFormat="YYYY-MM-DD" 
              value={this.props.newBook.date} 
              onChange={this.handleDateChange} />
            <br/>*/}        
        </form>
      </div>
    )
  }

}

export default Form

// const mapStateToProps = (state) => {
//   return{
//       newBook: state.newBook,
//       formattedValue: state.formattedValue
//   }
// }

// const mapDispatchToProps =(dispatch) => {
//     return {
//         handleSubmitInConnect: ()=> { dispatch(submitUpdateInAction()) },
//         // handleSubmitInConnect: ()=> {
//         //     dispatch({
//         //         type:"booksUpdate"
//         //     })
//         // },
//         handleInputChangeInConnect: (target) => { dispatch(inputUpdateInAction(target))},
//         // handleInputChangeInConnect: (target) => {
//         //     console.log("this.props.newBook")
//         //     dispatch({
//         //         type: "inputUpdate",
//         //         value: target.value,
//         //         name: target.name
//         //     })    
//         // },
//         //action??????
//         handleDateChangeInConnect: (date, formattedValue) => { dispatch(dateUpdateInAction(date, formattedValue)) }  
//         // handleDateChangeInConnect: (date, formattedValue) => {
//         //     dispatch({
//         //         type: "dateUpdate",
//         //         date: date,
//         //         formattedValue: formattedValue
//         //     })            
//         // }
//     }
// }

// const VisibleForm = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Form);

// export default VisibleForm