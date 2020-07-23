import React from "react";
import "./Button.css"


const Button = ({ children, isSelected, onClick}) => {

    console.log('component/Button#Button children', children);
    // console.log('component/Button#Button isSelected', isSelected);
    console.log('component/Button#Button onClick', onClick);

    return(
        <button
            type="button"
            className="btn btn-primary" 
            onClick={onClick}
            // isSelected={isSelected}
            >

            {children}

        </button>
        
    );

}

/*
class Button extends React.Component{
    render() {
        return(
            <button type="button" className="btn btn-primary" 
                isSelected={this.props.isSelected}
                onClick={this.props.onClickFunc}
                >

                {this.props.children}

            </button>
            
        );
    }
}
*/

/*
const Button = (props) => {

    return (
        <button
            onClick={Props.Add}
            >
            {props.children}
            {props.isSelected}
            {props.onClick}
        </button>
    );
}
*/

export default Button;