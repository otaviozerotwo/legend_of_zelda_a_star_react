import { useState } from 'react';
import gridHyrule from '../data/GridMapaPrincipal';
import encontrarEntradaDungeon from '../utils/EncontrarEntradaDungeon';
import astar from '../utils/aStar';
import Graph from '../utils/Graph';
import TelaMapaPrincipal from './MapaPrincipal';
import entradasDungeons from '../utils/EntradasDungeons'

function RenderizarMapaPrincipal () {
  const [grid] = useState(gridHyrule);
  const [startNode] = useState({ x: 24, y: 27 });
  // const [endNode, setEndNode] = useState({ x: 39, y: 17 }); // entrada Dungeon 1
  // const [endNode, setEndNode] = useState({ x: 24, y: 1 }); // entrada Dungeon 2
  // const [endNode, setEndNode] = useState({ x: 5, y: 32 }); // entrada Dungeon 3
  const graph = new Graph(grid);
  const [caminhoEncontrado, setCaminhoEncontrado] = useState([]);

  // Função para executar a busca A* quando o botão for clicado
  const handleSearch = () => {
    const entradaMaisProxima = encontrarEntradaDungeon(startNode, entradasDungeons);
    // setCaminhoEncontrado(astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[endNode.x][endNode.y]));
    setCaminhoEncontrado(astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[entradaMaisProxima.x][entradaMaisProxima.y]));
    
    return setCaminhoEncontrado;
  };

  return (
    <>
      <button onClick={handleSearch}>Buscar</button>
      <TelaMapaPrincipal caminhoEncontrado={caminhoEncontrado} grid={grid}/>
    </>
  ); 
};

export default RenderizarMapaPrincipal;