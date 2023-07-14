import * as api from '../api'

export const signup = (authdata, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authdata)
        dispatch({ type: 'AUTH', data })
        
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}


export const login = (authdata, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authdata)
        dispatch({ type: 'AUTH', data })
        
        navigate('/')
    } catch (error) {
        console.log(error) 
    }
}
