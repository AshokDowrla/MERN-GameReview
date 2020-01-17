import { GET_PAGE } from "../actions"

const initialState = {

    pageNo: 1,
    pageActive: 1,
    pageLoading: true,
    pageResults: {
        reviews: [],
        count: 0
    }
}



const pageReducer = (state = initialState, action) => {

    switch (action.type) {



        case GET_PAGE:


            const { num, list } = action.payload


            //console.log(num)

            const numStart = (num <= 5) ? 1 : parseInt((num - 1) / 5) * 5 + 1


            //console.log(numStart)

            let Result = []
            if (list.count > (num - 1) * 12 && list.count < (num - 1) * 12 + 12) {


                
                Result = (list.game_reviews).slice((num - 1) * 12, list.count)

            }
            else if(list.count >= (num - 1) * 12 + 12) {
                Result = (list.game_reviews).slice((num - 1) * 12, (num - 1) * 12 + 12)

            }

            return {
                ...state,

                pageActive: num,
                pageNo: numStart,
                pageResults: {
                    ...state.pageResults,
                    reviews: Result,
                    count: Result.length
                },
                pageLoading: false
            }

        default:
            return state
    }
}


export default pageReducer

