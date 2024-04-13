import { createContext, useState } from "react";
import { CustoCaminhoProvider } from './CustoCaminhoContext';

export const CaminhoEncontradoContext = createContext();

export const CaminhoEncontradoProvider = ({ children }) => {
  const [caminhoEncontrado, setCaminhoEncontrado] = useState([]);
  return (
    <CaminhoEncontradoContext.Provider value={{ caminhoEncontrado, setCaminhoEncontrado }}>
      <CustoCaminhoProvider>
        {children}
      </CustoCaminhoProvider>
    </CaminhoEncontradoContext.Provider>
  );
};