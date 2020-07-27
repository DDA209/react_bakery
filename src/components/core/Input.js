import React from "react";

class Input extends React.Component{

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         value: "",
    //     };

    //     //bind
    //     this.inputGetchange = this.inputGetchange.bind(this);
    // }

    // inputGetchange(evt) {
    //     this.setState({
    //         value: evt.target.value,
    //     });
    //     // console.log('components/core/input#inputGetchange evt.target.value', evt.target.value);
    // }

    render(){
        console.log('components/core/input#render this', this); //{props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
        // console.log('components/core/input#render this.state', this.state);//{value: "croissant"}
        // console.log('components/core/input#render this.state', this.state.value);
        // console.log('components/core/input#render this.props.onChangeInput', this.props.onChangeInput);
        // console.log('components/core/input#render this.props.onChange', this.props.onChange);
        // console.log('components/core/input#onClickGetInput this.state.buttonGetInput', this.state.buttonGetInput); // croissant

        return(

                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Item" 
                    aria-label="add" 
                    aria-describedby="add-button"
                    value={this.props.input}
                    onChange={this.props.onChangeInput}
                />

        )
    }
}

export default Input;