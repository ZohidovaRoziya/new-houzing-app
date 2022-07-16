import React, { createContext, useState } from 'react'
export const ContextCreat = createContext();
export const Context = ({ children }) => {
  const [data, setData] = useState([]);
  return (
    <ContextCreat.Provider value={[data, setData]}>{children}</ContextCreat.Provider>
  )
}
export default Context;