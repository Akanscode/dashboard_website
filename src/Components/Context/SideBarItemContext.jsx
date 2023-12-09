import React, { createContext, useContext, useState } from 'react';

const SidebarItemContext = createContext();

export const useSidebarItemContext = () => {
  return useContext(SidebarItemContext);
};

export const SidebarItemProvider = ({ children }) => {
  const [activeItem, setActiveItem] = useState('home');

  const value = {
    activeItem,
    setActiveItem,
  };

  return (
    <SidebarItemContext.Provider value={value}>
      {children}
    </SidebarItemContext.Provider>
  );
};
