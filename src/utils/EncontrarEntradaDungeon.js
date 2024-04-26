// import calcularDistancia from './CalcularDistancia';

// function encontrarEntradaDungeon(startNode, entradasDungeons) {
//   let distanciaMinima = Infinity;
//   let entradaMaisProxima = null;

//   entradasDungeons.forEach(entrada => {
//     const distancia = calcularDistancia(startNode.x, startNode.y, entrada.x, entrada.y);

//     if (distancia < distanciaMinima) {
//       distanciaMinima = distancia;
//       entradaMaisProxima = entrada;
//     }
//   });

//   return entradaMaisProxima;
// };

// export default encontrarEntradaDungeon;

import calcularDistancia from './CalcularDistancia';

function encontrarEntradaDungeon(startNode, entradasDungeons) {
  // Verificar se startNode é igual a alguma das coordenadas em entradasDungeons
  const isStartNodeInEntradasDungeons = entradasDungeons.some(entrada =>
    entrada.x === startNode.x && entrada.y === startNode.y
  );

  // Se startNode estiver em entradasDungeons, remova-o da lista temporariamente
  const filteredEntradasDungeons = isStartNodeInEntradasDungeons
    ? entradasDungeons.filter(entrada =>
        !(entrada.x === startNode.x && entrada.y === startNode.y)
      )
    : entradasDungeons;

  let distanciaMinima = Infinity;
  let entradaMaisProxima = null;

  filteredEntradasDungeons.forEach(entrada => {
    const distancia = calcularDistancia(startNode.x, startNode.y, entrada.x, entrada.y);

    if (distancia < distanciaMinima) {
      distanciaMinima = distancia;
      entradaMaisProxima = entrada;
    }
  });

  return entradaMaisProxima;
}

export default encontrarEntradaDungeon;
