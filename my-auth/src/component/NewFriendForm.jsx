import React, { useState } from 'react';
import axios from 'axios';

const NewFriendForm = () => {
    const[friendname, setFriendname] = useState('');
    const[age, setAge] = useState('');
    const[email, setEmail] = useState('');

    const changeHandler = (event) => {
        if(event.target.name === friendname) {
            setFriendname(event.target.value) 
        } else if (event.target.name === age){
            setAge(event.target.value)
        } else if (event.target.name === email){
            setEmail(event.target.value)
        } else {
            console.log('invalid');
        }
    };
    const submitHandler = (event) => {
        event.preventDefault();
        axios.get()
    }

    return (
        <div className='newfriend-form'>
            <form>
                <h1>NEW FRIENDS</h1>
              <input type="text" name='friendname' placeholder="friendname" onChange={changeHandler} />
              <input type="text" name='age' placeholder="age" onChange={changeHandler} />
              <input type="text" name='email' placeholder="email" onChange={changeHandler} />

              <input type="submit" value="submit" onSubmit={submitHandler} />  
            </form>
        </div>
    );
};

export default NewFriendForm;
