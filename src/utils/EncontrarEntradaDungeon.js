import calcularDistancia from './CalcularDistancia';

function encontrarEntradaDungeon(startNode, entradasDungeons) {
  let distanciaMinima = Infinity;
  let entradaMaisProxima = null;

  entradasDungeons.forEach(entrada => {
    const distancia = calcularDistancia(startNode.x, startNode.y, entrada.x, entrada.y);

    if (distancia < distanciaMinima) {
      distanciaMinima = distancia;
      entradaMaisProxima = entrada;
    }
  });

  return entradaMaisProxima;
};

export default encontrarEntradaDungeon;