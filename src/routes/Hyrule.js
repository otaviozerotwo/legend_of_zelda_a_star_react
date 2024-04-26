import { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CaminhoEncontradoContext } from '../context/CaminhoEncontradoContext';
import { CustoCaminhoContext } from '../context/CustoCaminhoContext';
import atribuirClassNameParaCelula from '../utils/AtribuirClassName';
import encontrarEntradaDungeon from '../utils/EncontrarEntradaDungeon';
import astar from '../utils/aStar';
import Graph from '../utils/Graph';
import entradasDungeons from '../utils/EntradasDungeons';
import gridHyrule from '../data/GridHyrule';
import { useStartEndNodes } from '../context/StartEndNodesContext';

import MenuLateral from '../components/MenuAcoes';
import Resultados from '../components/Resultados';

const Hyrule = () => {
  const [grid] = useState(gridHyrule);
  const { startNode, setStartNode, endNode, setEndNode } = useStartEndNodes();
  const graph = new Graph(grid);
  const entradaMaisProxima = encontrarEntradaDungeon(startNode, entradasDungeons);
  const navegarPara = useNavigate();
  // const rotaAtual = useLocation().pathname;
  const [mapaPercorrido, setMapaPercorrido] = useState(false);
  const { caminhoEncontrado, setCaminhoEncontrado } = useContext(CaminhoEncontradoContext);
  const { custoTotal, setCustoTotal } = useContext(CustoCaminhoContext);
  const [celulaAtualIndex, setCelulaAtualIndex] = useState(0);
  const [percorrerMapaClicado, setPercorrerMapaClicado] = useState(false);

  useEffect(() => {
    if (percorrerMapaClicado && caminhoEncontrado) {
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
  }, [caminhoEncontrado, celulaAtualIndex, endNode.x, endNode.y, percorrerMapaClicado, setCustoTotal]);

  const [celulasPercorridas, setCelulasPercorridas] = useState(() => {
    // Inicializa uma matriz booleana para rastrear cada célula como não visitada
    return grid.map(row => row.map(() => false));
  });

  useEffect(() => {
    if (percorrerMapaClicado && caminhoEncontrado) {
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
  }, [caminhoEncontrado, celulaAtualIndex, percorrerMapaClicado]);

  const PercorrerMapa = () => {
    setPercorrerMapaClicado(true);

    console.log('entradaMaisProxima: ', entradaMaisProxima);
    
    setCaminhoEncontrado(astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[entradaMaisProxima.x][entradaMaisProxima.y]));

    setMapaPercorrido(true);
  };

  const EntrarDungeon = () => {
    setMapaPercorrido(false);
    setPercorrerMapaClicado(false);
    
    if (entradaMaisProxima.x === 39 && entradaMaisProxima.y === 17) {
      setStartNode({ x: 14, y: 26});
      setEndNode({ x: 13, y: 3});
      
      navegarPara('/dungeon_1');

    } else if (entradaMaisProxima.x === 24 && entradaMaisProxima.y === 1) {
      setStartNode({ x: 13, y: 25 });
      setEndNode({ x: 13, y: 2 });
      
      navegarPara('/dungeon_2');

    } else if (entradaMaisProxima.x === 5 && entradaMaisProxima.y === 32) {
      setStartNode({ x: 14, y: 25 });
      setEndNode({ x: 15, y: 19 });
      
      navegarPara('/dungeon_3');
    }
  };
  
  return (
    <>
      {/* <MenuLateral 
        PercorrerMapa={PercorrerMapa}
        mapaPercorrido={mapaPercorrido}
        EntrarDungeon={EntrarDungeon} 
        rotaAtual={rotaAtual}
      /> */}
      <div className="menu-lateral">
        <div className="titulo-h2">
          <h2>Menu Ações</h2>
        </div>

        <button onClick={PercorrerMapa} className="btn-menu-lateral">Percorrer Mapa</button>

        <button onClick={EntrarDungeon} className="btn-menu-lateral">Entrar na Dungeon</button>
      </div>
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
                    className={`mapa-celula ${className} ${isCelulaAtual ? 'mapa-celula-posicao-atual-caminho-ida' : ''} ${isCelulaPercorrida ? 'mapa-celula-caminho-percorrido-ida' : ''}`} >
                    
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