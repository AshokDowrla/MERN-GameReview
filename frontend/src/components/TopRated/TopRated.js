import React from 'react'


import Reviews from '../../containers/Reviews/Reviews'

const TopRated = (props) => {


const name="toprated"
    // if (!props.location.toprated) {
        
    //     props.history.push('/')

    // }
    

    return (
        <div className="text-center">

          <Reviews banner ={<h1>Top Rated Games</h1>} path={name}/>
        </div>
    )
}


export default TopRated