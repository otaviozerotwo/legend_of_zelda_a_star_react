import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStartEndNodes } from '../context/StartEndNodesContext';
import entradasDungeons from '../utils/EntradasDungeons';

const Menu = ({ PercorrerMapa, mapaPercorrido, EntrarDungeon, rotaAtual, VoltarEntrada }) => {
  const { endNode } = useStartEndNodes();
  const navegarPara = useNavigate();
  const [estaEmHyrule, setEstaEmHyrule] = useState(false);
  const [estaNaDungeon, setEstaNaDungeon] = useState(false);
  const [mostrarBotaoPercorrer, setMostrarBotaoPercorrer] = useState(false);
  const [mostrarBotaoEntrarDungeon, setMostrarBotaoEntrarDungeon] = useState(false);
  const [mostrarBotaoVoltar, setMostrarBotaoVoltar] = useState(false);
  const [mostrarBotaoSair, setMostrarBotaoSair] = useState(false);

  useEffect(() => {
    if (rotaAtual === '/') {
      setEstaEmHyrule(true);
      setEstaNaDungeon(false);
      setMostrarBotaoPercorrer(true);
      setMostrarBotaoVoltar(false);
      setMostrarBotaoSair(false);
      if (endNode === entradasDungeons.some) {
        setMostrarBotaoEntrarDungeon(true);
      }
    } else if (rotaAtual === '/dungeon_1' || rotaAtual === '/dungeon_2' || rotaAtual === '/dungeon_3') {
      setEstaEmHyrule(false);
      setEstaNaDungeon(true);
      setMostrarBotaoPercorrer(mapaPercorrido);
      setMostrarBotaoEntrarDungeon(false);
      setMostrarBotaoVoltar(false);
      setMostrarBotaoSair(false);
    } else {
      setEstaEmHyrule(false);
      setEstaNaDungeon(false);
      setMostrarBotaoPercorrer(false);
      setMostrarBotaoEntrarDungeon(false);
      setMostrarBotaoVoltar(false);
      setMostrarBotaoSair(false);
    }
  }, [endNode, mapaPercorrido, rotaAtual]);

  return (
    <>
      <div className="menu-lateral">
        <div className="titulo-h2">
          <h2>Menu Ações</h2>
        </div>

        {(estaEmHyrule || estaNaDungeon) && (
          <button onClick={PercorrerMapa} className="btn-menu-lateral">Percorrer Mapa</button>
        )}

        {estaEmHyrule && (
          <button onClick={EntrarDungeon} className="btn-menu-lateral">Entrar na Dungeon</button>
        )}

        {estaNaDungeon && (
          <button onClick={VoltarEntrada} className="btn-menu-lateral">Voltar para Entrada</button>
        )}

        {estaNaDungeon && mostrarBotaoSair && (
          <button onClick={() => { navegarPara('/'); }} className="btn-menu-lateral">Sair da Dungeon</button>
        )}

      </div>
    </>
  )
}

export default Menu;