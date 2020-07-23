import React from "react";

class Btn extends React.Component{
    result(){
        return(
            <button 
            onClick={this.props.onClickFn}>
                {this.props.children}{/* Affiche l'enfant présent dans <Button></> */}
            </button>
        );
    }
}

export default Btn;