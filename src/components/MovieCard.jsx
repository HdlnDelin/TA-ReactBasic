import React from 'react'

const MovieCard = (props) => {
  const {movie} = props
  console.log(movie)

  return (
    <div className="card h-100">
    <img src={movie.image_url} style={{height:'700px', objectFit: 'cover'}} className="card-img-top" alt="skilvul" />
    <div className="card-body">
      <h5 className="card-title">{movie.title}</h5>
      <h6 className="card-subtitle mb-2">
        <span className={`badge bg-danger`}>{movie.type}</span>
      </h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div className="card-body">
      <a href={movie.url} className="btn btn-primary w-100 text-uppercase">
        readmore
      </a>
    </div>
  </div>
  )
}




export default MovieCard