import React from "react";
import "./Button.css"

/* troisième tentative après correction : En fonction component */
const Button = ({ children, isSelected, onClickFunc }) => { //destructuration du this.props

    // console.log('component/Button#Button children', children);
    // console.log('component/Button#Button isSelected', isSelected);
    // console.log('component/Button#Button onClick', onClickFunc);

    let btnClass = 'btn-primary';
    if (isSelected){
        btnClass='btn-primary'
    }
    else {
        btnClass='btn-outline-primary'
    }

    //isSelected={isSelected}

    return(

        <button
            type="button"
            className={'btn ' + btnClass} 
            onClick={onClickFunc}
        >
            {children}
        </button>

    );
}

/* deuxième tentative
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

/* Première tentative - pas mal finalement
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