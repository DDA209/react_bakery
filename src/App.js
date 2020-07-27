import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-slider/assets/index.css';

import Button from "./components/core/Button";
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";

/*
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
*/

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = { //objet javascript
      activeTab: 'mettre "add" ici après tests OK', // <Add />fonctionnerai mais n'est pas une chose à faire dans React
      input: '',
      items: [],
      price: 0,
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

  onClickTabPay = () => {
    this.setState({
      activeTab: 'pay',
    })
    ;
  }


  //// Event listener (ex : OnClickBloublou OnChange) - En deuxième

  //// méthodes (par ordre alphabétique / sub-render) - En troisième

  onAdd(price, input){
    this.setState({
      price,
      input,
    })
  }

  renderTabAdd(){
    if (this.state.activeTab === 'add') {
      return (
        <Add />
      );
    }
    return null;
  }

  renderTabList(){
    if (this.state.activeTab === 'list') {
      return (
        <List />
      );
    }
    return null;
  }

  renderTabPay(){
    if (this.state.activeTab === 'pay') {
      return(
        <Pay />
      );
    }
    return null;
  }

  render() {
    return (
      <div className="container">

        <div className="row">
            <div className="btn_group" role="group" aria-label="Tab list">

              <Button 
                onClickFunc = {this.onClickTabAdd}
              >
                Add {/* child"ren" de <button></>*/}
              </Button>
              <Button
                onClickFunc = {this.onClickTabList}
              >
                List</Button>
              <Button 
                onClickFunc = {this.onClickTabPay}
              >
                Pay</Button>

            </div>
          </div>

          <div className="row">
            {this.renderTabAdd()}
            {this.renderTabList()}
            {this.renderTabPay()}
          </div>

      </div>
    );
  }
}

export default App;
