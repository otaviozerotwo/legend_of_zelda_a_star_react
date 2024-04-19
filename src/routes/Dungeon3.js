import { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CustoCaminhoContext } from '../context/CustoCaminhoContext';
import atribuirClassNameParaCelula from '../utils/AtribuirClassNameDungeon';
import astar from '../utils/aStar';
import Graph from '../utils/Graph';
import gridDungeon3 from '../data/GridMapaDungeon3';

import MenuLateral from '../components/MenuAcoes';
import Resultados from '../components/Resultados';

const Dungeon3 = () => {
  const [grid] = useState(gridDungeon3);
  const [startNode, setStartNode] = useState({ x: 14, y: 25 });
  const [endNode, setEndNode] = useState({ x: 15, y: 19 });
  const graph = new Graph(grid);
  const rotaAtual = useLocation().pathname;
  const [mapaPercorrido, setMapaPercorrido] = useState(false);
  const { custoTotal, setCustoTotal } = useContext(CustoCaminhoContext);
  const [celulaAtualIndex, setCelulaAtualIndex] = useState(0);
  const [percorrerMapaClicado, setPercorrerMapaClicado] = useState(false);
  const [voltarEntradaClicado, setVoltarEntradaClicado] = useState(false);

  const [caminhoEncontrado, setCaminhoEncontrado] = useState([]);

  useEffect(() => {
    if ((percorrerMapaClicado || voltarEntradaClicado) && caminhoEncontrado) {
      const interval = setInterval(() => {
        if (celulaAtualIndex < caminhoEncontrado.length) {
          const currentNode = caminhoEncontrado[celulaAtualIndex];
          setCelulaAtualIndex(prevIndex => prevIndex + 1);
          setCustoTotal(prevCustoTotal => prevCustoTotal + currentNode.weight);
          if (currentNode.x === endNode.x && currentNode.y === endNode.y) {
            clearInterval(interval);
          }
        }
      }, 200);

      return () => clearInterval(interval);
    }
  }, [caminhoEncontrado, celulaAtualIndex, endNode, percorrerMapaClicado, setCustoTotal, voltarEntradaClicado]);

  const [celulasPercorridas, setCelulasPercorridas] = useState(() => {
    // Inicializa uma matriz booleana para rastrear cada célula como não visitada
    return grid.map(row => row.map(() => false));
  });

  useEffect(() => {
    if ((percorrerMapaClicado || voltarEntradaClicado) && caminhoEncontrado) {
      const interval = setInterval(() => {
        if (celulaAtualIndex < caminhoEncontrado.length) {
          const currentNode = caminhoEncontrado[celulaAtualIndex];
          // Marca a célula atual como percorrida na matriz de células percorridas
          setCelulasPercorridas(prevCelulasPercorridas => {
            const newCelulasPercorridas = [...prevCelulasPercorridas];
            newCelulasPercorridas[currentNode.x][currentNode.y] = true;
            return newCelulasPercorridas;
          });
        }
      }, 200);

      return () => clearInterval(interval);
    }
  }, [caminhoEncontrado, celulaAtualIndex, percorrerMapaClicado, voltarEntradaClicado]);

  const PercorrerMapa = () => {
    setPercorrerMapaClicado(true);
    setCaminhoEncontrado(astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[endNode.x][endNode.y]));  
    setMapaPercorrido(true);
  };

  const VoltarEntrada = () => {
    setVoltarEntradaClicado(true);
    const novoStartNode = {...endNode};
    const novoEndNode = {...startNode};
    setStartNode(endNode);
    setEndNode(startNode);
    setCaminhoEncontrado(astar.search(graph, graph.grid[novoStartNode.x][novoStartNode.y], graph.grid[novoEndNode.x][novoEndNode.y]));
  };

  return (
    <>
      <MenuLateral 
        PercorrerMapa={PercorrerMapa}
        mapaPercorrido={mapaPercorrido} 
        rotaAtual={rotaAtual}
        VoltarEntrada={VoltarEntrada}
      />
      <div className="mapa-container">
        <div className="mapa-dungeon-container">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="mapa-linha">
              {row.map((cell, cellIndex) => {
                const className = atribuirClassNameParaCelula(cell);
                const isCelulaAtual = celulaAtualIndex < caminhoEncontrado.length && caminhoEncontrado[celulaAtualIndex]?.x === rowIndex && caminhoEncontrado[celulaAtualIndex]?.y === cellIndex;
                const isCelulaPercorrida = celulasPercorridas[rowIndex][cellIndex];
                
                return (
                  <div 
                    key={cellIndex} 
                    className={`mapa-celula ${className} ${isCelulaAtual ? 'mapa-celula-posicao-atual' : ''} ${isCelulaPercorrida ? 'mapa-celula-caminho-percorrido' : ''}`} >
                    
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

export default Dungeon3;