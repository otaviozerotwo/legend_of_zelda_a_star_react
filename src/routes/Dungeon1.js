import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaminhoEncontradoContext } from '../context/CaminhoEncontradoContext';
import { CustoCaminhoContext } from '../context/CustoCaminhoContext';
import atribuirClassNameParaCelula from '../utils/AtribuirClassNameDungeon';
import astar from '../utils/aStar';
import Graph from '../utils/Graph';
import gridDungeon1 from '../data/GridMapaDungeon1';
import { useStartEndNodes } from '../context/StartEndNodesContext';

import Resultados from '../components/Resultados';

const Dungeon1 = () => {
  const [grid] = useState(gridDungeon1);
  const { startNode, setStartNode, endNode } = useStartEndNodes();
  const graph = new Graph(grid);
  const navegarPara = useNavigate();
  const [mapaPercorrido, setMapaPercorrido] = useState(false);
  const { caminhoEncontrado, setCaminhoEncontrado } = useContext(CaminhoEncontradoContext);
  const { custoTotal, setCustoTotal } = useContext(CustoCaminhoContext);
  const [celulaAtualIndex, setCelulaAtualIndex] = useState(0);
  const [percorrerMapaClicado, setPercorrerMapaClicado] = useState(false);
  const [sairDungeonClicado, setSairDungeonClicado] = useState(false);
  

  useEffect(() => {
    if ((percorrerMapaClicado && caminhoEncontrado) || (caminhoEncontrado && sairDungeonClicado)) {
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
  }, [caminhoEncontrado, celulaAtualIndex, endNode, percorrerMapaClicado, sairDungeonClicado, setCustoTotal]);

  useEffect(() => {
    if ((percorrerMapaClicado && caminhoEncontrado) || (caminhoEncontrado && sairDungeonClicado)) {
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
  }, [caminhoEncontrado, celulaAtualIndex, percorrerMapaClicado, sairDungeonClicado]);

  const PercorrerMapa = () => {
    setPercorrerMapaClicado(true);
    setCaminhoEncontrado(astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[endNode.x][endNode.y]));  
    setMapaPercorrido(true);
  };

  const SairDungeon = () => {
    setSairDungeonClicado(true);
    const novoStartNode = endNode;
    const novoEndNode = startNode;

    console.log(novoStartNode);
    console.log(novoEndNode);

    setCaminhoEncontrado(astar.search(graph, graph.grid[novoStartNode.x][novoStartNode.y], graph.grid[novoEndNode.x][novoEndNode.y]));  
    
    // navegarPara('/');
  };

  useEffect(() => {
    if (caminhoEncontrado && sairDungeonClicado) {
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
  }, [caminhoEncontrado, celulaAtualIndex, endNode, sairDungeonClicado, setCustoTotal]);

  useEffect(() => {
    if (caminhoEncontrado && sairDungeonClicado) {
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
  }, [caminhoEncontrado, celulaAtualIndex, sairDungeonClicado]);

  const [celulasPercorridas, setCelulasPercorridas] = useState(() => {
    // Inicializa uma matriz booleana para rastrear cada célula como não visitada
    return grid.map(row => row.map(() => false));
  });
  
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

export default Dungeon1;