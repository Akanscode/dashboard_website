import React from 'react';
//import { useSidebarItemContext } from './Context/SideBarItemContext';
import { Sidebar, Button } from 'flowbite-react';
import {  HiChartPie, HiOutlineHome ,  HiOutlinePencilAlt  } from 'react-icons/hi';
//import { Link } from 'react-router-dom';

const CustomSidebar = ({  activeTab, handleLogout, setActiveTab }) => {
   
    return (
    <Sidebar className=" container mx-auto  sm:mx-0 sm:w-[200px] h-screen md:h-auto  overflow-y-auto overflow-x-hidden rounded bg-gray-600 py-4 px-2 text-white">
      <Sidebar.Items className='mt-6'>
          <Sidebar.ItemGroup className='mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0'>
            <Sidebar.Item className="bg-gray-500 text-black my-4 text-[0.94rem] " href="#" icon={HiChartPie}>
              Blog Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              className="text-black" href="#"
              onClick={() => setActiveTab('home')}
              active={activeTab === 'home'}
              icon={HiOutlineHome}
            >
              Home
            </Sidebar.Item>
            <Sidebar.Item
              className="text-black" href="#"
              onClick={() => setActiveTab('create')}
              active={activeTab === 'create'}
              icon={HiOutlinePencilAlt}
            >
              Create Blog
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <Button className='bg-red-200 text-white mt-28 ' onClick={handleLogout}>
          Logout
        </Button>
    </Sidebar>
  );
};

export default CustomSidebar;
