import atribuirClassNameParaCelula from '../utils/AtribuirClassName';

const TelaMapaPrincipal = ({ caminhoEncontrado, grid }) => {
  return (
    <div className="container">
      <div className="mapa-container">
        <div className="mapa-hyrule-container">
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
    </div>
  );
};

export default TelaMapaPrincipal;