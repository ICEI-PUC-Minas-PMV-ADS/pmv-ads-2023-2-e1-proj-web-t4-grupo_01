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

  function selectEmergencia() {
    let elementoEmergencia = document.getElementById("emergencia-form-dropdown").value;
    let emergenciaApresenta = document.getElementById("emergencia-apresenta");
    let emergenciaTransito = document.getElementById("emergencia-transito");
    let emergenciaVeneno = document.getElementById("emergencia-veneno");
    let emergenciaOrfao = document.getElementById("emergencia-orfao");
    let emergenciaSelva = document.getElementById("emergencia-selva");
    let emergenciaVet = document.getElementById("emergencia-vet");
    let respostaVet = document.getElementById("resposta-vet");
    if ((elementoEmergencia == "transito")) {
        emergenciaApresenta.style.display = "none";
        emergenciaTransito.style.display = "flex";
        emergenciaVeneno.style.display = "none";
        emergenciaOrfao.style.display = "none";
        emergenciaSelva.style.display = "none";
        emergenciaVet.style.display = "none";
        respostaVet.style.display = "flex";
    }
    if ((elementoEmergencia == "veneno")) {
        emergenciaApresenta.style.display = "none";
        emergenciaTransito.style.display = "none";
        emergenciaVeneno.style.display = "flex";
        emergenciaOrfao.style.display = "none";
        emergenciaSelva.style.display = "none";
        emergenciaVet.style.display = "none";
        respostaVet.style.display = "flex";
    }
    if ((elementoEmergencia == "orfao")) {
        emergenciaApresenta.style.display = "none";
        emergenciaTransito.style.display = "none";
        emergenciaVeneno.style.display = "none";
        emergenciaOrfao.style.display = "flex";
        emergenciaSelva.style.display = "none";
        emergenciaVet.style.display = "none";
        respostaVet.style.display = "flex";
    }
    if ((elementoEmergencia == "selva")) {
        emergenciaApresenta.style.display = "none";
        emergenciaTransito.style.display = "none";
        emergenciaVeneno.style.display = "none";
        emergenciaOrfao.style.display = "none";
        emergenciaSelva.style.display = "flex";
        emergenciaVet.style.display = "none";
        respostaVet.style.display = "flex";
    }
    if ((elementoEmergencia == "vet")) {
        emergenciaApresenta.style.display = "none";
        emergenciaTransito.style.display = "none";
        emergenciaVeneno.style.display = "none";
        emergenciaOrfao.style.display = "none";
        emergenciaSelva.style.display = "none";
        emergenciaVet.style.display = "flex";
        respostaVet.style.display = "flex";
    }
}
  /* -Código da pagina formulário de usuário vonluntário- */
  
  /* -Código da pagina formulário de usuário organizacional- */
  