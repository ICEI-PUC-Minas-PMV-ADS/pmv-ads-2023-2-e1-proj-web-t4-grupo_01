/* O codigo neste documento deve estar organizado em sessões, o topo do documento deve conter
todo script que pode(e vai) ser usado por mais de uma página, as sessões seguintes devem conter
a seguinte organização:

 -Código da página "Nome da pagina" (endereço)-
 Script usado no header
 Script usado no body
 Script unicos da página que não dependem de css ou HTML 
 */

/* -Código de uso em mais de uma página- */

/* -Código da página login (index.html)- */
function fechaRegistro() {
  let elemento = document.getElementById("ocupa-tela");
  if ((elemento.style.display == "flex")) {
    elemento.style.display = "none";
  } else {
    elemento.style.display = "flex";
  }
}
function ativaRegistro() {
    let elemento = document.getElementById("ocupa-tela");
    if ((elemento.style.display == "none")) {
        elemento.style.display = "flex";
    } else {
        elemento.style.display = "none";
    }
}

/* -Código da página pesquisa (pesquisa.html)- */

function selectBusca() {
    let elemento = document.getElementById("pesquisa-form-dropdown").value;
    let respostaOrg = document.getElementById("resposta-org");
    let respostaVet = document.getElementById("resposta-vet");
    let respostaHotel = document.getElementById("resposta-pethotel");
    let respostaShop = document.getElementById("resposta-petshop");
    if ((elemento == "org")) {
        respostaHotel.style.display = "none";
        respostaOrg.style.display = "flex";
        respostaShop.style.display = "none";
        respostaVet.style.display = "none";
    }
    if ((elemento == "petshop")) {
        respostaOrg.style.display = "none";
        respostaHotel.style.display = "none";
        respostaShop.style.display = "flex";
        respostaVet.style.display = "none";
    }
    if ((elemento == "pethotel")) {
        respostaHotel.style.display = "flex";
        respostaOrg.style.display = "none";
        respostaShop.style.display = "none";
        respostaVet.style.display = "none";
    }
    if ((elemento == "vet")) {
        respostaHotel.style.display = "none";
        respostaOrg.style.display = "none";
        respostaShop.style.display = "none";
        respostaVet.style.display = "flex";
    }
}
/* -Código da pagina formulário de usuário vonluntário- */

/* -Código da pagina formulário de usuário organizacional- */
