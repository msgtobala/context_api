import React, { createContext, useContext, useState } from 'react';

const DemoContext = createContext({ name: '', changeName: (_) => {} });

export const useDemo = () => {
  return useContext(DemoContext);
};

const DemoProvider = ({ children }) => {
  const [name, setName] = useState('');

  const changeName = (name) => {
    console.log(name);
    setName(name);
  };

  const value = {
    name,
    changeName,
  };

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
};

export default DemoProvider;
