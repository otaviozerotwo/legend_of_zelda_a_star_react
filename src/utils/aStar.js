/*
  f = g + h

  h é o custo do nó atual até o final
  g é o custo do nó inicial até o atual

*/

import React, { useState } from 'react';

const matrizMapa = [
  [
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 150, 150, 150,
    150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150,
  ],
  [
    100, 10, 10, 10, 10, 10, 10, 10, 10, 100, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 100, 100, 10, 10, 10, 10, 10, 150, 20, 20, 20, 20,
    20, 20, 20, 20, 20, 150,
  ],
  [
    100, 1, 10, 100, 10, 100, 100, 100, 10, 100, 10, 10, 10, 10, 10, 100, 10,
    10, 100, 100, 100, 100, 10, 10, 100, 100, 100, 10, 10, 10, 10, 150, 20, 150,
    150, 20, 20, 20, 20, 20, 20, 150,
  ],
  [
    100, 100, 100, 100, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 10,
    100, 10, 10, 10, 10, 10, 10, 10, 10, 100, 100, 10, 10, 10, 10, 10, 150, 20,
    150, 150, 20, 20, 20, 20, 20, 20, 150,
  ],
  [
    100, 10, 10, 10, 10, 10, 10, 100, 10, 10, 10, 10, 10, 10, 10, 100, 10, 10,
    10, 10, 10, 10, 10, 10, 100, 100, 100, 100, 100, 10, 10, 150, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 150,
  ],
  [
    100, 100, 10, 100, 100, 100, 100, 100, 10, 100, 10, 10, 10, 10, 10, 100, 10,
    10, 100, 100, 100, 100, 10, 10, 100, 100, 10, 10, 10, 10, 10, 150, 0, 20,
    20, 20, 20, 20, 20, 20, 20, 150,
  ],
  [
    100, 10, 10, 10, 10, 1, 10, 10, 10, 100, 10, 100, 100, 100, 10, 100, 10, 10,
    10, 10, 10, 10, 10, 10, 100, 10, 10, 10, 10, 10, 10, 150, 20, 20, 20, 20,
    20, 20, 20, 20, 20, 150,
  ],
  [
    100, 100, 100, 100, 100, 100, 10, 100, 10, 100, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 150, 20, 20, 20, 20,
    20, 150, 20, 20, 20, 150,
  ],
  [
    100, 10, 10, 10, 10, 10, 10, 100, 10, 10, 10, 10, 10, 10, 10, 100, 10, 10,
    10, 10, 10, 10, 10, 10, 10, 100, 100, 100, 100, 10, 10, 150, 150, 150, 150,
    150, 150, 150, 20, 20, 20, 150,
  ],
  [
    100, 10, 100, 100, 100, 100, 100, 100, 100, 10, 10, 10, 10, 10, 10, 100, 10,
    180, 180, 180, 180, 180, 180, 10, 100, 100, 100, 100, 100, 100, 10, 10, 10,
    10, 10, 10, 10, 150, 150, 150, 20, 150,
  ],
  [
    100, 10, 10, 10, 10, 10, 10, 10, 10, 10, 180, 10, 10, 10, 10, 100, 10, 10,
    10, 10, 10, 10, 10, 10, 100, 100, 100, 100, 100, 100, 10, 10, 10, 10, 10,
    10, 10, 150, 150, 150, 10, 150,
  ],
  [
    100, 10, 10, 10, 10, 100, 10, 10, 10, 180, 180, 180, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 100, 10, 100, 100, 100, 100, 10, 100, 100, 10, 10, 10, 10, 10,
    150, 150, 150, 150, 150, 10, 150,
  ],
  [
    100, 10, 10, 100, 100, 100, 10, 10, 180, 180, 180, 180, 180, 10, 10, 10, 10,
    100, 10, 100, 10, 100, 10, 100, 100, 100, 10, 10, 10, 100, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 10, 150,
  ],
  [
    100, 10, 10, 10, 10, 100, 10, 10, 10, 180, 180, 180, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 100, 10, 100, 100, 10, 10, 10, 10, 10, 10, 150, 150, 150, 150,
    150, 10, 10, 10, 10, 10, 150,
  ],
  [
    100, 10, 10, 10, 10, 10, 10, 10, 10, 10, 180, 10, 10, 10, 10, 10, 10, 100,
    10, 100, 10, 100, 10, 100, 100, 100, 10, 10, 10, 100, 10, 150, 10, 10, 10,
    10, 10, 100, 100, 100, 10, 150,
  ],
  [
    150, 150, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 100, 100, 100, 10, 100, 100, 10, 150, 10, 10, 100,
    10, 10, 10, 10, 10, 10, 150,
  ],
  [
    150, 150, 150, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 100, 100, 100, 100, 100, 100, 10, 150, 10, 10, 10,
    10, 10, 10, 180, 10, 10, 150,
  ],
  [
    150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 10, 10, 100, 10, 10,
    180, 180, 180, 10, 180, 180, 180, 180, 100, 100, 100, 100, 100, 100, 10,
    150, 10, 10, 10, 10, 10, 10, 180, 10, 10, 150,
  ],
  [
    150, 150, 150, 20, 20, 20, 20, 20, 20, 20, 150, 10, 10, 100, 10, 10, 180,
    10, 10, 10, 10, 10, 10, 180, 10, 100, 100, 100, 100, 10, 10, 150, 10, 10,
    180, 180, 10, 10, 180, 10, 10, 150,
  ],
  [
    150, 150, 150, 20, 150, 150, 150, 150, 20, 150, 150, 10, 10, 100, 10, 10,
    180, 10, 100, 10, 10, 100, 10, 180, 10, 10, 10, 10, 10, 10, 10, 150, 10, 10,
    180, 180, 10, 10, 10, 10, 10, 150,
  ],
  [
    150, 150, 150, 20, 150, 150, 150, 150, 20, 150, 100, 10, 10, 10, 10, 10,
    180, 10, 10, 10, 10, 10, 10, 180, 10, 100, 100, 10, 100, 100, 10, 10, 10,
    10, 10, 10, 10, 100, 10, 10, 10, 150,
  ],
  [
    150, 150, 20, 20, 20, 150, 150, 150, 20, 150, 100, 10, 10, 10, 10, 10, 180,
    10, 10, 10, 10, 10, 10, 10, 10, 100, 100, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 100, 100, 100, 10, 150,
  ],
  [
    150, 20, 20, 20, 20, 20, 150, 150, 20, 150, 100, 10, 10, 10, 10, 10, 180,
    10, 10, 10, 10, 10, 10, 10, 10, 100, 100, 10, 10, 10, 10, 150, 10, 100, 100,
    100, 10, 100, 10, 10, 10, 150,
  ],
  [
    150, 20, 20, 20, 20, 20, 150, 150, 20, 150, 150, 10, 10, 100, 10, 10, 180,
    10, 10, 10, 10, 10, 10, 180, 10, 10, 10, 10, 10, 10, 10, 150, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 150,
  ],
  [
    150, 0, 20, 20, 20, 20, 150, 150, 20, 20, 150, 10, 10, 100, 10, 10, 180, 10,
    100, 10, 10, 100, 10, 180, 10, 10, 10, 1, 10, 10, 10, 150, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 150,
  ],
  [
    150, 20, 20, 20, 20, 20, 150, 150, 20, 150, 150, 10, 10, 100, 10, 10, 180,
    10, 10, 10, 10, 10, 10, 180, 10, 10, 10, 10, 10, 10, 10, 150, 150, 150, 150,
    150, 150, 150, 150, 150, 150, 150,
  ],
  [
    150, 20, 20, 20, 20, 20, 150, 150, 20, 150, 100, 10, 10, 100, 10, 10, 180,
    180, 180, 180, 180, 10, 180, 180, 180, 180, 180, 180, 180, 180, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 10, 150, 150,
  ],
  [
    150, 150, 20, 20, 20, 150, 150, 150, 20, 150, 100, 10, 10, 10, 10, 10, 10,
    10, 180, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 180, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 150, 150,
  ],
  [
    150, 150, 150, 20, 150, 150, 150, 150, 20, 20, 100, 10, 10, 10, 10, 10, 10,
    10, 180, 10, 10, 10, 150, 150, 150, 150, 150, 10, 10, 180, 10, 10, 10, 180,
    180, 180, 180, 180, 180, 180, 180, 150,
  ],
  [
    150, 150, 150, 20, 150, 150, 150, 150, 150, 150, 100, 10, 10, 10, 10, 10,
    10, 10, 180, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 180,
    180, 180, 180, 180, 180, 180, 180, 150,
  ],
  [
    150, 150, 150, 20, 150, 150, 150, 150, 150, 150, 100, 180, 180, 180, 180,
    180, 10, 180, 180, 10, 150, 150, 150, 150, 150, 10, 10, 10, 10, 180, 10, 10,
    10, 180, 150, 180, 180, 180, 180, 180, 180, 150,
  ],
  [
    150, 150, 150, 20, 150, 180, 180, 180, 180, 180, 180, 180, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 180, 10, 10, 10, 180,
    180, 180, 180, 180, 180, 180, 180, 150,
  ],
  [
    150, 150, 20, 20, 20, 150, 150, 150, 150, 150, 10, 180, 10, 10, 100, 10,
    150, 150, 150, 150, 150, 150, 150, 150, 10, 10, 150, 10, 10, 180, 10, 10,
    10, 180, 180, 150, 150, 180, 180, 180, 180, 150,
  ],
  [
    150, 20, 20, 20, 20, 20, 150, 150, 150, 150, 10, 180, 100, 10, 10, 10, 150,
    20, 20, 20, 20, 20, 20, 150, 10, 10, 150, 10, 10, 180, 180, 180, 180, 180,
    180, 150, 150, 180, 180, 180, 180, 150,
  ],
  [
    150, 20, 20, 20, 20, 20, 150, 150, 150, 150, 150, 180, 10, 10, 100, 10, 150,
    20, 150, 150, 20, 150, 20, 150, 10, 10, 150, 10, 10, 10, 10, 150, 150, 180,
    180, 180, 180, 180, 180, 180, 180, 150,
  ],
  [
    150, 20, 20, 20, 20, 20, 150, 150, 150, 150, 150, 180, 10, 10, 10, 10, 150,
    20, 20, 150, 20, 150, 20, 20, 10, 10, 150, 150, 150, 150, 10, 150, 150, 180,
    180, 180, 180, 180, 180, 180, 180, 150,
  ],
  [
    150, 20, 20, 20, 20, 20, 150, 150, 150, 150, 10, 180, 10, 10, 100, 10, 150,
    20, 20, 150, 20, 150, 20, 20, 10, 10, 150, 10, 10, 10, 10, 150, 150, 150,
    150, 150, 150, 150, 150, 180, 180, 150,
  ],
  [
    150, 150, 20, 20, 20, 150, 150, 150, 150, 150, 10, 180, 10, 100, 100, 10,
    150, 20, 150, 150, 20, 150, 20, 150, 10, 10, 150, 10, 10, 150, 10, 150, 150,
    150, 150, 150, 150, 150, 150, 180, 180, 150,
  ],
  [
    150, 150, 150, 20, 150, 180, 180, 180, 180, 180, 180, 180, 10, 10, 10, 10,
    150, 20, 20, 150, 20, 20, 20, 150, 10, 10, 150, 10, 10, 150, 10, 150, 150,
    180, 180, 180, 180, 180, 180, 180, 180, 150,
  ],
  [
    150, 150, 150, 20, 150, 150, 150, 150, 150, 150, 10, 10, 100, 100, 100, 10,
    150, 0, 20, 150, 20, 150, 20, 150, 10, 10, 150, 10, 10, 150, 10, 150, 150,
    180, 180, 180, 180, 180, 180, 180, 180, 150,
  ],
  [
    150, 150, 150, 150, 150, 150, 150, 10, 10, 10, 10, 10, 10, 10, 10, 10, 150,
    20, 20, 150, 20, 150, 20, 150, 10, 10, 150, 10, 10, 150, 10, 10, 150, 150,
    150, 150, 150, 150, 150, 150, 150, 150,
  ],
  [
    150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150,
    150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150,
    150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150,
  ],
];

