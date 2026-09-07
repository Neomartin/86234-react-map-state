import { devs } from "../../devs"
import Card from "../card/Card"

export default function CardContainer() {



  return (
    <div className="product-container">

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

    </div>)



}