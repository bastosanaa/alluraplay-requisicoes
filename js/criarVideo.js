import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    // prevenir que a pagina recarregue quando o form for submetido
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    if (url.includes("https://www.youtube.com/embed/")){
        try {
            await conectaApi.criaVideo(titulo, descricao, url, imagem)
            
            window.location.href = "../pages/envio-concluido.html"
        } catch(e) {
            alert(e);
        }
    } else {
        alert("Insira um link em formato adequado")
    }
}

formulario.addEventListener('submit', evento => criarVideo(evento))