// Função para mapear os valores da matriz para classes CSS correspondentes
const atribuirClassNameParaCelula = (cell) => {
  switch (cell) {
    case 0:
      return "cell-hyrule-value-0";
    case 1:
      return "cell-hyrule-value-1";
    case 3:
      return "cell-hyrule-value-3";
    case 10:
      return "cell-hyrule-value-10";
    case 20:
      return "cell-hyrule-value-20";
    case 100:
      return "cell-hyrule-value-100";
    case 150:
      return "cell-hyrule-value-150";
    case 180:
      return "cell-hyrule-value-180";
    default:
      return "";
  }
};


// function pathTo(node) {
//   var curr = node; // Inicializa uma variável 'curr' com o nó fornecido como argumento
//   var path = []; // Cria uma matriz vazia para armazenar o caminho

//   // Continua enquanto o nó atual tiver um nó pai
//   while (curr.parent) {
//     path.unshift(curr); // Adiciona o nó atual à frente da matriz para manter a ordem correta
//     curr = curr.parent; // Atualiza o nó atual para ser o nó pai do nó atual
//   }

//   return path; // Retorna o caminho do nó final até o nó inicial
// }

function pathTo(node) {
  var curr = node;
  var path = [];

  while (curr.parent) {
    path.unshift(curr);
    curr = curr.parent;
  }

  return path;
}

