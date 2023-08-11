import * as api from '../api'
import { setCurrnetUser } from './currentUser'

export const signup = (authdata, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authdata)
        dispatch({ type: 'AUTH', data })
        dispatch(setCurrnetUser(JSON.parse(localStorage.getItem('profile'))))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}


export const login = (authdata, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authdata)
        dispatch({ type: 'AUTH', data })
        dispatch(setCurrnetUser(JSON.parse(localStorage.getItem('profile'))))
        navigate('/')
    } catch (error) {
        console.log(error) 
    }
}
