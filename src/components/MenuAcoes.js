import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = ({ PercorrerMapa, mapaPercorrido, EntrarDungeon, rotaAtual}) => {
  const navegarPara = useNavigate();
  const [estaEmHyrule, setEstaEmHyrule] = useState(false);
  const [estaNaDungeon, setEstaNaDungeon] = useState(false);

  useEffect(() => {
    if (mapaPercorrido && rotaAtual === '/') {
      setEstaEmHyrule(true);
    } else if (rotaAtual === '/dungeon_1' || rotaAtual === '/dungeon_2' || rotaAtual === '/dungeon_3') {
      setEstaNaDungeon(true);
    }
  }, [mapaPercorrido, rotaAtual]);
  

  console.log(rotaAtual);
  console.log('estaEmHyrule: ', estaEmHyrule);
  console.log('estaNaDungeon: ', estaNaDungeon);
  console.log('mapaPercorrido: ', mapaPercorrido);
  
  return (
    <>
      <div className="menu-lateral">
        <div className="titulo-h2">
          <h2>Menu Ações</h2>
        </div>

        <button onClick={PercorrerMapa} className="btn-menu-lateral">Percorrer Mapa</button>

        {estaEmHyrule && (
          <button onClick={EntrarDungeon} className="btn-menu-lateral">Entrar na Dungeon</button>
        )}

        {estaNaDungeon && (
          <button onClick={() => navegarPara('/')} className="btn-menu-lateral">Voltar</button>
        )}

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