function getHeap() {
  // Retorna uma nova instância de BinaryHeap, com uma função de pontuação definida
  // A função de pontuação é usada para determinar a ordem dos elementos na BinaryHeap
  // Neste caso, a função de pontuação retorna a propriedade 'f' do nó passado como argumento
  return new BinaryHeap(function(node) {
    return node.f;
  });
}

const astar = {
  // Implementação da função de busca A*
  search: function(graph, start, end, options) {
    // Limpa os nós marcados como sujos no grafo
    graph.cleanDirty();
  
    // Configurações opcionais para a busca A*
    options = options || {};
    // Heurística a ser usada, padrão é a distância de euclidean
    var heuristic = options.heuristic || astar.heuristics.euclidean;
    // Indica se deve retornar o caminho para o nó mais próximo se o destino for inalcançável
    var closest = options.closest || false;
  
    // Cria uma BinaryHeap para manter os nós abertos
    var openHeap = getHeap();
    // Define o nó inicial como o mais próximo, se necessário
    var closestNode = start;
  
    // Calcula a heurística para o nó inicial e marca-o como sujo
    start.h = heuristic(start, end);
    graph.markDirty(start);
  
    // Adiciona o nó inicial à heap aberta
    openHeap.push(start);
  
    // Loop principal da busca A*
    while (openHeap.size() > 0) {
      // Remove o nó com a menor pontuação da heap aberta
      var currentNode = openHeap.pop();
  
      // Se o nó atual for o nó final, retorna o caminho até ele
      if (currentNode === end) {
        console.log('Caminho na linha 319: ', pathTo(currentNode));
        return pathTo(currentNode);
      }
  
      // Marca o nó atual como fechado
      currentNode.closed = true;
  
      // Encontra todos os vizinhos do nó atual
      var neighbors = graph.neighbors(currentNode);
  
      // Itera sobre os vizinhos
      for (var i = 0, il = neighbors.length; i < il; ++i) {
        var neighbor = neighbors[i];
  
        // Verifica se o vizinho já foi fechado ou é um obstáculo
        if (neighbor.closed || neighbor.isWall()) {
          continue; // Ignora este vizinho
        }
  
        // Calcula o custo 'g' do vizinho
        var gScore = currentNode.g + neighbor.getCost(currentNode);
        var beenVisited = neighbor.visited;
  
        // Se o vizinho ainda não foi visitado ou o novo custo 'g' é menor
        if (!beenVisited || gScore < neighbor.g) {
          // Marca o vizinho como visitado e atualiza seus atributos
          neighbor.visited = true;
          neighbor.parent = currentNode;
          neighbor.h = neighbor.h || heuristic(neighbor, end);
          neighbor.g = gScore;
          neighbor.f = neighbor.g + neighbor.h;
          // Marca o vizinho como sujo no grafo
          graph.markDirty(neighbor);
          
          // Se a opção closest estiver ativada, atualiza o nó mais próximo
          if (closest) {
            console.log('Entrei no if da linha 353');
            if (neighbor.h < closestNode.h || (neighbor.h === closestNode.h && neighbor.g < closestNode.g)) {
              closestNode = neighbor;
            }
          }
  
          // Adiciona o vizinho à heap aberta se ainda não foi visitado
          if (!beenVisited) {
            openHeap.push(neighbor);
          } else {
            // Caso contrário, atualiza a posição do vizinho na heap
            openHeap.rescoreElement(neighbor);
          }
        }
      }
    }
  
    // Se a opção closest estiver ativada, retorna o caminho para o nó mais próximo
    if (closest) {
      console.log('Caminho para o nó mais próximo: ', pathTo);
      return pathTo(closestNode);
    }
  
    // Caso contrário, retorna uma lista vazia indicando que o caminho não foi encontrado
    return [];
  },  
  heuristics: {
    // Heurística de distância euclidiana: calcula a distância euclidiana entre duas posições no grid
    euclidean: function(pos0, pos1) {
      // Calcula a diferença nas coordenadas x e y
      var dx = pos1.x - pos0.x;
      var dy = pos1.y - pos0.y;
      // Calcula a distância euclidiana usando o teorema de Pitágoras
      return Math.sqrt(dx * dx + dy * dy);
    },
  },
  
  // Função para limpar os atributos de um nó
  cleanNode: function(node) {
    // Define todos os atributos do nó como seus valores padrão
    node.f = 0; // Custo total estimado do nó inicial até o nó atual
    node.g = 0; // Custo real do caminho do nó inicial até o nó atual
    node.h = 0; // Estimativa heurística do custo do nó atual até o destino
    node.visited = false; // Indica se o nó já foi visitado durante a busca
    node.closed = false; // Indica se o nó foi fechado durante a busca
    node.parent = null; // Referência ao nó pai no caminho ótimo
  }  
};

