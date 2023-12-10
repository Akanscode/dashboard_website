import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const ViewSingleBlogPost = ({ posts }) => {
  const { title, content, image } = posts
  const { id } = useRouteMatch().params;

  const post = posts.find((post) => post.id === parseInt(id));

  return (
    <div>
      <h1 >View Blog Post</h1>
      {post ? (
        <div className='flex flex-col items-center justify-center'>
          {image && <img src={URL.createObjectURL(image)} alt="Uploaded" />}
          <h2 className=' text-lg capitalize font-medium'>{title}</h2>
          <p className=' text-base font-light max-w-md'>{content}</p>
          <Link to="/">Go Back</Link>
        </div>
      ) : (
        <p className='text-center text-2xl font-bold capitalize'>Post not found</p>
      )}
    </div>
  );
};

export default ViewSingleBlogPost;
