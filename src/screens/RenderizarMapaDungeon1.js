import { useState } from 'react';
import gridDungeon1 from '../data/GridMapaDungeon1';
import astar from '../utils/aStar';
import Graph from '../utils/Graph';
import TelaMapaDungeon from './MapaDungeon';

function RenderizarMapaDungeon1 () {
  const [grid] = useState(gridDungeon1);
  const [startNode] = useState({ x: 14, y: 26 });
  const [endNode] = useState({ x: 13, y: 3 });
  const graph = new Graph(grid);
  const [caminhoEncontrado, setCaminhoEncontrado] = useState([]);

  // Função para executar a busca A* quando o botão for clicado
  const handleSearch = () => {
    setCaminhoEncontrado(astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[endNode.x][endNode.y]));
    
    return setCaminhoEncontrado;
  };

  return (
    <>
      <button onClick={handleSearch}>Buscar</button>
      <TelaMapaDungeon caminhoEncontrado={caminhoEncontrado} grid={grid}/>
    </>
  ); 
};

export default RenderizarMapaDungeon1;