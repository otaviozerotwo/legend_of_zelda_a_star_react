import { useState } from 'react';
import encontrarEntradaDungeon from '../utils/EncontrarEntradaDungeon';
import entradasDungeons from '../utils/EntradasDungeons'
import { useNavigate } from 'react-router-dom';

const EntrarDungeon = () => {
  const [startNode] = useState({ x: 24, y: 27 });
  const navegar = useNavigate()
  const entradaMaisProxima = encontrarEntradaDungeon(startNode, entradasDungeons);

  const handleClick = () => {
    if (entradaMaisProxima.x === 39 && entradaMaisProxima.y === 17) {
      navegar('/dungeon_1');
    } else if (entradaMaisProxima.x === 24 && entradaMaisProxima.y === 1) {
      navegar('/dungeon_2');
    } else if (entradaMaisProxima.x === 5 && entradaMaisProxima.y === 32) {
      navegar('/dungeon_3');
    }
  };

  return (
    <button onClick={handleClick} className="btn-menu-lateral">Entrar na Dungeon</button>
  );
};

export default EntrarDungeon;