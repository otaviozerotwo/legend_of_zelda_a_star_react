import { useNavigate } from 'react-router-dom';

const Menu = ({ PercorrerMapa, estaNaRotaRaiz, mapaPercorrido, EntrarDungeon, estaNaRotaDeDungeon }) => {
  const navegarPara = useNavigate();
  
  return (
    <>
      <div className="menu-lateral">
        <div className="titulo-h2">
          <h2>Menu Ações</h2>
        </div>
        
        <button onClick={PercorrerMapa} className="btn-menu-lateral">Percorrer Mapa</button>

        {estaNaRotaRaiz && mapaPercorrido && (
          <button onClick={EntrarDungeon} className="btn-menu-lateral">Entrar na Dungeon</button>
        )}

        {estaNaRotaDeDungeon && (
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