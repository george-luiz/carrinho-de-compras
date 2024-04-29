limpar();
let precosProdutos = [];

function adicionar() {
  let carrinho = document.getElementById("lista-produtos");
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorProduto = produto.replace(/[^0-9]/g, "");
  let total = document.getElementById("valor-total");
  let quantidade = document.getElementById("quantidade").value;
  let preco = quantidade * valorProduto;
  let somaTotal = 0;

  precosProdutos.push(preco);

  carrinho.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
        </section>
    `;

//   precosProdutos.forEach((element) => {
//     somaTotal += element;
//   });

//   total.innerHTML = `R$${somaTotal}`;

  somaTotal +=  preco;
  total.innerHTML = `R$${somaTotal}`;
  document.getElementById("quantidade").value = 0;
}

function limpar() {
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("quantidade").value = 0;
  document.getElementById("valor-total").innerHTML = `R$0`;
}
