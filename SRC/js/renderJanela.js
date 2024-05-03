const janela = document.querySelector(".janela");
export function renderJanela (html){
    // Limpa, coloca o texto e renderiza
    janela.innerHTML = '';
    janela.insertAdjacentHTML("afterbegin",html);
    janela.style.display = "block";
    
}
export function unrenderWindow(){
    janela.style.display = "none";
}