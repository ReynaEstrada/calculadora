import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ButonClear from './components/ButonClear';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const agregarInput = valor  => {
    setInput (input + valor);
  };
  const calcularResultado =() => {
    if (input){
      setInput (evaluate(input));
    }else {
      alert('Por favor ingrese valores para realizar los cálculos')
    }
   
  };
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
     </div>
     <div className='contenedor-calculadora'>
        <Screen input={input}/>
        <div className='fila'>
          <Button manejarClic={agregarInput}>1</Button>
          <Button manejarClic={agregarInput}>2</Button>
          <Button manejarClic={agregarInput}>3</Button>
          <Button manejarClic={agregarInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={agregarInput}>4</Button>
          <Button manejarClic={agregarInput}>5</Button>
          <Button manejarClic={agregarInput}>6</Button>
          <Button manejarClic={agregarInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={agregarInput}>7</Button>
          <Button manejarClic={agregarInput}>8</Button>
          <Button manejarClic={agregarInput}>9</Button>
          <Button manejarClic={agregarInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={calcularResultado}>=</Button>
          <Button manejarClic={agregarInput}>0</Button>
          <Button manejarClic={agregarInput}>.</Button>
          <Button manejarClic={agregarInput}>/</Button>
        </div>
        <div className='fila'>
          <ButonClear  manejarClear={() => setInput('')}>
            Clear
          </ButonClear>
        </div>
     </div>
    </div>
  );
}

export default App;
