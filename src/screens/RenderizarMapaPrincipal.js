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

  // Função para executar a busca A* quando o botão for clicado
  const iniciarBusca = () => {
    const entradaMaisProxima = encontrarEntradaDungeon(startNode, entradasDungeons);
    
    setCaminhoEncontrado(astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[entradaMaisProxima.x][entradaMaisProxima.y]));
    
    return setCaminhoEncontrado;
  };

  const entrarNaDungeon = () => {
    if (caminhoEncontrado.x === entradasDungeons.x && caminhoEncontrado.y === entradasDungeons.y){
      navegar('/dungeon_1')
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