import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [friendId])
    return (
        <div>
            <h2>This is for a friend detail {friendId}</h2>
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h5>Username: {friend.username}</h5>
            <p>City: {friend.address?.city}</p>
            <p>Lat: {friend.address?.geo?.lat}</p>

        </div>
    );
};

export default FriendDetail;