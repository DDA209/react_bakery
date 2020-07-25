import React from "react";
import Button from "./Button"

class Input extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            value: "",
            buttonGetInput: "",
        };

        //bind
        this.inputGetchange = this.inputGetchange.bind(this);
        this.onClickGetInput = this.onClickGetInput.bind(this);
    }

    inputGetchange(evt) {
        this.setState({
            value: evt.target.value,
        });
        console.log('components/core/input#inputGetchange evt.target.value', evt.target.value);
    }

    onClickGetInput() {
        this.setState({
          buttonGetInput: this.state.value,
        });
        console.log('components/core/input#onClickGetInput this.state.buttonGetInput', this.state.buttonGetInput); // croissant
      }

    render(){
        console.log('components/core/input#render this', this); //{props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
        console.log('components/core/input#render this.state', this.state);//{value: "croissant"}
        console.log('components/core/input#render this.state', this.state.value);
        console.log('components/core/input#render this.props.onChangeInput', this.props.onChangeInput);
        console.log('components/core/input#render this.props.onChange', this.props.onChange);
        return(
            <div className="input-group mb-3"> {/* Voir pourquoi mb-3*/}
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Item" 
                    aria-label="add" 
                    aria-describedby="add-button"
                    value={this.state.value}
                    onChange={this.inputGetchange}

                />
                <div className="input-group-append">
                    <Button 
                        onClickFunc={this.onClickGetInput} // récupérer la valeur de l'input et la redescendre
                        // onClickFunc={this.props.onChange}
                    >
                    {this.props.children}
 
                    </Button>
                </div>
                
            </div>
        )
    }
}

export default Input;