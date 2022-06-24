/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';

const WSContext = createContext();

export default function WSContextProvider({ children }) {
  const [socket, setSocket] = useState(new WebSocket(`${process.env.REACT_APP_SOCKET_PROXY_URL}:${process.env.REACT_APP_SERVER_PORT}`));

  return (
    <WSContext.Provider value={{ socket }}>
      {children}
    </WSContext.Provider>
  );
}

export const useWSContext = () => useContext(WSContext);
