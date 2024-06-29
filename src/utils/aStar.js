/*
  f = g + h

  h é o custo do nó atual até o final
  g é o custo do nó inicial até o atual

*/

function pathTo(node) {
  var curr = node; 
  var path = []; // matriz para armazenar o caminho

  while (curr.parent) {
    path.unshift(curr); // adiciona o nó atual na matriz
    curr = curr.parent; // nó atual passa a ser pai 
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

    // var heuristic = options.heuristic || astar.heuristics.euclidean;
    var heuristic = options.heuristic || astar.heuristics.manhattan;

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

      // console.log('12. Valor currentNode dentro do loop: ', currentNode);
  
      // Se o nó atual for o nó final, retorna o caminho até ele
      if (currentNode === end) {
        
        console.log('13. Caminho encontrado: ', pathTo(currentNode));
        
        return pathTo(currentNode);
      }
  
      // Marca o nó atual como fechado
      currentNode.closed = true;
  
      // Encontra todos os vizinhos do nó atual
      var neighbors = graph.neighbors(currentNode);

      // console.log('14. Valor neighbors: ', neighbors);
  
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
      return pathTo(closestNode);
    }
  
    // Caso contrário, retorna uma lista vazia indicando que o caminho não foi encontrado
    return [];
  },  
  heuristics: {
    // Heurística de distância euclidiana: calcula a distância euclidiana entre duas posições no grid
    // euclidean: function(pos0, pos1) {
      // Calcula a diferença nas coordenadas x e y
      // var dx = pos1.x - pos0.x;
      // var dy = pos1.y - pos0.y;
      // Calcula a distância euclidiana usando o teorema de Pitágoras
      // return Math.sqrt(dx * dx + dy * dy);
    // },
    manhattan: function(pos0, pos1) {
      var d1 = Math.abs(pos1.x - pos0.x);
      var d2 = Math.abs(pos1.y - pos0.y);
      return d1 + d2;
    },
    // diagonal: function(pos0, pos1) {
    //   var D = 1;
    //   var D2 = Math.sqrt(2);
    //   var d1 = Math.abs(pos1.x - pos0.x);
    //   var d2 = Math.abs(pos1.y - pos0.y);
    //   return (D * (d1 + d2)) + ((D2 - (2 * D)) * Math.min(d1, d2));
    // }
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

export default astar;



