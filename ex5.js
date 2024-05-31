class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  vender(quantidadeVendida) {
    if (quantidadeVendida < this.quantidade) {
      this.quantidade = this.quantidade - quantidadeVendida;
      console.log(
        `Você vendeu ${quantidadeVendida}, estoque possui ${this.quantidade} unidades`
      );
    } else {
      console.log(
        `Falta em estoque, é possível vender ${this.quantidade} unidades`
      );
    }
  }
}

let produto = new Produto("cama", 459.99, 8);

produto.vender(5)
produto.vender(6)
