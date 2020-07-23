import React from "react";
import Button from "./Button"

class Input extends React.Component{
    render(){
        return(
            <div className="input-group mb-3"> {/* Voir pourquoi mb-3*/}
                <input type="text" className="form-control" placeholder="Item" aria-label="add" aria-describedby="add-button" />
                <div className="input-group-append">
                    <Button 
                        onClickFunc = {this.onSubmit}
                    >
                    {this.props.children}
                        
                    </Button>
                </div>
                
            </div>
        )
    }
}

export default Input;