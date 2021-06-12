
import React from 'react';

class Anchors extends React.Component {
    constructor(props){
        super(props)
        this.props = props
    }
    render(){
        const className = this.props.className? this.props.className : "";
        
        return (
            <li className={`list-inline ${className}`}>
                <a href="/">
                    <img src={this.props.imgSrc} alt={this.props.imgAlt} className="list-inline-item" />
                    <p className="list-inline-item"> {this.props.text} </p>
                </a>
            </li>
        )
    }
}

export default Anchors;