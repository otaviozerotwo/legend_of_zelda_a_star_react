import { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CaminhoEncontradoContext } from '../context/CaminhoEncontradoContext';
import { CustoCaminhoContext } from '../context/CustoCaminhoContext';
import encontrarEntradaDungeon from '../utils/EncontrarEntradaDungeon';
import astar from '../utils/aStar';
import Graph from '../utils/Graph';
import entradasDungeons from '../utils/EntradasDungeons'
import gridHyrule from '../data/GridHyrule';

const Menu = () => {
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

  // const calcularCustoCaminho = (caminho) => {
  //   let custo = 0;

  //   caminho.forEach(node => {
  //     custo += node.weight;
  //   });

  //   atualizaCustoTotal(custo);
  // };

  const PercorrerMapa = () => {
    if (estaNaRotaRaiz) {
      const caminho = astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[entradaMaisProxima.x][entradaMaisProxima.y]);

      setCaminhoEncontrado(caminho);
      setMapaPercorrido(true);
      // calcularCustoCaminho(caminho);
    } else {
      setEndNode(entradaMaisProxima.x, entradaMaisProxima.y);
      const caminho = astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[endNode.x][endNode.y]);

      setCaminhoEncontrado(caminho);
      setMapaPercorrido(true);
      // calcularCustoCaminho(caminho);
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

  useEffect(() => {
    if (mapaPercorrido && caminhoEncontrado) {
      const interval = setInterval(() => {
        const currentNode = caminhoEncontrado[celulaAtualIndex];

        if (currentNode) {
          setCustoTotal(prevCustoTotal => prevCustoTotal + currentNode.weight);
        }

        setCelulaAtualIndex(prevIndex => prevIndex + 1);

        if (currentNode && currentNode.x === endNode.x && currentNode.y === endNode.y) {
          clearInterval(interval);
        }
      }, 200);

      return () => clearInterval(interval);
    }
  }, [mapaPercorrido, caminhoEncontrado, celulaAtualIndex, endNode.x, endNode.y, setCustoTotal]);
  
  

  return (
    <>
      <div className="menu-lateral">
        <button onClick={PercorrerMapa} className="btn-menu-lateral">Percorrer Mapa</button>

        {estaNaRotaRaiz && mapaPercorrido && (
          <button onClick={EntrarDungeon} className="btn-menu-lateral">Entrar na Dungeon</button>
        )}

        {estaNaRotaDeDungeon && (
          <button onClick={() => navegarPara('/')} className="btn-menu-lateral">Voltar</button>
        )}

        <div>{`Custo Total: ${custoTotal}`}</div>

      </div>
      
      {/* {caminhoEncontrado && (
        <div>
          {caminhoEncontrado.map((node, index) => (
            <>
              <div>
                <span key={index}>x: {node.x}</span>
                <span key={index}> y: {node.y}</span>
                <span key={index}> weight: {node.weight}</span>
              </div>
            </>
          ))}
        </div>
      )} */}
    </>
  )
}

export default Menu;