import React from 'react';

import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my react Router Website</h1>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/friends"> Friends</CustomLink>
            <CustomLink to="/about">About</CustomLink> 
            <CustomLink to="/posts"> Posts</CustomLink>
        </div>
    );
};

export default Header;