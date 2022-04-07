const Card = ({ data,key }) => {
    return (
        <div key={key}  className="card m-2 col-3" >
            <img src={data.src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data.nombre}</h5>
                    <p className="card-text">Desde: {data.ingreso} Hasta: {data.egreso}</p>
                    <p> Promo : {data.estadia}</p>
                    <p>Costo: {data.costo}</p>
                    <p>Lugar de salida: {data.ubicacion} </p>
                    <ul type='none'>
                        <h4>Servicios</h4>
                    {data.servicio.map((s,i)=><li key={i.toString() + 's'}>{s}</li>)}
                    </ul>
                    <a href="#" className="btn btn-primary">Crear Reserva</a>
                </div>
        </div>
    )
}
export default Card