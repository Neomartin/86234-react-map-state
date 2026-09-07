import { useState } from 'react';

//! NO LO NECESITO MÁS import { devs } from "./devs"; 

import './App.css'
//! NO LO NECESITO CONOCERLO import Card from './components/card/Card';
import CardContainer from './components/card-container/CardContainer';

function App() {

  const [counter, setCounter] = useState(0) // [ valor, fnUpdate]
  // const [ products, setProducts ] = useState([1, 2]) // Estdo de array de productos   [ [1, 2], fnActualizar ]
  // const [ user, setUser ] = useState({ name: "John", age: 30, email: "pepe@gmail.com" })  
  // // [ { name: "John", age: 30, email: "pepe@gmail.com" }, fnActualizarObjeto ]
  // const [ name, setName ] = useState("Pepe Gomez")
  // const counter = counterState[0];
  // const setCounter = counterState[1];

  // setCounter(2)
  const [nombre, setNombre] = useState("")

  function incrementar() {
    setCounter(counter + 1)
  }

  function decrementar() {

    if (counter > 0) {
      setCounter(counter - 1)
      return
    }

    alert("No puedes decrementar debajo de 0")

  }

  function cambiarNombre(evento) {
    console.log(evento.target.value)

    setNombre(evento.target.value)

    console.log("Variable nombre", nombre)
  }




  console.log("Componente renderizado")

  return (
    <div>

      <h1>Hola bienvenid@ {nombre}</h1>

      <div style={
        {
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }
      }>

        <label htmlFor="">Nombre usuario</label>
        <input type="text" onInput={cambiarNombre} name="" id="" placeholder="Ingrese su nombre" />
      </div>

      <button onClick={incrementar}>+</button>

      <div>Resultado: {counter}  </div>

      <button onClick={decrementar}>-</button>


      <CardContainer />




    </div >
  )

}

export default App
