import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Bootstrap from "bootstrap";

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      activeTab: 'add',
      items: [],
    };

  }

  

  render(Add, List, Pay) {
    return (
      <div>

        <h1>
          Bakery
        </h1>

        <div>
          add
        </div>

        <div>
          list
        </div>

        <div>
          pay
        </div>

      </div>
    )
  }
}

export default App;
