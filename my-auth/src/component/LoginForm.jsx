import React, { useState } from 'react';
import axios from 'axios';


const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const changeHandler = (event) => {
    //     if(event.target.name === username) {
    //         setUsername(event.target.value) 
    //     } else if (event.target.name === password){
    //         setPassword(event.target.value)
    //     } else {
    //         console.log('CHANGEHANDLER invalid');
    //     }
    // };
    
    const submitHandler = (event) => {
        console.log(username, password)
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', { username, password })
        .then((res) => {
            // console.log(res);
            localStorage.setItem('token', res.data.payload);
        })
        .catch((error) => {
            console.log(error.message);
        })
        //reset values to blank once submitted
        setUsername('');
        setPassword('');

    }

    return (
        <div className='login-form'>
            <form onSubmit={submitHandler}>
              <input type="text" name='username' placeholder="username" onChange={e => setUsername(e.target.value)} />
              <input type="password" name='password' placeholder="password" onChange={e => setPassword(e.target.value)}/>
              <input type="submit" value="submit" />  
            </form>
        </div>
    );
};

export default LoginForm;