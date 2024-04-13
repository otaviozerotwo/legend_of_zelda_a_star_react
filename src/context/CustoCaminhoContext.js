import { createContext, useContext, useState } from 'react';

export const CustoCaminhoContext = createContext();

export const useCustoCaminho = () => useContext(CustoCaminhoContext);

export const CustoCaminhoProvider = ({ children }) => {
  const [custoTotal, setCustoTotal] = useState(0);

  const atualizaCustoTotal = (novoCusto) => {
    setCustoTotal(novoCusto);
  };

  return (
    <CustoCaminhoContext.Provider value={{ custoTotal, atualizaCustoTotal }}>
      {children}
    </CustoCaminhoContext.Provider>
  );
};