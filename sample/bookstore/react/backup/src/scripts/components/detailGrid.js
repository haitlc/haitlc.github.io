import React from 'react';
import {Table, striped, bordered, condensed, hover, responsive, Button} from 'react-bootstrap';


class TableRow extends React.Component{
    constructor(props){
        super(props);
        this.updateRec = this.updateRec.bind(this)
    }    

    updateRec(event){
        this.props.updateRecInDetailGrid(event) //it is now getting button 
    }

    render() {
        var rows = [];
        var counter = 0
        this.props.bookContent.forEach((listValue) => {
            rows.push(                
                <tr key={counter}>
                    <td>{listValue.id}</td>
                    <td>{listValue.title}</td>
                    <td>{listValue.author}</td>
                    <td>{listValue.rating}</td>
                    <td>{listValue.date}</td>
                    <td> <Button onClick={this.updateRec} id={counter++} bsStyle="primary">Update</Button></td>
                </tr>)
        })
		return(
            <tbody>{rows}</tbody>
		)			
	};
}

class TableHeadRow extends React.Component{
	capitalizeFirstLetter(string) {return string.charAt(0).toUpperCase() + string.slice(1);}
    pushTableHeadRow(rows, headerKeys){
        var counter=0;
        headerKeys.forEach(function(key) {
            console.log(key)
            if(key=="cover"||key=="dropDown"||key=="radio"||key=="checkbox1"||key=="checkbox2"||key=="checkbox3"){return}
            rows.push(<td key={counter++}>{this.capitalizeFirstLetter(key)}</td>)
        }, this);
        rows.push(<td key={counter++}></td>) 
        return rows    
    }
    render() {
        var rows = [];        
        var headerKeys = Object.keys(this.props.bookRow)
        rows = this.pushTableHeadRow(rows, headerKeys)
		return(
			<thead>
                <tr>{rows}</tr>
            </thead>
		)
	}	
}

class DetailGrid extends React.Component{
    constructor(props){
        super(props);
        this.updateRec = this.updateRec.bind(this)
    }    

    updateRec(event){
        this.props.updateRecInTableAll(event.target)
    }

  render(){
    return (
        <Table striped condensed hover bordered>
            <TableHeadRow bookRow={this.props.bookContent[0]} />
            <TableRow bookContent={this.props.bookContent} updateRecInDetailGrid={this.updateRec}/>
        </Table>
    )
  }
}


export default DetailGrid