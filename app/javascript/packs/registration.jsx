import React from 'react'
import ReactDOM from 'react-dom'


export class Registration extends React.Component {
  render() {
    return <div> hola nuevo componente </div>;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Registration/>,document.getElementById("react-component"),
    )
})



