import React from 'react'
import Reviews from '../../containers/Reviews/Reviews'
const Search = (props) => {
    const name = "search"
   
    const value=props.location.search.split('=')[1]
 
      

    return (
        <div>
           <Reviews banner={<h1>Search Results for '{value}'</h1>} path={name} value={value} /> 
        </div>
    )
}


export default Search