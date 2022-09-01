import freeCodeCamoLogo from './imagenes/logo-largo.png'
import './App.css';
import Boton from './Componentes/Boton'
import Pantalla from './Componentes/Pantalla'
import BotonClear from './Componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val  => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input){    
    setInput(evaluate(input));
    } else {
      alert('porfavor ingresar valor correcto.')
    }
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCamoLogo}
          className='Freecodecamp-logo'
          alt='logo de freeCodeCamp'   
        />
      </div>
      <div className='contendor-calculadora'>
        <Pantalla input={input}/>


        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}> Clear </BotonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
