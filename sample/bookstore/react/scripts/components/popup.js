import React from 'react';
import SkyLight from 'react-skylight';
// import FormAction from '../containers/formAction';


class Popup extends React.Component {
  constructor(props){
    super(props);
    this.closeModalHandler = this.closeModalHandler.bind(this)
  }

  closeModalHandler(){
      this.refs.simpleDialog.hide()
  }  

  render() {
    var buttonStyle = {
        "textAlign": "center"
    }    
    return (
      <div>
        <section style={buttonStyle}>
          <button onClick={() => this.refs.simpleDialog.show()}>add new record</button>
        </section>
        <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Update Form">
          {/* <FormAction closeModal={this.closeModalHandler}/> */}
        </SkyLight>
      </div>
    )
  }
}


export default Popup;