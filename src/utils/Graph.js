import astar from "./aStar";
import GridNode from "./GridNode";

// Define uma função construtora chamada Graph
function Graph(gridIn, options) {
  // Se options for indefinido, define-o como um objeto vazio
  options = options || {};
  // Inicializa um array vazio para armazenar os nós do grafo
  this.nodes = [];
  // this.diagonal = !!options.diagonal;
  // Inicializa um array bidimensional vazio para representar a grade do grafo
  this.grid = [];
  // Percorre as linhas da grade fornecida
  for (var x = 0; x < gridIn.length; x++) {
    // Inicializa uma nova linha na grade do grafo
    this.grid[x] = [];
    // Percorre as colunas da linha atual
    for (var y = 0, row = gridIn[x]; y < row.length; y++) {
      // Cria um novo nó da grade com as coordenadas (x, y) e o peso da célula atual
      // var node = new GridNode(x, y, row[y]);
      var node = new GridNode(x, y, gridIn[x][y]);

      // console.log('node: ', node);

      // Adiciona o nó recém-criado à grade do grafo
      this.grid[x][y] = node;

      // console.log(node);

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

  // if (this.diagonal) {
  //   if (grid[x - 1] && grid[x - 1][y - 1]) {
  //     ret.push(grid[x - 1][y - 1]);
  //   }

  //   if (grid[x + 1] && grid[x + 1][y - 1]) {
  //     ret.push(grid[x + 1][y - 1]);
  //   }

  //   if (grid[x - 1] && grid[x - 1][y + 1]) {
  //     ret.push(grid[x - 1][y + 1]);
  //   }

  //   if (grid[x + 1] && grid[x + 1][y + 1]) {
  //     ret.push(grid[x + 1][y + 1]);
  //   }
  // }
  // Retorna o array de vizinhos
  return ret;
};

export default Graph;