// Define uma função construtora chamada GridNode
function GridNode(x, y, weight) {
  this.x = x; // Atribui a coordenada x fornecida como parâmetro à propriedade x do objeto criado
  this.y = y; // Atribui a coordenada y fornecida como parâmetro à propriedade y do objeto criado
  this.weight = weight; // Atribui o peso fornecido como parâmetro à propriedade weight do objeto criado
}

// Adiciona um método toString ao protótipo de GridNode
GridNode.prototype.toString = function() {
  // Retorna uma string representando as coordenadas x e y do nó
  return "[" + this.x + " " + this.y + "]";
};

// Adiciona um método getCost ao protótipo de GridNode
GridNode.prototype.getCost = function() {
  // Retorna o peso do nó para movimentos não diagonais
  return this.weight;
};

// Adiciona um método isWall ao protótipo de GridNode
GridNode.prototype.isWall = function() {
  // Verifica se o peso do nó é igual a 99 (parede da dungeon)
  return this.weight === 99;
};

// Adiciona um método entradaDungeon ao protótipo de GridNode
GridNode.prototype.entradaDungeon = function() {
  // Verifica se o peso do nó é igual a zero
  return this.weight === 0;
}

// Define uma função construtora chamada BinaryHeap
function BinaryHeap(scoreFunction) {
  // Inicializa um array vazio para armazenar os elementos do heap
  this.content = [];
  // Atribui a função de pontuação fornecida como parâmetro à propriedade scoreFunction do objeto criado
  this.scoreFunction = scoreFunction;
}

