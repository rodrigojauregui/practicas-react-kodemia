import React from "react";
/*
class AppButton extends React.Component {
    constructor(props){
        super(props)
        this.props = props
    }
    render(){
        const className = this.props.className? this.props.className : "";
        if(this.props.type === 'anchor'){
            return (
                <a className= {` ${className}`}>
                    {this.props.text}
                </a>
            )
        }
        return (
            <button className= {` ${className}`} type="button" >
                {this.props.text}
            </button>
        )
    }
}
*/

function AppButton({ className: classNameProps, type, text }) {
  const className = classNameProps ? classNameProps : "";
  if (type === "anchor") {
    return <a className={` ${className}`}>{text   /* text? text : ""*/  }</a>;
  }
  return (
    <button className={` ${className}`} type="button">
      {text}
    </button>
  );
}

export default AppButton;
