import React from 'react';
import {Table, striped, bordered, condensed, hover, responsive, Button} from 'react-bootstrap';


class TableRow extends React.Component{
    constructor(props){
        super(props);
    }    

    updateRec(event){
        this.props.updateRecInDetailGrid(event) //it is now getting button 
    }

    convertDateFormat(dateString){
        var monthNames   = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];        
        var parsedDate   = new Date(dateString);
        var outputString = parsedDate.getDate()+"-"+monthNames[parsedDate.getMonth()]+"-"+parsedDate.getFullYear();
        return outputString;
    }

    render() {
        var rows = [];
        var counter = 0
        this.props.bookContent.forEach((listValue) => {
            rows.push(                
                <tr onDoubleClick={this.updateRec.bind(this)} id={counter} key={counter}>
                    <td id={counter}>{listValue.id}</td>
                    <td id={counter}>{listValue.title}</td>
                    <td id={counter}>{listValue.author}</td>
                    <td id={counter}>{listValue.rating}/100</td>
                    <td id={counter++}>{this.convertDateFormat(listValue.date)}</td>
                    {/* <td> <Button onClick={this.updateRec.bind(this)} id={counter++} bsStyle="primary">Update</Button></td> */}
                </tr>)
        })
		return(
            <tbody>{rows}</tbody>
		)			
	};
}

class TableHeadRow extends React.Component{
    render() {
		return(
        <thead>
            <tr>
                <td>ID</td><td>Title</td><td>Author</td><td>Rating</td><td>Date</td>
                {/* <td></td> */}
            </tr>       
        </thead>)
	}	
}

class DetailGrid extends React.Component{
    constructor(props){
        super(props);
    }    

    updateRec(event){
        this.props.updateRecInTableAll(event.target)
    }

    render(){
        return (
            <Table striped condensed hover bordered>
                <TableHeadRow bookRow={this.props.bookContent[0]} />
                <TableRow bookContent={this.props.bookContent} updateRecInDetailGrid={this.updateRec.bind(this)}/>
            </Table>
        )
    }
}


export default DetailGrid