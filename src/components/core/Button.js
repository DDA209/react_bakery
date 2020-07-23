import React, { Component } from "react";
import "./Button.css"


class Button extends React.Component{
    render() {
        return(
            <button type="button" className="btn btn-primary" 
                isSelected={this.props.isSelected}
                onClick={this.props.onClick}
                >
                    
                {this.props.children}

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