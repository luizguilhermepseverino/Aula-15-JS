const { JSDOM } = require("jsdom");
const html = `
<h1 id="titulo">Minha lista de filmes</h1>
<p class="descricao">Estes são alguns dos meus filmes favoritos:</p>
<ul id="lista-filmes">
<li class="filme">O Rei Leão</li>
<li class="filme">Divertida Mente</li>
<li class="filme">Procurando Nemo</li>
<li class="filme">Vingadores</li>
</ul>
`;
const dom = new JSDOM(html);
const document = dom.window.document;
const titulo = document.getElementById("titulo");
const descricao = document.querySelector(".descricao");
const filmes = document.querySelectorAll(".filme");
console.log("Título:", titulo.textContent);
console.log("Descrição:", descricao.textContent);
console.log("Quantidade de filmes:", filmes.length);
filmes.forEach((filme, indice) => {
console.log(`${indice + 1}. ${filme.textContent}`);
});