import Axios from "axios"
import { GET_LIST, LIST_LOADING, GET_PAGE, GET_SEARCH, GET_TOP_RATED, GET_GENRE } from "./index"


export const getList = () => (dispatch) => {
  
    dispatch(setListLoading())


    Axios.get(process.env.REACT_APP_BACKEND_URL + `/api/gamereviews/list`)
        .then(res =>
            Promise.resolve(dispatch({
                type: GET_LIST,
                payload: res.data
            })).then(() => dispatch(getPage(1)))



        )




}

export const getTopRated = () => (dispatch) => {
    dispatch(setListLoading())
    Axios.get(process.env.REACT_APP_BACKEND_URL + '/api/gamereviews/toprated').then(res =>
        Promise.resolve(dispatch({
            type: GET_TOP_RATED,
            payload: res.data
        })).then(() => dispatch(getPage(1)))

    )
}

export const getSearchQuery = (query) => dispatch => {



    Axios.get(process.env.REACT_APP_BACKEND_URL + `/api/gamereviews/search/${query}`)
        .then(res =>
            Promise.resolve(dispatch({
                type: GET_SEARCH,
                payload: res.data
            })).then(() => dispatch(getPage(1)))
        )

}

export const getGenre = (query) => dispatch => {

    Axios.get(process.env.REACT_APP_BACKEND_URL + `/api/gamereviews/genre/${query}`)
        .then(res =>
            Promise.resolve(dispatch({
                type: GET_GENRE,
                payload: res.data
            })).then(() => dispatch(getPage(1)))
        )

}
export const getPage = (num) => (dispatch, getState) => {


    dispatch({

        type: GET_PAGE,
        payload: { num: num, list: getState().list.reviewList }
    })
}





export const setListLoading = () => {

    return {
        type: LIST_LOADING
    }
}