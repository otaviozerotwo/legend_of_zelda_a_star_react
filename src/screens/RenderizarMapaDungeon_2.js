import { useState } from 'react';
import gridDungeon_2 from '../data/GridMapaDungeon_2';
import astar from '../utils/aStar';
import Graph from '../utils/Graph';
import TelaMapaDungeon from './MapaDungeon';

function RenderizarMapaPrincipal () {
  const [grid] = useState(gridDungeon_2);
  const [startNode] = useState({ x: 13, y: 25 });
  const [endNode] = useState({ x: 13, y: 2 });
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

export default RenderizarMapaPrincipal;