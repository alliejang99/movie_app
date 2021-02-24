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

## 2021.02.22 (3.3 Done!)

class App extends React.Component{
  constructor(props){
    super(props);
  }
  state = {
    isLoading: true,
    movies: []
  };
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
 
  render(){
    const { isLoading } = this.state
    return 	&lt;div&gt;{isLoading ? "Loading..." : "We are ready"}	&lt;/div&gt;;
      
  }
}

## 2021.02.22 (4.0 Done!)
import axios from "axios";

class App extends React.Component{
  constructor(props){
    super(props);
  }
  state = {
    isLoading: true,
    movies: []
  };
  
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  componentDidMount(){
    this.getMovies();
  }
 
  render(){
    const { isLoading } = this.state
    return &lt;div&gt;{isLoading ? "Loading..." : "We are ready"}&lt;/div&gt;;
      
  }
}