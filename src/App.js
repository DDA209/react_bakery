import React from "react";
import Button from "./components/core/Button"
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
  
  //// Event listener (ex : OnClickBloublou OnChange) - En deuxième

  //// méthodes (par ordre alphabétique / sub-render) - En troisième

  render() {
    return (
      <div>

        <Button
          Add = {() => {
            this.state.activeTab
          }}>
          Add
        </Button>
        <Button>List</Button>
        <Button>Pay</Button>

      </div>
    );
  }
}

export default App;