// Define métodos para o protótipo de BinaryHeap
BinaryHeap.prototype = {
  // Método para adicionar um elemento ao heap
  push: function(element) {
    // Adiciona o elemento ao final do array content
    this.content.push(element);
    // Reorganiza o heap para manter a propriedade do heap
    this.sinkDown(this.content.length - 1);
  },
  // Método para remover e retornar o elemento com a menor pontuação do heap
  pop: function() {
    // Armazena o elemento raiz (com a menor pontuação)
    var result = this.content[0];
    // Remove o último elemento do array
    var end = this.content.pop();
    // Se ainda houver elementos no heap
    if (this.content.length > 0) {
      // Coloca o último elemento no topo do heap
      this.content[0] = end;
      // Reorganiza o heap para manter a propriedade do heap
      this.bubbleUp(0);
    }
    // Retorna o elemento com a menor pontuação
    return result;
  },
  // Método para remover um nó específico do heap
  remove: function(node) {
    // Encontra a posição do nó no array content
    var i = this.content.indexOf(node);
    // Remove o último elemento do array
    var end = this.content.pop();
    // Se o nó não for o último elemento do heap
    if (i !== this.content.length - 1) {
      // Coloca o último elemento na posição do nó removido
      this.content[i] = end;
      // Reorganiza o heap para manter a propriedade do heap
      if (this.scoreFunction(end) < this.scoreFunction(node)) {
        this.sinkDown(i);
      } else {
        this.bubbleUp(i);
      }
    }
  },
  // Método para retornar o tamanho do heap
  size: function() {
    // Retorna o comprimento do array content, que é o número de elementos no heap
    return this.content.length;
  },
  // Método para reavaliar a posição de um elemento no heap
  rescoreElement: function(node) {
    // Reorganiza o heap com base na posição do nó no array content
    this.sinkDown(this.content.indexOf(node));
  },
  // Método para reorganizar o heap para baixo (mantendo a propriedade do heap)
  sinkDown: function(n) {
    // Obtém o elemento na posição n no array content
    var element = this.content[n];
    // Loop enquanto a posição n não for a raiz do heap
    while (n > 0) {
      // Calcula o índice do pai do elemento na posição n
      var parentN = ((n + 1) >> 1) - 1;
      // Obtém o elemento pai
      var parent = this.content[parentN];
      // Verifica se a pontuação do elemento é menor que a pontuação do pai
      if (this.scoreFunction(element) < this.scoreFunction(parent)) {
        // Se sim, troca o elemento com o pai
        this.content[parentN] = element;
        this.content[n] = parent;
        // Atualiza a posição para o índice do pai
        n = parentN;
      } else {
        // Se não, interrompe o loop
        break;
      }
    }
  },
  // Método para reorganizar o heap para cima (mantendo a propriedade do heap)
  bubbleUp: function(n) {
    // Obtém o comprimento do array content
    var length = this.content.length;
    // Obtém o elemento na posição n no array content
    var element = this.content[n];
    // Obtém a pontuação do elemento
    var elemScore = this.scoreFunction(element);

    // Loop infinito
    while (true) {
      // Calcula os índices dos filhos esquerdo e direito
      var child2N = (n + 1) << 1;
      var child1N = child2N - 1;
      // Variável para armazenar o índice do elemento para troca
      var swap = null;
      var child1Score;

      // Verifica se o filho esquerdo está dentro dos limites do heap
      if (child1N < length) {
        // Obtém o elemento filho esquerdo
        var child1 = this.content[child1N];
        // Obtém a pontuação do filho esquerdo
        child1Score = this.scoreFunction(child1);
        // Verifica se a pontuação do filho esquerdo é menor que a pontuação do elemento
        if (child1Score < elemScore) {
          // Se sim, define o índice do filho esquerdo como índice para troca
          swap = child1N;
        }
      }

      // Verifica se o filho direito está dentro dos limites do heap
      if (child2N < length) {
        // Obtém o elemento filho direito
        var child2 = this.content[child2N];
        // Obtém a pontuação do filho direito
        var child2Score = this.scoreFunction(child2);
        // Verifica se a pontuação do filho direito é menor que a pontuação do elemento ou do filho esquerdo
        if (child2Score < (swap === null ? elemScore : child1Score)) {
          // Se sim, define o índice do filho direito como índice para troca
          swap = child2N;
        }
      }

      // Verifica se ocorreu uma troca
      if (swap !== null) {
        // Realiza a troca entre o elemento na posição n e o elemento na posição swap
        this.content[n] = this.content[swap];
        this.content[swap] = element;
        // Atualiza a posição para o índice da troca
        n = swap;
      } else {
        // Se não ocorreu troca, interrompe o loop
        break;
      }
    }
  }
};

