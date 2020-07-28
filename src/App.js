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

  isSelectedFunc(){
    
  }

  //// Event listener (ex : OnClickBloublou OnChange) - En deuxième

  //// méthodes (par ordre alphabétique / sub-render) - En troisième

  onAdd(price, input){
    this.setState({
      price,
      input,
    })
  }

  renderTabDefault(){
    if (this.state.activeTab !== 'list' && this.state.activeTab !== 'add' && this.state.activeTab !== 'pay') { // Meilleure façon de faire !==
      return <div className="row"><h1>Welcome!</h1></div>;
    }
    return null;
  }


  renderTabAdd(){
    if (this.state.activeTab === 'add') { // Bon mais pourrait être mieux
      return <Add onSubmitPriceAndInput={null}/>;
    }
    return null;
  }

  /*
  renderTabList(){
    if (this.state.activeTab !== 'list') { // Meilleure façon de faire !==
      return null;
    }
    return <List />;
  }

  renderTabPay(){
    if (this.state.activeTab !== 'pay') {
      return null;
    }
    return <Pay />;
  }
  */




  render() {
    // console.log('app#render this.state.activeTab',this.state.activeTab);
    console.log('app#render this.state.activeTab',this.state.activeTab === "pay");
    return (
      <div className="container">

        <div className="row">
            <div className="btn_group" role="group" aria-label="Tab list">

              <Button 
                onClickFunc = {this.onClickTabAdd}
                isSelected = {this.state.activeTab === "add" ? true : false}
              >
                Add {/* child"ren" de <button></>*/}
              </Button>
              <Button
                onClickFunc = {this.onClickTabList}
                isSelected = {this.state.activeTab === "list" ? true : false}
              >
                List</Button>
              <Button 
                onClickFunc = {this.onClickTabPay}
                isSelected = {this.state.activeTab === "pay" ? true : false}
              >
                Pay</Button>

            </div>
          </div>

          <div className="row">

            {this.renderTabDefault()}
            {this.renderTabAdd()}
            {/* {this.renderTabList()} */}
            {this.state.activeTab === 'list' ? <List /> : null} {/* autre façon */}
            {/* {this.renderTabPay()} */}
            {this.state.activeTab === 'pay' && <Pay />} {/* autre façon */}
            
          </div>

      </div>
    );
  }
}

export default App;
