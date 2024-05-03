import { renderJanela, unrenderWindow } from "./SRC/js/renderJanela.js";
const imgContainer = document.querySelector(".imgContainer");
const form = document.querySelector(".form");
let innerHtml = "";

// imgContainer é uma classe, mas cada elemento nela possui um id diferente
imgContainer.addEventListener("click", function (e) {
  // Um texto para cada imagem
  switch (e.target.id) {
    case "bunkerImg":
      innerHtml = `
        <h2 class="windowName">Bunker Cyber Security</h2>
        <p class="windowDesc">A Bunker Cyber Security é uma empresa especializada em segurança da informação, proteção
        de dados e governança, sediada em São Paulo e com atuação em todo o Brasil. Nosso
        compromisso é oferecer soluções inovadoras e eficazes, aliadas a serviços de excelência,
        abrangendo uma ampla superfície corporativa, desde endpoints, servidores, dispositivos móveis
        e nuvem até a gestão de riscos e governança de dados.</p>
        <p class="link"> Visite a página <span ><a href="https://bunkercs.com.br/">https://bunkercs.com.br/</a></span> para ver mais. </p>
        `;
      renderJanela(innerHtml);
      break;
    case "crowdstrike":
      innerHtml = `
        <h2 class="windowName">Crowdstrike</h2>
        <p class="windowDesc">Líder em soluções de cibersegurança, oferecendo detecção e resposta a ameaças em endpoints 
        (estações, servidores, dispositivos móveis), identidade (credenciais no Active Directory) e nuvem.</p>
        <p class="link"> Visite a página <span ><a href="https://www.crowdstrike.com/pt-br/">https://www.crowdstrike.com/pt-br/</a></span> para ver mais. </p>
        `;
      renderJanela(innerHtml);
      break;
    case "picus":
      innerHtml = `
        <h2 class="windowName">Picus Security</h2>
        <p class="windowDesc">Líder em soluções de BAS (Breach and Attack Simulation), 
        permitindo que empresas avaliem sua postura de segurança cibernética de forma estruturada e automatizada,
        com milhares de tipos de ataques constantemente atualizados</p>
        <p class="link"> Visite a página <span ><a href="https://www.picussecurity.com/">https://www.picussecurity.com/</a></span> para ver mais. </p>
        `;
      renderJanela(innerHtml);
      break;
    case "beyondtrust":
      innerHtml = `
        <h2 class="windowName">BeyondTrust</h2>
        <p class="windowDesc">Líder em segurança e governança de dados, 
        oferecendo uma excelente solução de cofre de senhas e uma plataforma para comunicação remota privilegiada que substitui o uso de VPN.</p>
        <p class="link"> Visite a página <span ><a href="https://www.beyondtrust.com/">https://www.beyondtrust.com/</a></span> para ver mais. </p>
        `;
      renderJanela(innerHtml);
      break;
    default:
      // Se o click não bater com nenhum case, fecha o popup
      unrenderWindow();
      break;
  }
});

function redirectToPage(tipo) {
  if (!tipo.target.id) return;

  if (tipo.target.id === "aluno") {
    window.open(
      "https://forms.gle/vMUcqLwxHXVgctj5A"
    );
  } else {
    window.open(
      "https://forms.gle/wvDyDih7xePA1epN6"
    )
  }
}

function init() {
  document.querySelector(".endeFatec").addEventListener("click", function () {
    // Abre uma pagina com o endereço da Faculdade
    window.open(
      "https://www.google.com.br/maps/place/Fatec+Araraquara/@-21.7735827,-48.1368035,18.82z/data=!4m6!3m5!1s0x94b8f420999cd2b1:0x4264a68f7e51b015!8m2!3d-21.7735733!4d-48.1365668!16s%2Fg%2F11clvrtzp5?entry=ttu"
    );
  });

  document.querySelector(".formBtn").addEventListener("click", function () {
    form.style.display = "block";
  });
  document.querySelector(".btnClose").addEventListener("click", function () {
    form.style.display = "none";
  });
  document.querySelector(".formType").addEventListener("click", redirectToPage);
}
init();
