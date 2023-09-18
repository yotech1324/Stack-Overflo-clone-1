import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import  { useSelector }  from 'react-redux'

import './HomeMainbar.css'
// import Questions from './Questions';
import QuestionList from './QuestionList';

const HomeMainbar = () => {
    
    const location = useLocation()
    const user = 1;
    const navigate = useNavigate()

    const checkAuth = () => {
        if (user === null) {
            alert("login or signup to ask a question")
            navigate('Auth')
        }else{
            navigate('/AskQuestion')
        }
    }


    const questionList = useSelector(state => state.questionsReducer)
    // console.log(questionList)

    // var questionList = [{
    //     _id: '1',
    //     upVotes: 2,
    //     downVotes: 2,
    //     noOfAnswers: 4,
    //     questionTitle: "what is a function?",
    //     questionBody: "It meantto be",
    //     questionTags: ["java", "javascript", "node.js", "mongodb", "react js"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     userId: 1,
    //     answer:[{
    //         _id: '1',
    //         answerBody: "Answer",
    //         userAnswered: "kumar",
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }
    //     ,{
    //         _id: '3',
    //         answerBody: "Answer",
    //         userAnswered: 'kumar',
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }
    // ]}, {
    //     _id: '2',
    //     upVotes: 4,
    //     downVotes: 2,
    //     noOfAnswers: 1,
    //     questionTitle: "what is a function?",
    //     questionBody: "It meantto be",
    //     questionTags: ["java", "javascript", "python",],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     userId: 2,
    //     answer: [{
    //         _id: '2',
    //         answerBody: "Answer",
    //         userAnswered: 'kumar',
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }
    //     ]}, {
    //     _id: '3',
    //     upVotes: 1,
    //     downVotes: 2,
    //     noOfAnswers: 3,
    //     questionTitle: "what is a function?",
    //     questionBody: "It meantto be",
    //     questionTags: ["java", "mongodb", "react js"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     userId: 3,
    //     answer: [{
    //         _id: '3',
    //         answerBody: "Answer",
    //         userAnswered: 'kumar',
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // }]

    return (

        <div className='main-bar'>

            <div className="main-bar-header">
                {
                    location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
                }

                <button  onClick={checkAuth} className='ask-btn'>Ask Question</button>
            </div>

            <div>
                {
                    questionList.data === null ?
                        <h1>Loading...</h1> :
                        <>
                            <p>{questionList.data.length} questions</p>

                            <QuestionList questionList={questionList.data} />

                        </>
                }
            </div>
        </div>
    )
}

export default HomeMainbar