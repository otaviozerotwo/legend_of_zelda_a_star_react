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

GridNode.prototype.getCost = function() {
  return this.weight;
};

// Adiciona um método isWall ao protótipo de GridNode
GridNode.prototype.isWall = function() {
  // Verifica se o peso do nó é igual a 99 (parede da dungeon)
  return this.weight === 99;
};

export default GridNode;