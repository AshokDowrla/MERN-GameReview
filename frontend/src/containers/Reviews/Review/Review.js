import React, { Fragment } from 'react'
import { Card, Row, Col, Container } from "react-bootstrap"

import "./Review.scss"
import Logo from '../../../assets/images/Logo'
const Review = (props) => {

    const { list } = props

     

    const bodyContent = 
        (
            <Row >

                {list.count === 0 ? <div><h3>No Reviews Available </h3>  </div> : (list.reviews.map(review =>
                    (<Col key={review._id} sm={6} md={6} lg={3} >
                        <Card style={{ height: '13rem' }} className="Card">

                            <Card.Body className="text-center d-flex flex-column">
                                <Card.Title>{review.title} </Card.Title>

                                <div className="">Platform: {review.platform}
                                    <div>Genre: {review.genre}</div>

                                </div>



                                <div className="RatingContent mt-auto"><span className="Rating"> {review.score} </span> {review.editors_choice==='Y'? <span className="Logo"><Logo  /> </span> : null} </div>

                                

                            </Card.Body>
                        </Card>


                    </Col>)
                )
                )}
            </Row>



        )
    return (
        <Fragment>
            <Container className="mt-5 mb-5" >



                {bodyContent}





            </Container>





        </Fragment>
    )
}
export default Review