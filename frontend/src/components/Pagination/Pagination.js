import React from 'react'
import { Pagination } from "react-bootstrap"
import PaginationItem from './PaginationItem/PaginationItem'

const PaginationSection = (props) => {

    const { totalPageCount, active, pageNum } = props
    

    return (
        <Pagination className="justify-content-center mt-5">


            {active === 1 ? <Pagination.Prev disabled /> : <Pagination.Prev onClick={() => props.page(active - 1)} />}
            {pageNum < 6 ? null : <Pagination.Ellipsis onClick={() => props.page(pageNum-1)} />}
            <PaginationItem pageCount={totalPageCount} active={active} pageNum={pageNum} page={props.page} />
            {pageNum+5>totalPageCount? null: <Pagination.Ellipsis onClick={() => props.page(pageNum+5)} />}

            {active === totalPageCount ? <Pagination.Next disabled /> : <Pagination.Next onClick={() => props.page(active + 1)} />}
          

        </Pagination>
    )
}


export default PaginationSection