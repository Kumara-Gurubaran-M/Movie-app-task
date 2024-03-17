import React from 'react'

function MovielistHeading(props) {
  return (
    <div>
        <div  className='col'>
            <h1>{props.heading}</h1>
        </div>
    </div>
  )
}

export default MovielistHeading