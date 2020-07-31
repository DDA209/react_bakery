import React from 'react';

class List extends React.Component{

    render(){
        // console.log('components/list#render this.state', this.state);
        console.log('component#render this.props.items', );
        return(
            <div>
                <ul>
                    <li>Didier 50000000€</li>
                </ul>
            </div>
        );
    }
}

export default List;