import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Review from "./Review/Review"
import { getList, getPage, getTopRated, getSearchQuery, getGenre } from "../../store/actions/reviewActions"
import PaginationSection from '../../components/Pagination/Pagination'
import "./Reviews.scss"
import { Jumbotron, Container, Spinner } from "react-bootstrap"
class Reviews extends Component {

   
    componentDidMount() {





        if (this.props.banner) {


            if (this.props.path === 'toprated') {
                this.props.getTopRated()
            }
            else if (this.props.path === 'search') {


                this.props.getSearchQuery(this.props.value)
            }
            else{
                this.props.getGenre(this.props.value)
            }


        }
        else {
            this.props.getList()
        }
        // console.log(this.props)

    }

    onPageClick = (num) => {
        this.props.getPage(num)

    }

componentDidUpdate(){
    
}


    render() {
       

        const { isLoading, totalPageCount } = this.props.list

        const { pageResults, pageNo, pageActive, pageLoading } = this.props.page



        const bodyContent = (isLoading ? <div className="d-flex justify-content-center mt-100"><Spinner animation="grow" /></div> : (pageLoading) ? null

            : (<React.Fragment>

                <Jumbotron fluid>
                    <Container>
                        {this.props.banner ? this.props.banner :
                            (<React.Fragment><h1>Welcome To The Game Reviewer</h1>
                                <h4>
                                    Check out the critics scores of your favourite games by genre and platform
                            </h4>
                            </React.Fragment>)

                        }
                    </Container>
                </Jumbotron>
                {(pageResults.count === 0) ? <div className="noResult">{`No Results Found`}</div> :
                    <React.Fragment>
                        <Review list={pageResults} />
                        <PaginationSection page={this.onPageClick} pageNum={pageNo}
                            active={pageActive}
                            totalPageCount={totalPageCount}
                        />

                    </React.Fragment>} </React.Fragment>))

        return (
            <div className="text-center">

                {bodyContent}

            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        list: state.list,
        page: state.page

    }
}


const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({ getList, getPage, getTopRated, getSearchQuery, getGenre }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Reviews)