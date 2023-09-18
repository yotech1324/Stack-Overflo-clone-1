import React from 'react';
import {Routes , Route } from 'react-router-dom'
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion';
import DisplayQuestion from './pages/Questions/DisplayQuestion';
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users';
import userProfile from './pages/userProfile/userProfile';

const AllRoutes = () => {

return (

<Routes>
    <Route  path='/' Component={Home} />
    <Route path='/Auth' Component = {Auth} />
    <Route path='/Questions' Component = {Questions} />
    <Route path='/AskQuestion' Component = {AskQuestion} />
    <Route path='/Questions/:id' Component = {DisplayQuestion} />
    <Route path='/Tags' Component = {Tags} />
    <Route path='/Users' Component = {Users} />
    <Route path='/Users/:id' Component = {userProfile} />


</Routes>

)
}

export default AllRoutes