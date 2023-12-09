import React, { useState } from 'react';
import { TextInput, Textarea, Button, Label } from 'flowbite-react';

const EditBlogPost = ({ post, updatePost }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      ...post,
      title,
      content,
    };
    updatePost(updatedPost);
  };

  return (
      <div className='lg:w-1/2 w-full'>
          <div className='"w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-50'>
              <h2 className=' text-xl font-medium text-gray-200 text-center'>Edit Blog Post</h2>
               <form onSubmit={handleSubmit}>
              <div className=''>
                  <div className='flex-1'>
                      <div className="mb-2 block">
                          <Label htmlFor="title" value="Title" />
                      </div>
                      <TextInput
                          type="text"
                          sizing="lg"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required  
                      />
                  </div>
                  <div className='flex-1'>
                      <div className="mb-2 block">
                          <Label htmlFor="comment" value="Your Comment" />
                      </div>
                          <Textarea
                              value={content}
                              className='block w-full h-20 px-5 py-3 mt-1 placeholder-gray-50 bg-white border border-gray-20 rounded-md md:h-48 focus:outline-none'
                              onChange={(e) => setContent(e.target.value)}
                             required
                          ></Textarea>
                      </div>
                  <Button gradientMonochrome="success" className='text-white bg-black mt-2 ' type="submit">Update Post</Button>
              </div>
          </form>
          </div>
    
         
      </div>
  );
};

export default EditBlogPost;
