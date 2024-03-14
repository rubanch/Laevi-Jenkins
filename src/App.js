// import logo from './logo.svg';
// import './App.css';
// import App1 from './App1';

// function App() {
//   return (
//     <>
//     {/* <h2>Hello all this is RUban</h2>
//     <h1>Hello ruban</h1>
//     <p>vanakam da mapla</p>
//     <h1 data-testid="myheading">I am batman</h1> */}
//     <App1/>
//     </>
//   );
// }

// export default App;

import React from "react";
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={num1:'',num2:'',result:''};
  }
  Add=()=>{
    var n1=parseInt(this.state.num1);
    var n2=parseInt(this.state.num2);
    var sum =n1+n2;
    this.setState({result:sum});
   
  }
 
  render(){
    return(
      <div>
        <h1 data-testid="heading">Addition of two numbers</h1>
        <br/>
       
        <label data-testid='lbl1'>Enter No 1</label>
        <input data-testid="txtbox1" type="number" value={this.state.num1} onChange={(e)=>{this.setState({num1:e.target.value})}}/>
        <br/>
        <br/>
        <label data-testid='lbl2'>Enter No 2</label>
        <input data-testid="txtbox2" type="number" value={this.state.num2} onChange={(e)=>{this.setState({num2:e.target.value})}}/>
        <br/>
        <br/>
        <button data-testid="btn" type="submit"onClick={this.Add}>Addition</button>
        <br/>
        <br/>
        <b data-testid="result">Sum :{this.state.result}</b>
      </div>
    )
  }
}
 
export default App;
 