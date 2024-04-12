import { createContext, useState } from "react";

export const CaminhoEncontradoContext = createContext();

export const CaminhoEncontradoProvider = ({ children }) => {
  const [caminhoEncontrado, setCaminhoEncontrado] = useState([]);
  return (
    <CaminhoEncontradoContext.Provider value={{ caminhoEncontrado, setCaminhoEncontrado }}>
      {children}
    </CaminhoEncontradoContext.Provider>
  );
};