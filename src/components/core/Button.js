import React, { Component } from "react";
import "./Button.css"


class Button extends React.Component{
    render() {
        return(
            <button
                onClick = {this.props.Add}
                >
                {this.props.children}
                {this.props.isSelected}
                {this.props.onClick}
            </button>
            
        );
    }
}

// const Button = (props) => {

//     return (
//         <button
//             onClick={Props.Add}
//             >
//             {props.children}
//             {props.isSelected}
//             {props.onClick}
//         </button>
//     );
// }

export default Button;