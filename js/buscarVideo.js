import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento){
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa)

    const lista = document.querySelector("[data-lista]");

    // limpar todos os elementos da lista de videos
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }
    //adicionar videos filtrados
    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    if (busca.length == 0) {
        lista.innerHTML += `<h2 class="mensagem__titulo">Não encontrei nenhum vídeo com esse conteúdo :(<h2>`
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")

botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento))