import React from 'react';
import { Button } from 'flowbite-react';

const ViewBlogPost = ({ post, editPost, deletePost }) => {
  return (
   
      <div className='overflow-hidden transition-shadow duration-300 bg-white rounded-2xl'>
        <h2 className=' text-lg capitalize font-medium'>{post.title}</h2>
        <p className=' text-base font-light max-w-md'>{post.content}</p>
        <div className='flex space-x-4'>
          <Button gradientDuoTone="tealToLime" className=' bg-blue-400 text-white' onClick={() => editPost(post)}>Edit</Button>
          <Button gradientMonochrome="failure" className=' bg-red-500 text-white' onClick={() => deletePost(post.id)}>Delete</Button>
        </div>
      </div>
      
    
  );
};

export default ViewBlogPost;
