import React from 'react';

import Slider from "./core/Slider";
import Input from "./core/Input";
import Button from "./core/Button";

class Add extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            input:'',
            price: 1,
            min: 1,
            max: 10,
            value: 1,
        }


        ///BIND ICI
        this.onChangeSlider = this.onChangeSlider.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChangeInput(evt){
        this.setState({
            input: evt.target.value
        });
    }

    onChangeSlider(value){
        this.setState({
            value // ou -> value: value 
        });
    }

    onSubmit(value, input){
        this.setState({
            price: value,
            input
        });
        console.log('components/core/Add#onSubmit this.state.onSubmit', this.state.onSubmit); // croissant
    }


    render(){

        const add = 'Add';

        console.log('components/Add#render this.state', this.state);
        console.log('components/Add#render this.onChangeInput', this.onChangeInput);
        // console.log('components/Add#render this.state.value', this.state.value);
        return(
            <div>
                <div className="input-group mb-3"> {/* Voir pourquoi mb-3*/}
                    <Input
                        input={this.state.evt}
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
                <span>{this.state.value}€ pour ???</span>
                <Slider 
                    value={this.state.value}
                    min={this.state.min}
                    max={this.state.max}
                    onChangeSlider={this.onChangeSlider}
                />
            </div>
        );
    }
}

export default Add;