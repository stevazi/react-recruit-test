import React from "react";
import NestedComponent1 from "./NesetdComponent1";

export default class Component2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div>
        <div className="card my-2">
          <div className="card-body">
            <p className="text-center">{this.state.count}</p>
            <NestedComponent1 count={this.state.count} />
          </div>
        </div>
        <div className="mx-auto d-flex ">
          <button className="btn-primary btn mx-auto " onClick={this.decrement}>
            Diminuisci
          </button>
          <button className="btn-primary btn mx-auto" onClick={this.increment}>
            Aggiungi
          </button>
        </div>
      </div>
    );
  }
}
