import { GET_LIST, LIST_LOADING, GET_SEARCH, GET_TOP_RATED, GET_GENRE } from "../actions"

const initialState = {

    reviewList: [],
    isLoading: true,
    totalPageCount: 0,

}


const listReducer = (state = initialState, action) => {


    switch (action.type) {
        case GET_LIST:
            let count = (action.payload.count===12)? 1 : parseInt(action.payload.count / 12) + 1
            return {
                ...state,
                reviewList: action.payload,
                isLoading: false,
                totalPageCount: count

            }
        case LIST_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case GET_SEARCH:
            let pagecount = (action.payload.count===12)? 1 : parseInt(action.payload.count / 12) + 1
            return {
                ...state,
                reviewList: action.payload,
                isLoading: false,
                totalPageCount: pagecount
            }
        case GET_GENRE:
            let genrecount = (action.payload.count===12)? 1 : parseInt(action.payload.count / 12) + 1
            return {
                ...state,
                reviewList: action.payload,
                isLoading: false,
                totalPageCount: genrecount
            }

        case GET_TOP_RATED:
            let topRatedcount =(action.payload.count===12)? 1 : parseInt(action.payload.count / 12) + 1

            return {
                ...state,
                reviewList: action.payload,
                isLoading: false,
                totalPageCount: topRatedcount
            }

        default:
            return state
    }
}



export default listReducer