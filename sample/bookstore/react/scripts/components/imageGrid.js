import React from 'react';

class ImageGridRow extends React.Component{
	render() {
		return(
	    <li>
          <a className="rig-cell" href="#">
            <img className="rig-img" src={this.props.listValue.cover} alt={this.props.listValue.title} />
            <span className="rig-overlay"></span>
            <span className="rig-text">{this.props.listValue.title}</span>
          </a>          
        </li>
		)			
	};
}

class ImageGrid extends React.Component{
	render() {
    var counter=0;
    var rows = [];
    this.props.bookContent.forEach(function(listValue) {
        rows.push(<ImageGridRow key={counter++} listValue={listValue} />)
    }, this);
    return(
        <ul id="rig">{rows}</ul>
    )  		
	};
}

export default ImageGrid