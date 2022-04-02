const { error } = require("jquery");

function consultaCep() {
  $(".barra-progresso").show();
  var cep = document.getElementById("cep").value;
  $.ajax({
    url: `https://viacep.com.br/ws/${cep}/json`,
    type: "GET",
    success: function (response) {
      $("#logradouro").html(response.bairro);
      $("#bairro").html(response.logradouro);
      $("#uf").html(response.uf);
      $("#localidade").html(response.localidade);
      $("#titulo-cep").html("CEP: " + response.cep);
      $(".cep").show();
      $(".barra-progresso").hide();

      /* document.getElementById("bairro").innerHTML =
        "Bairro: " + response.bairro;
      document.getElementById("logradouro").innerHTML =
        "Logradouro: " + response.logradouro;
      document.getElementById("localidade").innerHTML =
        "Localidade: " + response.localidade;
      document.getElementById("uf").innerHTML = "UF: " + response.uf;*/
    },
    error: function () {
      $("#logradouro").html("Não Encontrado");
      $("#bairro").html("Não Encontrado");
      $("#uf").html("Não Encontrado");
      $("#localidade").html("Não Encontrado");
      $("#titulo-cep").html("CEP: Verifique o CEP");
      $(".cep").show();
      $(".barra-progresso").hide();
    },
  });
}

$(function () {
  $(".cep").hide();
  $(".barra-progresso").hide();
});
