import React from 'react';
import CustomSidebar from './CustomSideBar';
//import { TextInput, Textarea, Button, Label, Card } from 'flowbite-react';

const EditBlogPost = () => {

  

  return (
    <div>
      <CustomSidebar />
      <div className='p-4 sm:ml-64'>
        <div className='p-4'>
           <section className="bg-white ">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 ">Update Blog</h2>
        <form action="#" >
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="sm:col-span-2">
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
              <input
                type="text"
                name="title"
                id="title" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Type Title" required />
            </div>
            <div>
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
              <textarea id="description" rows="4"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write Blog description here"></textarea>                    
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
              Update Blog
            </button>
          </div>
        </form>
      </div>
    </section>
        </div>
      </div>
    </div>
   
            
  );
};

export default EditBlogPost;
