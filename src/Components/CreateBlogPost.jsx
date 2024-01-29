import React, { useState } from 'react';
import CustomSidebar from './CustomSideBar';
//import { TextInput, Textarea, Button, Label, Card, FileInput  } from 'flowbite-react';
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

    if (!title.trim() || !content.trim()) {
      
      
      return;
    }

    if (!image) {
      
      return;
    }

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

    // Clear form fields and error message
    setTitle('');
    setContent('');
    setImage(null);
    
  };

  return (
    <div>
      <CustomSidebar />
      <div className='p-4 sm:ml-64'>
        <div className='p-4'>
          <div className=" p-4 w-full max-w-2xl h-full md:h-auto">
      <div className=" p-4 bg-white rounded-lg shadow  sm:p-5">
        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
          <h3 className="text-lg font-semibold text-gray-900">
            Add Blog
          </h3>
        </div>
        <form action="#" onSubmit={handleSubmit}>
          <div className=" flex flex-col">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="file_input">Upload image</label>
              <input
                onChange={handleFileChange}
                accept="image/*"
                id="file-upload"
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none "
                type="file" />
            </div>
            <div>
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
              <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Title" required="" />
            </div>
            <div>
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
              <textarea id="description" rows="4" onChange={(e) => setContent(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write Blog description here"></textarea>
            </div>
          </div>
          <button
            type="submit"
            className=" mt-2 text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            <svg
              className="mr-1 -ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            Add New Blog
          </button>
        </form>
      </div>
    </div>
        </div>
      </div>
        
      
   </div>
  
      
     
    
  );
};

export default CreateBlogPost;
