import React from 'react';

import Slider from "./core/Slider";
import Input from "./core/Input";
import Button from "./core/Button";

const min = 1;
const max = 10;

class Add extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            input:'',
            price: 1,
        }

        ///BIND ICI
        this.onChangeSlider = this.onChangeSlider.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChangeInput(evt) { // valeur de l'input
        this.setState({
            input: evt.target.value
        });
        // console.log('components/core/Add#onChangeInput this.state', this.state);

    }

    onChangeSlider(price) { // Valeur du slider
        this.setState({
            price // ou -> price: price 
        });
    }

    onSubmit() {

        // console.log('components/core/Add#onSubmit this.state', this.state);
        // console.log('components/core/Add#onSubmit typeof  this.state.input', typeof this.state.input);
        // console.log('components/core/Add#onSubmit this.state.input', this.state.input);
        // console.log('components/core/Add#onSubmit this.state', this.state);
        // console.log('components/core/Add#onSubmit typeOf this.state.price', typeof this.state.price);
        // console.log('components/core/Add#onSubmit this.state.price', this.state.price);
        
        const price = this.state.price;
        const input = this.state.input;
        
        console.log('components/core/Add#onSubmit price, input', price, input);
        this.props.onSubmit(price, input);
    }

    render() {

        const add = 'Add';

        // console.log('components/Add#render this.state', this.state);
        // console.log('components/Add#render this.state.price', this.state.price);
        // console.log('components/Add#render this.state.input', this.state.input);
        // console.log('components/Add#render this.onChangeInput', this.onChangeInput);
        // console.log('components/Add#render this.state.value', this.state.value);
        // console.log('components/core/Add#render this.state.onSubmit.price', this.state.onSubmit.price);
        // console.log('components/core/Add#render this.state.onSubmit.input', this.state.onSubmit.input);

        return(
            <div>
                <div className="input-group mb-3"> {/* Voir pourquoi mb-3*/}
                    <Input
                        // input={this.state.input} // change la place du curseur du slider
                        onChangeInput={this.onChangeInput}
                    >
                    </Input>
                  
                    <div className="input-group-append">
                        <Button 
                            onClickFunc={this.onSubmit} // récupérer la valeur de l'input et la redescendre
                            // onClickFunc={this.props.onChange}
                        >

                        {add}
                        </Button>
                    </div>
                </div>
                <span>{this.state.price}€ pour {this.state.input}</span>
                <Slider 
                    value={this.state.price}
                    min={min}
                    max={max}
                    onChangeSlider={this.onChangeSlider}
                />
                {/* <p>{this.state.onSubmit.price}€ - {this.state.onSubmit.input}</p> */}
            </div>
        );
    }
}
// 
export default Add;