import { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CaminhoEncontradoContext } from '../context/CaminhoEncontradoContext';
import { CustoCaminhoContext } from '../context/CustoCaminhoContext';
import atribuirClassNameParaCelula from '../utils/AtribuirClassName';
import encontrarEntradaDungeon from '../utils/EncontrarEntradaDungeon';
import astar from '../utils/aStar';
import Graph from '../utils/Graph';
import entradasDungeons from '../utils/EntradasDungeons'
import gridHyrule from '../data/GridHyrule';

import MenuLateral from '../components/MenuAcoes';
import Resultados from '../components/Resultados';

const Hyrule = () => {
  const [grid] = useState(gridHyrule);
  const [startNode, setStartNode] = useState({ x: 24, y: 27 });
  const [endNode, setEndNode] = useState({ x: 6, y: 5 });
  const graph = new Graph(grid);
  const { caminhoEncontrado, setCaminhoEncontrado } = useContext(CaminhoEncontradoContext);
  const entradaMaisProxima = encontrarEntradaDungeon(startNode, entradasDungeons);
  const navegarPara = useNavigate();
  const rotaAtual = useLocation();
  const [mapaPercorrido, setMapaPercorrido] = useState(false);
  const { custoTotal, setCustoTotal } = useContext(CustoCaminhoContext);
  const estaNaRotaRaiz = rotaAtual.pathname === '/';
  const estaNaRotaDeDungeon = ['/dungeon_1', '/dungeon_2', '/dungeon_3'].includes(rotaAtual.pathname);
  const [celulaAtualIndex, setCelulaAtualIndex] = useState(0);

  useEffect(() => {
    if (mapaPercorrido && caminhoEncontrado) {
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
  }, [mapaPercorrido, caminhoEncontrado, celulaAtualIndex, endNode.x, endNode.y, setCustoTotal]);

  const [celulasPercorridas, setCelulasPercorridas] = useState(() => {
    // Inicializa uma matriz booleana para rastrear cada célula como não visitada
    return grid.map(row => row.map(() => false));
  });

  useEffect(() => {
    if (mapaPercorrido && caminhoEncontrado) {
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
  }, [mapaPercorrido, caminhoEncontrado, celulaAtualIndex]);

  const PercorrerMapa = () => {
    if (estaNaRotaRaiz) {
      // const caminho = astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[entradaMaisProxima.x][entradaMaisProxima.y]);

      setCaminhoEncontrado(astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[entradaMaisProxima.x][entradaMaisProxima.y]));
      setMapaPercorrido(true);
  
    } else {
      setEndNode(entradaMaisProxima.x, entradaMaisProxima.y);
      // const caminho = astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[endNode.x][endNode.y]);

      setCaminhoEncontrado(astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[endNode.x][endNode.y]));
      setMapaPercorrido(true);
      
    }
  };

  const EntrarDungeon = () => {
    if (entradaMaisProxima.x === 39 && entradaMaisProxima.y === 17) {
      setStartNode({ x: 14, y: 26 });
      setEndNode({ x: 13, y: 3 });
      navegarPara('/dungeon_1');
    } else if (entradaMaisProxima.x === 24 && entradaMaisProxima.y === 1) {
      setStartNode({ x: 13, y: 25 });
      setEndNode({ x: 13, y: 2 });
      navegarPara('/dungeon_2')
    } else if (entradaMaisProxima.x === 5 && entradaMaisProxima.y === 32) {
      navegarPara('/dungeon_3');
    }
  };
  
  return (
    <>
      <MenuLateral 
        PercorrerMapa={PercorrerMapa}
        estaNaRotaRaiz={estaNaRotaRaiz}
        mapaPercorrido={mapaPercorrido}
        EntrarDungeon={EntrarDungeon} 
        estaNaRotaDeDungeon={estaNaRotaDeDungeon} 
      />
      <div className="mapa-container">
        <div className="mapa-hyrule-container">
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

export default Hyrule;