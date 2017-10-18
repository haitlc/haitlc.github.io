import React from 'react';
import ImageGrid from './imageGrid';
import DetailGrid from './detailGrid';
import FormAction from '../containers/formAction';
import EditFormAction from '../containers/editFormAction';
import '../../styles/table.css';
import { Nav, NavItem, NavDropdown, MenuItem, Tabs, Tab, TabContainer, Grid, Row, Col, Clearfix, Jumbotron, Button} from 'react-bootstrap';


class TableAll extends React.Component{
    constructor(props){
        super(props);
        this.handleSelect = this.handleSelect.bind(this)
        this.updateRec = this.updateRec.bind(this)
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
            <Tabs bsStyle={'tabs'} activeKey={this.props.tabActiveKey} onSelect={this.handleSelect} id="controlled-tab-example" >
              <Tab eventKey={1} title="Data Table">  
                  <div className="mainTab">
                    <DetailGrid bookContent={this.props.books} updateRecInTableAll={this.updateRec}/>       
                  </div>                
              </Tab>
              <Tab eventKey={2} title="Data Grid">                
                <div className="mainTab">
                  <ImageGrid bookContent={this.props.books} /> 
                </div>                
              </Tab>
              <Tab eventKey={3} title="Edit Form">
                <Grid className="mainTab">
                  <Row className="show-grid">
                    <Col sm={6} md={3}>
                    <EditFormAction closeModal={() => {}}/>       
                    </Col>
                  </Row>              
                </Grid>              
              </Tab>              
              <Tab eventKey={4} title="New Inputs">
                <Grid className="mainTab">
                  <Row className="show-grid">
                    <Col sm={6} md={3}>
                    <FormAction closeModal={() => {}}/>
                    </Col>
                  </Row>              
                </Grid>              
                {/*<Popup inputUpdate={this.inputAddNewState}/>*/}
              </Tab>
            </Tabs>                                      
		</div>
        );
    }
}

export default TableAll