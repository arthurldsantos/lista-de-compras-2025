import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificaListaVazia from "./scripts/verificaListaVazia.js";

const listaDeCompras = document.getElementById('lista-de-compras');
const botaoAdicionar = document.getElementById('adicionar-item');

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);

    verificaListaVazia(listaDeCompras);
});

verificaListaVazia(listaDeCompras);