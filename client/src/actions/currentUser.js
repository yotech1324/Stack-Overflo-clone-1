export const setCurrnetUser = (data) => {
    return{
        type: 'FETCH_CURRENT_USER',
        payload: data
    }
}