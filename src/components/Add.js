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
            onChange: () => {},
        }


        ///BIND ICI
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(value){
        
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
        return(
            <div>
                <Input
                    input={this.state.input}
                    onSubmit={this.onSubmit}
                >
                    Add
                </Input>
                Slider v
                <Slider 
                    value={this.state.value}
                    min={this.state.min}
                    max={this.state.max}
                    onChange={this.onChange}
                />
                Slider ^
            </div>
        );
    }
}

export default Add;