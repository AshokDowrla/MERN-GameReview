import React from 'react'
import Reviews from '../../containers/Reviews/Reviews'
const Genre = (props) => {
    const name = "genre"
   
    const value=props.location.search.split('=')[1]
 
      

    return (
        <div>
           <Reviews banner={<h1>{value} Games</h1>} path={name} value={value} /> 
        </div>
    )
}


export default Genre