import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <h3>They are my friends: {friends.length}</h3>
            <p>I don't have lots of money but have enough friends'</p>
            {
                friends.map(friend => <Friend friend = {friend} key = {friend.id}></Friend>)
            }
        </div>
    );
};

export default Friends;