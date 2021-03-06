import { apiUrl } from "../../components/utils/constants";

export const GET_ARTICLES_REQUEST = "ARTICLES::GET_ARTICLES_REQUEST";
export const GET_ARTICLES_SUCCESS = "ARTICLES::GET_ARTICLES_SUCCESS";
export const GET_ARTICLES_FAILURE = "ARTICLES::GET_ARTICLES_FAILURE";

export const getArticlesRequest = () => ({
    type: GET_ARTICLES_REQUEST,
});

export const getArticlesSuccess = (data) => ({
    type: GET_ARTICLES_SUCCESS,
    payload: data,
});

export const getArticlesFailure = (error) => ({
    type: GET_ARTICLES_FAILURE,
    payload: error,
})

//middleware
export const getArticles = () => async (dispatch) => {
    try {
        dispatch(getArticlesRequest());
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        console.log('response', response);

        const result = await response.json();
        console.log('result', result);

        dispatch(getArticlesSuccess(result.data));
    } catch (err) {
        console.log(err);
        dispatch(getArticlesFailure(err.message));
    } 
};