import React from 'react';
import Slider from "./core/Slider";
import Input from "./core/Input";

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
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeInput(value){
        this.setState({
            value // ou -> value: value 
        });
    }

    onChangeSlider(value){
        this.setState({
            value // ou -> value: value 
        });
    }

    onSubmit(input){
        this.setState({
            input
        });
    }

    render(){
        console.log('components/Add#render this.props', this.props);
        console.log('components/Add#render this.state.input', this.state.input);
        console.log('components/Add#render this.state.input', this.state.input);
        return(
            <div>
                <Input
                    // onChange={this.onChange}
                >
                    Add
                </Input>

                <Slider 
                    value={this.state.value}
                    min={this.state.min}
                    max={this.state.max}
                    onChange={this.onChangeSlider}
                />
            </div>
        );
    }
}

export default Add;