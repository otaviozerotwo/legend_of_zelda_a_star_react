import { useState, useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { CustoCaminhoContext } from '../context/CustoCaminhoContext';
import atribuirClassNameParaCelula from '../utils/AtribuirClassNameDungeon';
import astar from '../utils/aStar';
import Graph from '../utils/Graph';
import gridDungeon1 from '../data/GridMapaDungeon1';
import { useStartEndNodes } from '../context/StartEndNodesContext';

import Resultados from '../components/Resultados';

const Dungeon1 = () => {
  const [grid] = useState(gridDungeon1);
  const { startNode, endNode } = useStartEndNodes();
  const graph = new Graph(grid);
  // const navegarPara = useNavigate();
  const { custoTotal, setCustoTotal } = useContext(CustoCaminhoContext);
  const [celulaAtualIndexIda, setCelulaAtualIndexIda] = useState(0);
  const [celulaAtualIndexVolta, setCelulaAtualIndexVolta] = useState(0);
  const [percorrerMapaClicado, setPercorrerMapaClicado] = useState(false);
  const [sairDungeonClicado, setSairDungeonClicado] = useState(false);

  const [caminhoIda, setCaminhoIda] = useState([]);
  const [caminhoVolta, setCaminhoVolta] = useState([]);
  
  const [celulasPercorridasIda, setCelulasPercorridasIda] = useState(() => {
    // Inicializa uma matriz booleana para rastrear cada célula como não visitada
    return grid.map(row => row.map(() => false));
  });

  const [celulasPercorridasVolta, setCelulasPercorridasVolta] = useState(() => {
    // Inicializa uma matriz booleana para rastrear cada célula como não visitada
    return grid.map(row => row.map(() => false));
  });

  useEffect(() => {
    if ((percorrerMapaClicado && caminhoIda) || (sairDungeonClicado && caminhoVolta)) {
      const interval = setInterval(() => {
        if (celulaAtualIndexIda < caminhoIda.length) {
          const currentNode = caminhoIda[celulaAtualIndexIda];
          setCelulaAtualIndexIda(prevIndex => prevIndex + 1);
          setCustoTotal(prevCustoTotal => prevCustoTotal + currentNode.weight);

          if (currentNode.x === endNode.x && currentNode.y === endNode.y) {
            clearInterval(interval);
          }
        } else if (celulaAtualIndexVolta < caminhoVolta.length) {
          const currentNode = caminhoVolta[celulaAtualIndexVolta];
          setCelulaAtualIndexVolta(prevIndex => prevIndex + 1);
          setCustoTotal(prevCustoTotal => prevCustoTotal + currentNode.weight);

          if (currentNode.x === endNode.x && currentNode.y === endNode.y) {
            clearInterval(interval);
          }
        }
      }, 200);

      return () => clearInterval(interval);
    }
  }, [caminhoIda, caminhoVolta, celulaAtualIndexIda, celulaAtualIndexVolta, endNode, percorrerMapaClicado, sairDungeonClicado, setCustoTotal]);

  useEffect(() => {
    if ((percorrerMapaClicado && caminhoIda) || (sairDungeonClicado && caminhoVolta)) {
      const interval = setInterval(() => {
        if (celulaAtualIndexIda < caminhoIda.length) {
          const currentNode = caminhoIda[celulaAtualIndexIda];

          // Marca a célula atual como percorrida na matriz de células percorridas
          setCelulasPercorridasIda(prevCelulasPercorridas => {
            const newCelulasPercorridas = [...prevCelulasPercorridas];
            newCelulasPercorridas[currentNode.x][currentNode.y] = true;
            return newCelulasPercorridas;
          });

          if (currentNode.x === endNode.x && currentNode.y === endNode.y) {
            clearInterval(interval);
          }
          
        } else if (celulaAtualIndexVolta < caminhoVolta.length) {
          const currentNode = caminhoVolta[celulaAtualIndexVolta];
          setCelulaAtualIndexVolta(prevIndex => prevIndex + 1);
          setCustoTotal(prevCustoTotal => prevCustoTotal + currentNode.weight);

          setCelulasPercorridasVolta(prevCelulasPercorridas => {
            const newCelulasPercorridas = [...prevCelulasPercorridas];
            newCelulasPercorridas[currentNode.x][currentNode.y] = true;
            return newCelulasPercorridas;
          });

          if (currentNode.x === endNode.x && currentNode.y === endNode.y) {
            clearInterval(interval);
          }
        }
      }, 200);

      return () => clearInterval(interval);
    }
  }, [caminhoIda, caminhoVolta, celulaAtualIndexIda, celulaAtualIndexVolta, endNode.x, endNode.y, percorrerMapaClicado, sairDungeonClicado, setCustoTotal]);

  const PercorrerMapa = () => {
    setPercorrerMapaClicado(true);
    const novoStartNode = startNode;
    const novoEndNode = endNode;
    setCaminhoIda(astar.search(graph, graph.grid[novoStartNode.x][novoStartNode.y], graph.grid[novoEndNode.x][novoEndNode.y]));  
  };

  const SairDungeon = () => {
    if (caminhoIda.length > 0) {
      setPercorrerMapaClicado(false);
      setSairDungeonClicado(true);
      const novoStartNode = endNode;
      const novoEndNode = startNode;
  
      setCaminhoVolta(astar.search(graph, graph.grid[novoStartNode.x][novoStartNode.y], graph.grid[novoEndNode.x][novoEndNode.y]));  
      
      // navegarPara('/');
    }
  };
  
  return (
    <>
      <div className="menu-lateral">
        <div className="titulo-h2">
          <h2>Menu Ações</h2>
        </div>

        <button onClick={PercorrerMapa} className="btn-menu-lateral">Percorrer Mapa</button>

        <button onClick={SairDungeon} className="btn-menu-lateral">Sair da Dungeon</button>
      </div>
      <div className="mapa-container">
        <div className="mapa-dungeon-container">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="mapa-linha">
              {row.map((cell, cellIndex) => {
                const className = atribuirClassNameParaCelula(cell);
                
                const isCelulaAtualCaminhoIda = celulaAtualIndexIda < caminhoIda.length && caminhoIda[celulaAtualIndexIda]?.x === rowIndex && caminhoIda[celulaAtualIndexIda]?.y === cellIndex;
                
                const isCelulaAtualCaminhoVolta = celulaAtualIndexVolta < caminhoVolta.length && caminhoVolta[celulaAtualIndexVolta]?.x === rowIndex && caminhoVolta[celulaAtualIndexVolta]?.y === cellIndex;
                
                const isCelulaPercorridaCaminhoIda = celulasPercorridasIda[rowIndex][cellIndex];
                const isCelulaPercorridaCaminhoVolta = celulasPercorridasVolta[rowIndex][cellIndex];
                
                return (
                  <div 
                    key={cellIndex} 
                    className={`mapa-celula ${className} ${isCelulaAtualCaminhoIda ? 'mapa-celula-posicao-atual-caminho-ida' : ''} ${isCelulaPercorridaCaminhoIda ? 'mapa-celula-caminho-percorrido-ida' : ''} ${isCelulaAtualCaminhoVolta ? 'mapa-celula-posicao-atual-caminho-volta' : ''} ${isCelulaPercorridaCaminhoVolta ? 'mapa-celula-caminho-percorrido-volta' : ''}`} >
                    
                    
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
      <Resultados custoTotal={custoTotal} />
    </>
  );
};

export default Dungeon1;
