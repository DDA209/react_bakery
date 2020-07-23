import React from "react";
import "./Button.css"

/* troisième tentative après correction*/
const Button = ({ children, isSelected, onClickFunc}) => {

    console.log('component/Button#Button children', children);
    console.log('component/Button#Button isSelected', isSelected);
    console.log('component/Button#Button onClick', onClickFunc);

    return(
        <button
            type="button"
            className="btn btn-primary" 
            onClick={onClickFunc}
            isSelected={isSelected}
        >
            {children}
        </button>
        
    );

}

/* deuxième tentative - je me mélancge les pinceaux
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