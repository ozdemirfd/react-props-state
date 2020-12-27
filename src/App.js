import logo from './logo.svg';
import './App.css';
import Button from "./Button"
import { render } from '@testing-library/react';

function randomNumber() {
  return Math.floor(Math.random() * 255) + 1;
}

function buttonClicked() {
  const redColor = randomNumber();
  const greenColor = randomNumber();
  const blueColor = randomNumber();
  const rgbCode = `rgb(${redColor},${greenColor},${blueColor})`;
  document.getElementById('header').style.color= rgbCode;
 // document.getElementById('header').innerText = rgbCode;
}
function App() {
 
  return (
    <div>
      <h1 id='header'>Click App!!</h1>
    <Button title="Click me!!" click={buttonClicked}/>
    </div>
  )
  //(

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    
 // );
}


export default App;
