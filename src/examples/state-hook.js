//class, stateless function component
// state,lifecycle class component kullanırı

// react 16.8: function component + hook => stateful function component


import React, { Component,useState } from 'react'
import ReactDOM from 'react-dom'

// class App extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           count: 0,
//           text:''
//       }
//   }  
//   render() {
//     return (
//       <React.Fragment>
//         <div>Class Component</div>
//         <p>Butona {this.state.count} kez tıkladınız.</p>
//         <button onClick={() => this.setState({count:this.state.count + 1})}>+1</button>
//       </React.Fragment>
//     )
//   }
// }

// const App = (props) => {
//     return (
//         <div>Function Component</div>
//     )
// }

function App(props) {
    // const obj = useState(10);
    const [count,setCount] = useState(props.count);
    const [text,setText] = useState(props.text);
    return (
        <>
        <div>Function Component</div>
        <p>Butona {count} kez tıkladınız.</p>
        <p>Girilen text : {text}</p>
        <button onClick={() => setCount(count+1)}>+1</button>
        <button onClick={() => setCount(count-1)}>-1</button>
        <button onClick={() => setCount(props.count)}>Reset</button>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        </>
    )
}

App.defaultProps = {
    count:5,
    text: 'Lütfen Text Giriniz.'
}


ReactDOM.render(<App count={7}/>,document.getElementById('root'));