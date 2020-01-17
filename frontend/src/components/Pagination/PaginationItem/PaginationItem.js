import React from 'react'
import {Pagination} from "react-bootstrap"
const PaginationItem = (props) => {
    let pageItems = []


   
        for(let i=props.pageNum;i<=props.pageCount && i<props.pageNum+5;i++){
            pageItems.push(
                <Pagination.Item key={i} active={props.active===i} onClick={()=>props.page(i)}>
                {i}
              </Pagination.Item>,
            )
        }
    
    return (
        <React.Fragment>
          {pageItems}
            
        </React.Fragment>


    )
}


export default PaginationItem