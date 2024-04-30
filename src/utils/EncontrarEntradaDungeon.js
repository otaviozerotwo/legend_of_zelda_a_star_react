import calcularDistancia from './CalcularDistancia';

function encontrarEntradaDungeon(startNode, entradasDungeons) {
  // Itera sobre cada entrada de dungeon na lista
  for (let i = 0; i < entradasDungeons.length; i++) {
    console.log(entradasDungeons);
    // Verifica se a entrada já foi visitada
    if (entradasDungeons.visitado) {
      continue; // Passa para a próxima entrada de dungeon
    }

    // Simula o processamento da entrada de dungeon
    console.log(`Processando entrada de dungeon em (${entradasDungeons.x}, ${entradasDungeons.y})`);

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
  }
};

export default encontrarEntradaDungeon;