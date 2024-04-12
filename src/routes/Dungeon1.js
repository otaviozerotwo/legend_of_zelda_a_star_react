import { useState, useContext } from 'react';
import gridDungeon1 from '../data/GridMapaDungeon1';
import atribuirClassNameParaCelula from '../utils/AtribuirClassNameDungeon';
import { CaminhoEncontradoContext } from '../context/CaminhoEncontradoContext';

const Dungeon1 = () => {
  const [grid] = useState(gridDungeon1);
  const { caminhoEncontrado } = useContext(CaminhoEncontradoContext);

  return (
    <div className="mapa-container">
      <div className="mapa-dungeon-container">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="mapa-linha">
            {row.map((cell, cellIndex) => {
              const className = atribuirClassNameParaCelula(cell);
              const isCaminho = caminhoEncontrado.some(node => node.x === rowIndex && node.y === cellIndex);
              return (
                <div 
                  key={cellIndex} 
                  className={`mapa-celula ${className} ${isCaminho ? 'caminho' : ''}`} >
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

export default Dungeon1;