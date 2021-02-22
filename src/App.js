import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
  }
  state = {
    count: 0
  };
  add= () => {
    this.setState(current => ({ count: current.count + 1}));
  }
  minus= () => {
    this.setState(current => ({ count: current.count - 1}));
  }
  componentDidMount(){
    console.log("component rendered");
  }
  componentDidUpdate(){
    console.log("I just update!");
  }
  componentWillUnmount(){
    console.log("Good bye Cruel world");
  }
  /*
  실행 - RenderMount
  setState - RenderUpdate
  페이지 나갈 때 - WillUmnount
  */
  render(){
    console.log("I am renderring");

    return (
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

export default App;
