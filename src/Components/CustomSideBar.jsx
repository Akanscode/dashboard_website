import React, {useState} from 'react';
//import { useSidebarItemContext } from './Context/SideBarItemContext';
//import { Sidebar, Button } from 'flowbite-react';
import {  HiChartPie, HiOutlineHome ,  HiOutlinePencilAlt  } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const CustomSidebar = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

   
  return (
    <div>
      <button
        onClick={handleSidebarToggle}
        data-drawer-target="sidebar"
        data-drawer-toggle="sidebar"
        aria-controls="sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="sidebar"
        onClick={handleSidebarClose}
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                <HiChartPie className='w-5 h-5 text-gray-500 transition duration-75' />
                <span className="ms-3">Dashboard</span>
              </div>
            </li>
            <li>
              <div
               
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
              >
                <HiOutlineHome className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75' />
                <Link to="/" className="flex-1 ms-3 whitespace-nowrap">Home</Link>
              </div>
            </li>
            <li>
              <div
                
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
              >
                <HiOutlinePencilAlt className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75' />
                <Link to="/createblog" className="flex-1 ms-3 whitespace-nowrap">Creat Blog</Link>
              </div>
            </li>
            <li>
              <button  className="flex items-center p-2 text-gray-900 rounded-lg  group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                </svg>
                <Link to="/" className="flex-1 ms-3 whitespace-nowrap">Sign Out</Link>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default CustomSidebar;
