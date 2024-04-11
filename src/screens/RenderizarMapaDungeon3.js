import { useState } from 'react';
import gridDungeon3 from '../data/GridMapaDungeon3';
import astar from '../utils/aStar';
import Graph from '../utils/Graph';
import TelaMapaDungeon from './MapaDungeon';

function RenderizarMapaDungeon3 () {
  const [grid] = useState(gridDungeon3);
  const [startNode] = useState({ x: 14, y: 25 });
  const [endNode] = useState({ x: 15, y: 19 });
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

export default RenderizarMapaDungeon3;