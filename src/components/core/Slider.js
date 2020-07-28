import React from 'react';
import RCSlider from 'rc-slider';

class Slider extends React.Component{

    render(){
        // console.log('components/core/Slider#Render this.props', this.props);
        // console.log('components/core/Slider#Render this.props.onChange(value)', this.props.onChange);
        // console.log('components/core/Slider#Render his.props.onChange', this.props.onChange);
        // console.log('components/core/Slider#Render this.props.value', this.props.value);

        return(
            <div>
                <RCSlider 
                    value={this.props.value}
                    min={this.props.min}
                    max={this.props.max}
                    onChange={this.props.onChangeSlider}
                    onClickFunc={this.props.onClickFunc}
                />
            </div>
        );
    }
}

export default Slider;