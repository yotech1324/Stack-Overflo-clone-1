import React from 'react';
import {Routes , Route } from 'react-router-dom'
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import Questions from './pages/Questions/Questions'

const AllRoutes = () => {

return (

<Routes>
    <Route  path='/' Component={Home} />
    <Route path='/Auth' Component = {Auth} />
    <Route path='/Questions' Component = {Questions} />

</Routes>

)
}

export default AllRoutes