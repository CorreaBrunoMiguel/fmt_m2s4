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

  repor(quantidadeReposta) {
    this.quantidade += quantidadeReposta;
    console.log(
      `Foram repostos ${quantidadeReposta} unidades do produto ${this.nome}`
    );
  }

  mostrarEstoque() {
    console.log(
      `O produto ${this.nome} possui ${this.quantidade} unidades em estoque`
    );
  }
}

let produto = new Produto("cama", 459.99, 8);
produto.mostrarEstoque()
