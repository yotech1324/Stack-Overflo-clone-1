import React from 'react';
import { Link, useLocation } from 'react-router-dom'

import './HomeMainbar.css'

const HomeMainbar = () => {

    var questionList = [{
        id: 1,
        votes: 3,
        noOfAnswers: 2,
        questionTitle: "what is a function?",
        questionBody: "It meantto be",
        questionTags: ["java", "javascript", "node.js", "mongodb", "react js"],
        userPosted: "mano",
        askedOn: "jan 1"
    }, {
        id: 2,
        votes: 0,
        noOfAnswers: 0,
        questionTitle: "what is a function?",
        questionBody: "It meantto be",
        questionTags: ["java", "javascript", "python",],
        userPosted: "mano",
        askedOn: "jan 1"
    }, {
        id: 3,
        votes: 1,
        noOfAnswers: 1,
        questionTitle: "what is a function?",
        questionBody: "It meantto be",
        questionTags: ["java", "mongodb", "react js"],
        userPosted: "mano",
        askedOn: "jan 1"
    }]

    const location = useLocation()
    return (

        <div className='main-bar'>

            <div className="main-bar-header">
              {
                location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
              }
              
              <Link to='/AskQuestion' className='ask-btn'>Ask Question</Link>
        </div>

    <div>
        {
            questionList === null ?
            <h1>Loading...</h1> :
            <>
            <p>{ questionList.length } questions</p>
            </>
        }
    </div>
</div>
    )
}

export default HomeMainbar