import React, { use } from 'react';
import Post from './post';

const Posts = ({ fetchData }) => {
    const posts = use(fetchData)
    console.log(posts);
    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;