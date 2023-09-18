import React , {useState} from 'react'; 
import './UsersProfile.css'

const EditprofileForm = ({currentUser , setSwitch}) => {

    const  [name , setName] = useState(currentUser?.result?.name)
    const  [about , setAbout] = useState(currentUser?.result?.about)
    const  [tags , setTags] = useState('')


return (

<div>
<h1 className="edit-profile-title">
    Edit your profile
</h1>
<h2 className="edit-profile-title-2">
    Public information
</h2>

<form className='edit-profile-form'>
    <label htmlFor='name'>
        <h3>Display Name</h3>
        <input type="text" value={name} onChange={(e) => setName(e.taget.value)} />
    </label>
    <label htmlFor='about'>
        <h3>About me</h3>
        <textarea id='about' cols='30' rows='10' value={about} onChange={(e) => setAbout(e.taget.value)} ></textarea>
    </label>
    <label htmlFor='tags'>
        <h3>Watched Tags</h3>
        <p>Add tags separated by 1 space</p>
        <input type="text" id='tags'  onChange={(e) => setTags(e.taget.value.split(' '))} />
    </label><br />
    <input type="submit" value='Save profile' className='user-submit-btn' />
    <button type='button' className='user-cancel-btn' onClick={() => setSwitch()}>Cancel</button>
</form>
</div>

)
}

export default EditprofileForm