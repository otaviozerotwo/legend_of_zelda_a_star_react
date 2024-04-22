import { createContext, useState } from "react";
import { StartEndNodesProvider } from './StartEndNodesContext';
import { CustoCaminhoProvider } from './CustoCaminhoContext';

export const CaminhoEncontradoContext = createContext();

export const CaminhoEncontradoProvider = ({ children }) => {
  const [caminhoEncontrado, setCaminhoEncontrado] = useState([]);
  return (
    <CaminhoEncontradoContext.Provider value={{ caminhoEncontrado, setCaminhoEncontrado }}>
      <StartEndNodesProvider>
        <CustoCaminhoProvider>
          {children}
        </CustoCaminhoProvider>
      </StartEndNodesProvider>
    </CaminhoEncontradoContext.Provider>
  );
};