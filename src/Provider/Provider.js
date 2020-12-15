import { useContext, useState } from 'react';
import Context from './Context';

const Provider =  ({ children }) => {
  const [test, setTest] = useState('as');
  const constObject = {
    test, setTest
  }

  return (
    <Context.Provider value={constObject}>
      {children}
    </Context.Provider>
  )
}

export default Provider;
