//class, stateless function component
// state,lifecycle class component kullanırı

// react 16.8: function component + hook => stateful function component


import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// class App extends Component {
//   render() {
//     return (
//       <div>Class Component</div>
//     )
//   }
// }

// const App = (props) => {
//     return (
//         <div>Function Component</div>
//     )
// }

function App(props) {
    return (
        <div>Function Component</div>
    )
}


ReactDOM.render(<App/>,document.getElementById('root'));