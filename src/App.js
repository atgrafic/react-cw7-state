import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myTitle: "default Title" };
  }

  changeTitle = () => {
    // 1. zmiana stanu na dowolny inny
    //this.setState({myTitle: "ale zmeczona jestem" });
    // 2. aby po każdym kliknięciu dodawał się kolejny wykrzyknik do myTitle
        this.setState({myTitle:this.state.myTitle + "!" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.myTitle}</h1>
        <button onClick={this.changeTitle}>Click me to change title</button>
      </div>
    );
  }
}
