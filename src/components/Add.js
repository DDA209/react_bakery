import React from 'react';

class Add extends React.Component{
    render(){
        console.log('components/Add#render this.props', this.props);
        return(
            <div>
                Add
            </div>
        )
    }
}

export default Add;