import { useState } from 'react';
import gridHyrule from '../data/GridMapaPrincipal';
import encontrarEntradaDungeon from '../utils/EncontrarEntradaDungeon';
import astar from '../utils/aStar';
import Graph from '../utils/Graph';
import TelaMapaPrincipal from './MapaPrincipal';
import entradasDungeons from '../utils/EntradasDungeons'
import { useNavigate } from 'react-router-dom';

function RenderizarMapaPrincipal () {
  const [grid] = useState(gridHyrule);
  const [startNode] = useState({ x: 24, y: 27 });
  const graph = new Graph(grid);
  const [caminhoEncontrado, setCaminhoEncontrado] = useState([]);
  const navegar = useNavigate()
  const entradaMaisProxima = encontrarEntradaDungeon(startNode, entradasDungeons);

  // Função para executar a busca A* quando o botão for clicado
  const iniciarBusca = () => {
    
    setCaminhoEncontrado(astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[entradaMaisProxima.x][entradaMaisProxima.y]));
  };

  const entrarNaDungeon = () => {
    if (entradaMaisProxima.x === 39 && entradaMaisProxima.y === 17) {
      navegar('/dungeon_1');
    } else if (entradaMaisProxima.x === 24 && entradaMaisProxima.y === 1) {
      navegar('/dungeon_2');
    } else if (entradaMaisProxima.x === 5 && entradaMaisProxima.y === 32) {
      navegar('/dungeon_3');
    }
  };

  return (
    <>
      <button onClick={iniciarBusca}>Buscar</button>
      <button onClick={entrarNaDungeon}>Entrar na Dungeon</button>
      <TelaMapaPrincipal caminhoEncontrado={caminhoEncontrado} grid={grid}/>
    </>
  ); 
};

export default RenderizarMapaPrincipal;