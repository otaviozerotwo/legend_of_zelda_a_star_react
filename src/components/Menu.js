import { useState, useContext } from 'react';
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
  const [startNode] = useState({ x: 24, y: 27 });
  const graph = new Graph(grid);
  const { setCaminhoEncontrado} = useContext(CaminhoEncontradoContext);
  const entradaMaisProxima = encontrarEntradaDungeon(startNode, entradasDungeons);
  const navegarPara = useNavigate();
  const rotaAtual = useLocation();
  const [mapaPercorrido, setMapaPercorrido] = useState(false);
  const { atualizaCustoTotal, custoTotal, setCustoTotal } = useContext(CustoCaminhoContext);

  const calcularCustoCaminho = (caminho) => {
    let custoTotal = 0;

    caminho.forEach(node => {
      custoTotal += node.weight;
    });

    atualizaCustoTotal(custoTotal);
    setCustoTotal(custoTotal);
  };

  const PercorrerMapa = () => {
    const caminho = astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[entradaMaisProxima.x][entradaMaisProxima.y]);
    setCaminhoEncontrado(caminho);
    setMapaPercorrido(true);
    calcularCustoCaminho(caminho);
  };

  const EntrarDungeon = () => {
    if (entradaMaisProxima.x === 39 && entradaMaisProxima.y === 17) {
      navegarPara('/dungeon_1');
    } else if (entradaMaisProxima.x === 24 && entradaMaisProxima.y === 1) {
      navegarPara('/dungeon_2')
    } else if (entradaMaisProxima.x === 5 && entradaMaisProxima.y === 32) {
      navegarPara('/dungeon_3');
    }
  };

  const estaNaRotaRaiz = rotaAtual.pathname === '/';
  const estaNaRotaDeDungeon = ['/dungeon_1', '/dungeon_2', '/dungeon_3'].includes(rotaAtual.pathname);

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