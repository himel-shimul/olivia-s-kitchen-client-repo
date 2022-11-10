import React from 'react';
import useSetTitle from '../../Hooks/useSetTitle';

const Blog = () => {
    useSetTitle('Blog')
    return (
        <div>
            <h2>blog page</h2>
        </div>
    );
};

export default Blog;