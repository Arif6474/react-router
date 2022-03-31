import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const {postId} = useParams();
    const [status, setStatus] =useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(response => response.json())
        .then(data=>setStatus(data))

    },[postId]);
    return (
        <div>
            <h3>This is a post details: {postId}</h3>
            <h5>Id: {status.id}</h5>
            <h2>Title: {status.title}</h2>
            <p>{status.body}</p>
        </div>
    );
};

export default Post;