import React from 'react'; 
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import TagsList from './TagsList' 
import './Tags.css'

const Tags = () => {

const tagsList = [{
    id:1,
    tagName: "JavaScript",
    tagDesc :"For Question regarding programming in ECMAScript(JavaScript/JS) and its various dialects/ implementations (excluding ActionScript). Please include all relevant tags on your question. "
},{
    id:2,
   tagName:"Python",
   tagDesc: "Python is a high-level, general-purpose programmity with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming. "
},
{
    id:3,
   tagName:"Java",
   tagDesc:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
},
{
    id:4,
   tagName:"Java",
   tagDesc:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
},
{
    id:5,
   tagName:"Java",
   tagDesc:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
},
{
    id:6,
   tagName:"Java",
   tagDesc:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
},{
    id:7,
   tagName:"Python",
   tagDesc: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant i supports multiple programming paradigms, including structured, object-oriented and functional programming. "
},{
    id:8,
   tagName:"Python",
   tagDesc: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the d garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming. "
},{
    id:9,
   tagName:"Python",
   tagDesc: "Python is a high-leverpose programming language.mphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming. "
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
    <TagsList tag = {tag} key = {tagsList.id} />
))
    }
</div>


</div>
</div>

)
}

export default Tags