import React from 'react';

import { useDemo } from './Provider/DemoProvider';

const TestComponent = (props) => {
  const { name, changeName } = useDemo();
  return (
    <>
      <p className="App-link">{name}</p>
      <br />
      <button onClick={() => changeName('Javascript')}>Update name</button>
    </>
  );
};

export default TestComponent;
