# Movie App

React JS fundamentals Course (2021 Update!)


## 2021.02.22 (3.2 Done!)

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
  render를 하면 호출되는 life cycle methood - RenderMount
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

## 2021.02.24 (5.0)
- npm i gh-pages
- pakage.js + ("homepage" : "link")
- pakage.js +  ("deploy": "gh-pages -d build"), ("predeploy": "npm run build")
- npm run build

## 2021.02.25 (6.1)
import React from "react";
import { HashRouter, Route } from "react-router-dom"; // Router 종류
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter> 
  )
}

export default App;

