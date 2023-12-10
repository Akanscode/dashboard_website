import React, { useState } from 'react';
import { TextInput, Textarea, Button, Label, Card, FileInput  } from 'flowbite-react';
const CreateBlogPost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null); 

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
       image,
    };
   const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const updatedPosts = [...existingPosts, newPost];
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));

    
    addPost(newPost);

    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <div className="lg:w-1/2 w-full">
      <h2 className=' text-xl font-medium text-gray-200 text-center'>Create New Blog Post</h2>
      <Card className=' bg-white rounded-lg shadow-4xl  shadow-gray-50'>
        <form onSubmit={handleSubmit} className=' p-4'>
          <div className=''>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="file-upload" value="Upload file" />
              </div>
              <FileInput
                id="file-upload"
                sizing="lg"
                onChange={handleFileChange}
                accept="image/*"
              />  
            </div>
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
      </Card>
    </div>
  );
};

export default CreateBlogPost;