// Define uma função construtora chamada Graph
function Graph(gridIn, options) {
  // Se options for indefinido, define-o como um objeto vazio
  options = options || {};
  // Inicializa um array vazio para armazenar os nós do grafo
  this.nodes = [];
  // Inicializa um array bidimensional vazio para representar a grade do grafo
  this.grid = [];
  // Percorre as linhas da grade fornecida
  for (var x = 0; x < gridIn.length; x++) {
    // Inicializa uma nova linha na grade do grafo
    this.grid[x] = [];
    // Percorre as colunas da linha atual
    for (var y = 0, row = gridIn[x]; y < row.length; y++) {
      // Cria um novo nó da grade com as coordenadas (x, y) e o peso da célula atual
      var node = new GridNode(x, y, row[y]);
      // Adiciona o nó recém-criado à grade do grafo
      this.grid[x][y] = node;
      // Adiciona o nó recém-criado à lista de nós do grafo
      this.nodes.push(node);
    }
  }
  // Inicializa o grafo
  this.init();
}

// Adiciona um método init ao protótipo de Graph
Graph.prototype.init = function() {
  // Inicializa um array vazio para armazenar os nós sujos (dirty)
  this.dirtyNodes = [];
  // Percorre todos os nós do grafo
  for (var i = 0; i < this.nodes.length; i++) {
    // Limpa o nó atual
    astar.cleanNode(this.nodes[i]);
  }
};

