function Card({ dev }) {


  return (
    <div className="card">
      <div className="card-header">
        {dev.nombre}
      </div>
      <div className="card-body">
        {dev.stack}
      </div>
    </div>
  )


}


export default Card;