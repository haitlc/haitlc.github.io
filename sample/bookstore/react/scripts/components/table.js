import React from 'react';
import ImageGrid from './imageGrid';
import DetailGrid from './detailGrid';
import NewInputsContainer from '../containers/newInputsContainer';
import EditFormContainer from '../containers/editFormContainer';
import '../../styles/table.css';
import { Nav, NavItem, NavDropdown, MenuItem, Tabs, Tab, TabContainer, 
    Clearfix, Jumbotron, Button} from 'react-bootstrap';


class TableAll extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.loadJSON()
    }

    componentWillUnmount(){
        this.props.closeConnection()
    }

    handleSelect(key) {
        this.props.handleSelectTabInCon(key)
    }

    updateRec(event){
        this.props.updateRecInCon(event)
    }    

    render() {
        var counter=0;
        return (
		<div className="mainTab">       
            <Tabs bsStyle={'tabs'} activeKey={this.props.tabActiveKey} onSelect={this.handleSelect.bind(this)} id="controlled-tab-example" >
              <Tab eventKey={1} title="Data Table">  
                  <div className="mainTab">
                    <DetailGrid bookContent={this.props.books} updateRecInTableAll={this.updateRec.bind(this)}/>       
                  </div>                
              </Tab>
              <Tab eventKey={2} title="Data Grid">                
                <div className="mainTab">
                  <ImageGrid bookContent={this.props.books} /> 
                </div>                
              </Tab>
              <Tab eventKey={3} title="Edit Form">
                <div className="mainTab">  
                    <EditFormContainer closeModal={() => {}}/>       
                </div>              
              </Tab>              
              <Tab eventKey={4} title="New Inputs">
                <div className="mainTab">
                    <NewInputsContainer closeModal={() => {}}/>            
                </div>              
              </Tab>
            </Tabs>                                      
		</div>
        );
    }
}

export default TableAll