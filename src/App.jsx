import { useState } from 'react';

import { devs } from "./devs";
import './App.css'
import Card from './components/card/Card';

function App() {

  const [counter, setCounter] = useState(0) // [ valor, fnUpdate]
  // const [ products, setProducts ] = useState([1, 2]) // Estdo de array de productos   [ [1, 2], fnActualizar ]
  // const [ user, setUser ] = useState({ name: "John", age: 30, email: "pepe@gmail.com" })  
  // // [ { name: "John", age: 30, email: "pepe@gmail.com" }, fnActualizarObjeto ]
  // const [ name, setName ] = useState("Pepe Gomez")
  // const counter = counterState[0];
  // const setCounter = counterState[1];

  // setCounter(2)

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


  console.log("Componente renderizado")
  console.log(devs) // array de objetos dessarolladores

  return (
    <div>

      <h1>CONTADOR</h1>

      <button onClick={incrementar}>+</button>

      <div>Resultado: {counter}  </div>

      <button onClick={decrementar}>-</button>

      <div className="devs-container">

        {
          devs.map((desarrollador) => {

            return <Card dev={desarrollador} key={desarrollador.id} />

            // return <div className="card" key={desarrollador.id}>
            //         <div className="card-header">
            //           {desarrollador.nombre}
            //         </div>
            //         <div className="card-body">
            //           {desarrollador.stack}
            //         </div>
            //       </div>

          })
        }

      </div>




    </div>
  )

}

export default App
