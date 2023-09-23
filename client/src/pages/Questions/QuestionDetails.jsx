import React, { useState } from 'react';
import { Link, useParams, useNavigate, useLocation, } from 'react-router-dom';
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import copy from 'copy-to-clipboard'

import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer';
import { deleteQuestion, postAnswer , voteQuestion } from '../../actions/question'


const QuestionDetails = () => {
    const { id } = useParams()
    const questionList = useSelector(state => state.questionsReducer)

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
    //     userId: 1,
    //     answer: [{
    //         _id: '3',
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
    //     userId: 1,
    //     answer: [{
    //         _id: '3',
    //         answerBody: "Answer",
    //         userAnswered: 'kumar',
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // }]
    const [Answer, setAnswer] = useState('')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const Location = useLocation()
    const url = 'https://stack-overflow-y.netlify.app'
    const User = useSelector((state) => (state.currentUserReducer))
    const handlePostAns = (e, answerLength) => {
        e.preventDefault()

        if (User === null) {
            alert("LogIn or SignUp to answer a question ")
            Navigate('/Auth')
        } else {
            if (Answer === '') {
                alert("Enter an answer before submitting")
            } else {

                dispatch(postAnswer({
                    id,
                    noOfAnswers: answerLength + 1,
                    answerBody: Answer,
                    userAnswered: User.result.name,
                    userId : User.result._id
                })
                );
            }
        }
    }


    const handleShare = () => {
        copy(url + Location.pathname)
        alert('copied url : ' + url + Location.pathname)
    }

    const handleDelete = () => {
        dispatch( deleteQuestion(id , Navigate) )
    }

const handleUpVote = () => {
dispatch(voteQuestion(id , 'upVote', User.result._id))
}

const handleDownVote = () => {
    dispatch(voteQuestion(id , 'downVote', User.result._id))

}



    return (

        <div className='question-details-page'>
            {
                questionList.data === null ?
                    <h1>Loading...</h1> :
                    <>
                        {
                            questionList.data.filter((question) => question._id === id).map((question) => (
                                <div key={question._id}>
                                    <section className='question-details-container'>
                                        <h1>{question.questionTitle}</h1>
                                        <div className='question-details-container-2'>
                                            <div className="question-votes">
                                                <img src={upvote} alt="" width='18' onClick={handleUpVote}/>
                                                <p>{question.upVote.length - question.downVote.length}</p>
                                                <img src={downvote} alt="" width='18' onClick={handleDownVote}/>
                                            </div>

                                            <div style={{ width: '100%' }}>
                                                <p className='question-body'>{question.questionBody}</p>
                                                <div className='question-details-tags'>
                                                    <div className='tags'>  {
                                                        question.questionTags.map((tag) => (
                                                            <p key={tag}>{tag}</p>
                                                        ))
                                                    }

                                                    </div>
                                                    <div className="question-actions-user">
                                                        <div >
                                                            <button type='button' onClick={handleShare} >Share</button>

                                                            {
                                                                User?.result?._id === question?.userId && (
                                                                    <button type='button' onClick={handleDelete} >Delete</button>
                                                                )
                                                            }
                                                        </div>
                                                        <div>
                                                            <p>asked {moment(question.askedOn).fromNow()}</p>
                                                            <Link to={`/users/${question.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                                                                <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                                <div>
                                                                    {question.userPosted}
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section> 
                                    {
                                        question.noOfAnswers !== 0 && (
                                            <section>
                                                <h3>{question.noOfAnswers} Answers</h3>
                                                <DisplayAnswer key={question._id} question={question} handleShare={handleShare} />
                                            </section>
                                        )
                                    }
                                    <section className='post-ans-container'>
                                        <h3>Your Answer</h3>
                                        <form onSubmit={(e) => { handlePostAns(e, question.answer.length) }} >
                                            <textarea name="" id="" cols="30" rows="10" onChange={(e) => setAnswer(e.target.value)} ></textarea> <br />

                                            <input type="Submit"  className='post-ans-btn' value='Post Your Answer' />
                                        </form>

                                        <p>
                                            Browse other Question tagged

                                            {
                                                question.questionTags.map((tag) => (
                                                    <Link to='Tags' key={tag} className='ans-tags'> {tag} </Link>
                                                ))
                                            } or
                                            <Link to='/AskQuestion' style={{ textDecoration: "none", color: "#009dff" }}> ask your own question.</Link>
                                        </p>
                                    </section>
                                </div>
                            ))
                        }
                    </>
            }
        </div>

    )
}

export default QuestionDetails