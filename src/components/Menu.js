import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaminhoEncontradoContext } from '../context/CaminhoEncontradoContext';
import encontrarEntradaDungeon from '../utils/EncontrarEntradaDungeon';
import astar from '../utils/aStar';
import Graph from '../utils/Graph';
import entradasDungeons from '../utils/EntradasDungeons'
import gridHyrule from '../data/GridHyrule';

const Menu = () => {
  const [grid] = useState(gridHyrule);
  const [startNode] = useState({ x: 24, y: 27 });
  const graph = new Graph(grid);
  const {setCaminhoEncontrado} = useContext(CaminhoEncontradoContext);
  const entradaMaisProxima = encontrarEntradaDungeon(startNode, entradasDungeons);
  const navegar = useNavigate();

  const PercorrerMapa = () => {
    setCaminhoEncontrado(astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[entradaMaisProxima.x][entradaMaisProxima.y]));
  };

  const EntrarDungeon = () => {
    if (entradaMaisProxima.x === 39 && entradaMaisProxima.y === 17) {
      navegar('/dungeon_1');
    } else if (entradaMaisProxima.x === 24 && entradaMaisProxima.y === 1) {
      navegar('/dungeon_2')
    } else if (entradaMaisProxima.x === 5 && entradaMaisProxima.y === 32) {
      navegar('/dungeon_3');
    }
  };

  return (
    <>
      <div className="menu-lateral">
        <button onClick={PercorrerMapa} className="btn-menu-lateral">Percorrer Mapa</button>
        <button onClick={EntrarDungeon} className="btn-menu-lateral">Entrar na Dungeon</button>
        {/* <Link to="/" className="btn-menu-lateral">Hyrule</Link>
        <Link to="/dungeon_1" className="btn-menu-lateral">Dungeon1</Link>
        <Link to="/dungeon_2" className="btn-menu-lateral">Dungeon2</Link>
        <Link to="/dungeon_3" className="btn-menu-lateral">Dungeon3</Link> */}
      </div>
    </>
  )
}

export default Menu;