// Adiciona um método cleanDirty ao protótipo de Graph
Graph.prototype.cleanDirty = function() {
  // Percorre todos os nós sujos
  for (var i = 0; i < this.dirtyNodes.length; i++) {
    // Limpa o nó sujo atual
    astar.cleanNode(this.dirtyNodes[i]);
  }
  // Limpa o array de nós sujos
  this.dirtyNodes = [];
};

// Adiciona um método markDirty ao protótipo de Graph
Graph.prototype.markDirty = function(node) {
  // Adiciona o nó fornecido ao array de nós sujos
  this.dirtyNodes.push(node);
};

// Adiciona um método neighbors ao protótipo de Graph
Graph.prototype.neighbors = function(node) {
  // Inicializa um array vazio para armazenar os vizinhos do nó
  var ret = [];
  // Obtém as coordenadas x e y do nó
  var x = node.x;
  var y = node.y;
  // Obtém a grade do grafo
  var grid = this.grid;

  // Verifica se existe um nó à esquerda do nó atual
  if (grid[x - 1] && grid[x - 1][y]) {
    // Adiciona o nó à esquerda ao array de vizinhos
    ret.push(grid[x - 1][y]);
  }

  // Verifica se existe um nó à direita do nó atual
  if (grid[x + 1] && grid[x + 1][y]) {
    // Adiciona o nó à direita ao array de vizinhos
    ret.push(grid[x + 1][y]);
  }

  // Verifica se existe um nó acima do nó atual
  if (grid[x] && grid[x][y - 1]) {
    // Adiciona o nó acima ao array de vizinhos
    ret.push(grid[x][y - 1]);
  }

  // Verifica se existe um nó abaixo do nó atual
  if (grid[x] && grid[x][y + 1]) {
    // Adiciona o nó abaixo ao array de vizinhos
    ret.push(grid[x][y + 1]);
  }
  // Retorna o array de vizinhos
  return ret;
};

// Adiciona um método toString ao protótipo de GridNode
GridNode.prototype.toString = function() {
  // Retorna uma string representando as coordenadas x e y do nó
  return "[" + this.x + " " + this.y + "]";
};

function Mapa({ caminhoEncontrado, grid }) {
  return (
    <div className="container">
      <div className="mapa-container">
        <div className="mapa-hyrule-container">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="mapa-linha">
              {row.map((cell, cellIndex) => {
                const className = atribuirClassNameParaCelula(cell);
                const isCaminho = caminhoEncontrado.some(node => node.x === cellIndex && node.y === rowIndex);
                return (
                  <div 
                    key={cellIndex} 
                    className={`mapa-celula ${className} ${isCaminho ? 'caminho' : ''}`} >
                    <span className="mapa-coordenada">{`x: ${cellIndex}, y: ${rowIndex}`}</span>  
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Astar() {
  const [grid, setGrid] = useState(matrizMapa);
  const [startNode, setStartNode] = useState({ x: 24, y: 27 });
  const [endNode, setEndNode] = useState({ x: 17, y: 39 });
  const graph = new Graph(grid);
  const [caminhoEncontrado, setCaminhoEncontrado] = useState([]);

  // Função para executar a busca A* quando o botão for clicado
  const handleSearch = () => {
    setCaminhoEncontrado(astar.search(graph, graph.grid[startNode.x][startNode.y], graph.grid[endNode.x][endNode.y]));
    
    return setCaminhoEncontrado;
  };

  return (
    <>
      <button onClick={handleSearch}>Buscar</button>
      <Mapa caminhoEncontrado={caminhoEncontrado} grid={grid}/>
    </>
  ); 
};

export default Astar;
