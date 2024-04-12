import { useState } from 'react';
import gridHyrule from '../data/GridMapaPrincipal';
import encontrarEntradaDungeon from '../utils/EncontrarEntradaDungeon';
import astar from '../utils/aStar';
import Graph from '../utils/Graph';
import entradasDungeons from '../utils/EntradasDungeons'

// Função para executar a busca A* quando o botão for clicado
const IniciarBusca = () => {
  const [grid] = useState(gridHyrule);
  const [startNode] = useState({ x: 24, y: 27 });
  const graph = new Graph(grid);
  // eslint-disable-next-line no-unused-vars
  const [caminhoEncontrado, setCaminhoEncontrado] = useState([]);
  const entradaMaisProxima = encontrarEntradaDungeon(startNode, entradasDungeons);

  const handleClick = () => {
    setCaminhoEncontrado(astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[entradaMaisProxima.x][entradaMaisProxima.y]));
  };
    

  return (
    <button onClick={handleClick} className="btn-menu-lateral">Game Start</button>
  )
};

export default IniciarBusca;