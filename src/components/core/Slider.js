import React from 'react';
import RCSlider from 'rc-slider';

class Slider extends React.Component{

    render(){
        console.log('components/core/Slider#Render this.props.Slider', this.props);
        console.log('components/core/Slider#Render  this.props.onChange(value)', this.props.onChange);
        return(
            <div>
                <RCSlider 
                    value={this.props.value}
                    min={this.props.min}
                    max={this.props.max}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default Slider;