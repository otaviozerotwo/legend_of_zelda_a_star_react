import { useState, useEffect } from 'react';
import entradasDungeons from '../utils/EntradasDungeons'; 

import '../styles/PainelResultados.css';

const Resultados = ({ custoTotal }) => {
  const [itensObtidos, setItensObtidos] = useState([]);

  useEffect(() => {
    // Atualize a lista de itens obtidos quando houver mudanças nas entradas de dungeons
    const itens = entradasDungeons.filter(entrada => entrada.visitado).map(entrada => obterItem(entrada)); // Obtenha os itens para as entradas visitadas
    setItensObtidos(itens);
  }, []); // Dependência atualizada quando as entradas de dungeons mudarem

  // Função para obter o item correspondente à entrada da dungeon
  const obterItem = (entrada) => {
    // Lógica para determinar o item com base na entrada da dungeon
    // Aqui você pode adicionar sua própria lógica para determinar o item com base nas coordenadas, por exemplo
    // Retorna o item correspondente à entrada
    return <div key={`${entrada.x}-${entrada.y}`} className={`painel-resultados-itens-obtidos-item-${entrada.x}-${entrada.y}`}></div>;
  };

  return (
    <div className="painel-resultados-container">
      <div className="titulo">
        <h2>Resultados</h2>
      </div>
      
      <div className="painel-resultados-moldura">
        <p>{`Custo Total: ${custoTotal}`}</p>
        <p>Itens Obtidos:</p>

        <div className="painel-resultados-itens-obtidos">
          {/* Exibe os itens obtidos */}
          {itensObtidos}
        </div>
      </div>
    </div>
  );
};

export default Resultados;
