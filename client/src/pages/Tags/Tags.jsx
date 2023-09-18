import React from 'react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

    const tagsList = [{
        id: 1,
        tagName: "JavaScript",
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question."
    }, {
        id: 2,
        tagName: "Python",
        tagDesc: "Python is multi-paradigm, dynamically typed,multipurpose programming language. It is designed to be quick to learn,understand and use,and enforces a clean and uniform syntax."
    },
    {
        id: 3,
        tagName: "C#",
        tagDesc: "C# (pronounced as 'see sharp) is a high level , statically typed, multi-paradigm programming language developed by microsoft."
    },
    {
        id: 4,
        tagName: "Java",
        tagDesc: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.Use this tag when you're having problems in using or understanding the language itself."
    },
    {
        id: 5,
        tagName: "php",
        tagDesc: "PHP is a widely used, open source, general purpose, multi-paradigm, dynamically typed and interpreted scripting language, originally designed for server side web development."
    },
    {
        id: 6,
        tagName: "HTML",
        tagDesc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser."
    }, {
        id: 7,
        tagName: "Android",
        tagDesc: "Android is a Google's mobile operating system,used for programmng or developing digital devices(Smartphones,Tablets, Automobiles,Tvs,Wear glass , IoT)."
    }, {
        id: 8,
        tagName: "CSS",
        tagDesc: "CSS is a representation style sheet language used for describing the look and formatting of HTML, XML documents and SVG elements including colors,layouts,fonts and animations"
    }, {
        id: 9,
        tagName: "ReactJS",
        tagDesc: "React is a JavaScript library for building user interfaces.It uses a declarative, component-based paradigm and aims to be both efficient and flexible."
    }, {
        id: 10,
        tagName: "Node.JS",
        tagDesc: "Node.JS is an event-based, non-blocking, asynchronous I/O runtime that uses Googles V8 JavaScript engine and libuv library."
    }]


    return (

        <div className='home-container-1'>
            <LeftSidebar />
            <div className="home-container-2">
                <h1 className='tags-h1'>Tags</h1>
                <p className='tags-p'>A tag is a keyword or a label that categorizes your question with others, similer questions.</p>
                <p className='tags-p'>using the right tag makes it easier for others to find and answer your question.</p>
                <div className='tags-list-container'>
                    {
                        tagsList.map((tag) => (
                            <TagsList tag={tag} key={tagsList.id} />
                        ))
                    }
                </div>


            </div>
        </div>

    )
}

export default Tags