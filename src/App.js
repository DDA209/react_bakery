import React from "react";
import Button from "./components/core/Button"
// import Btn from "./components/core/Btn"
import 'bootstrap/dist/css/bootstrap.min.css';

const Add = (props) => {
  return(
    <div>
      add
    </div>
  );
};

const List = (props) => {
  return(
    <div>
      list
    </div>
  );
};

const Pay = (props) => {
  return(
    <div>
      pay
    </div>
  );
};


class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      activeTab: 'add',
      items: [],
    };
    //// Bind ici
  }

  //// Méthodes de React LifeCycle- En premier
  onClickTabAdd = () => {
    this.setState({
      activeTab: 'add',
    });
  }

  
  onClickTabList = () => {
    this.setState({
      activeTab: 'list',
    });
  }

  onClickTabPlay = () => {
    this.setState({
      activeTab: 'play',
    });
  }


  //// Event listener (ex : OnClickBloublou OnChange) - En deuxième

  //// méthodes (par ordre alphabétique / sub-render) - En troisième

  render() {
    return (
      <div className="btn_group" role="group" aria-label="Tab list">

        <Button >
          Add {/* children de <button></>*/}
        </Button>
          <div>Add</div>
        <Button>List</Button>
          <div>List</div>
        <Button>Pay</Button>
          <div>Pay</div>

      </div>
    );
  }
}

export default App;
