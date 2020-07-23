import React from 'react';

class List extends React.Component{
    render(){
        console.log('components/list#render this.state', this.state);
        return(
            <div>
                List
            </div>
        );
    }
}

export default List;