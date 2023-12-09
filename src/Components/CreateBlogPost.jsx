import React, { useState } from 'react';
import { TextInput, Textarea, Button, Label } from 'flowbite-react';
const CreateBlogPost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
    };
   const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const updatedPosts = [...existingPosts, newPost];
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));

    
    addPost(newPost);

    setTitle('');
    setContent('');
  };

  return (
    <div className="lg:w-1/2 w-full">
      <div className='"w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-50'>
        <h2 className=' text-xl font-medium text-gray-200 text-center'>Create New Blog Post</h2>
        <form onSubmit={handleSubmit} className='mt-2'>
          <div className=''>
            <div className='flex-1'>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Title" />
              </div>
              <TextInput
                type="text"
                sizing="lg"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Your message" />
              </div>
              <Textarea
                placeholder="Content"
                rows={4} 
                value={content}
                className='block w-full h-20 px-5 py-3 mt-1 placeholder-gray-50 bg-white border border-gray-20 rounded-md md:h-48 focus:outline-none'
                onChange={(e) => setContent(e.target.value)}
                required
              ></Textarea>
            </div>
            <Button gradientMonochrome="success" className='text-white bg-black mt-2 ' type="submit">Create Post</Button>
          </div>
       
      </form>
      </div>
      
          
    </div>
  );
};

export default CreateBlogPost;
