import { useState, useContext, useEffect } from 'react';
import gridHyrule from '../data/GridHyrule';
import atribuirClassNameParaCelula from '../utils/AtribuirClassName';
import { CaminhoEncontradoContext } from '../context/CaminhoEncontradoContext';

const Hyrule = () => {
  const [grid] = useState(gridHyrule);
  const { caminhoEncontrado } = useContext(CaminhoEncontradoContext);
  const [celulaAtualIndex, setCelulaAtualIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (celulaAtualIndex < caminhoEncontrado.length) {
        setCelulaAtualIndex(prevIndex => prevIndex + 1);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [caminhoEncontrado, celulaAtualIndex]);
  
  return (
    <div className="mapa-container">
      <div className="mapa-hyrule-container">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="mapa-linha">
            {row.map((cell, cellIndex) => {
              const className = atribuirClassNameParaCelula(cell);
              const isCelulaAtual = celulaAtualIndex < caminhoEncontrado.length && caminhoEncontrado[celulaAtualIndex]?.x === rowIndex && caminhoEncontrado[celulaAtualIndex]?.y === cellIndex;
              return (
                <div 
                  key={cellIndex} 
                  className={`mapa-celula ${className} ${isCelulaAtual ? 'caminho' : ''}`} >
                  {/* <span className="mapa-coordenada-x">{`x: ${rowIndex}`}</span>  
                  <span className="mapa-coordenada-y">{`y: ${cellIndex}`}</span>   */}
                  {/* <span className="mapa-celula-custo-fixo">{cell}</span> */}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hyrule;