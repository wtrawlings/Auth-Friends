import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewFriendForm from './NewFriendForm';
import axiosWithAuth from './axiosWithAuth'

const FriendList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])


    return (
        <div>
            <NewFriendForm />
        </div>
    )
}

export default FriendList;