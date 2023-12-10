import React from 'react';
import { Button, Card } from 'flowbite-react';

const ViewBlogPost = ({ post, editPost, deletePost }) => {
  const { title, content, image } = post
  return (
   
    <Card className='max-w-sm bg-white rounded-2xl p-4'>
       {image && <img src={URL.createObjectURL(image)} alt="Uploaded" />}
        <h2 className=' text-lg capitalize font-medium'>{title}</h2>
        <p className=' text-base font-light max-w-md'>{content}</p>
        <div className='flex space-x-4'>
          <Button gradientDuoTone="tealToLime" className=' bg-blue-400 text-white' onClick={() => editPost(post)}>Edit</Button>
          <Button gradientMonochrome="failure" className=' bg-red-500 text-white' onClick={() => deletePost(post.id)}>Delete</Button>
        </div>
      </Card>
      
    
  );
};

export default ViewBlogPost;
