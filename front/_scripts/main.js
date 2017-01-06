
// Variáveis de carga inicial
  var $palavrachaveobj;
  var $nome = $('#form-control-nome');
  var $cidade = $('#form-control-cidade');
  var $especialidade = $('#form-control-especialidade');

//Variáveis para consulta
  var $palavrachave;

  var $strnome;
  var $vlenome;

  var $strcidade;
  var $vlecidade;

  var $strespecialidade;
  var $vleespecialidade;

  var $dataselect;

  var $nomemedicos;

  var $botaopesquisa;

  var dataMedicos;


  //Monta URL de consulta

    function montaurl() {

    if ((!$palavrachave) && (!$vlenome || $vlenome == 0) && (!$vlecidade || $vlecidade == 0) && (!$vleespecialidade || $vleespecialidade == 0)) {
      $dataselect="http://vhospital.herokuapp.com/apiv0/medico/";
    console.log($dataselect);
    }
    else {
      if (!$palavrachave && (!$vlenome || $vlenome == 0) && (!$vlecidade || $vlecidade == 0)) {
        $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?especialidade=" + $vleespecialidade;
        console.log($dataselect);
      }
      else {
        if (!$vlenome && (!$vlecidade || $vlecidade == 0) && (!$vleespecialidade || $vleespecialidade == 0)){
        $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?palavrachave=" +  $palavrachave;
        console.log($dataselect);
        }
        else {
          if (!$palavrachave && (!$vlenome || $vlenome == 0) && (!$vleespecialidade || $vleespecialidade == 0)){
            $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?cidade=" + $vlecidade;
            console.log($dataselect);
          }
          else {
            if (!$palavrachave && (!$vlecidade || $vlecidade == 0)  && (!$vleespecialidade || $vleespecialidade == 0)){
              $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?nome=" + $vlenome;
              console.log($dataselect);
            }
            else{
              if (!$palavrachave && (!$vlenome || $vlenome == 0)) {
                $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?cidade=" + $vlecidade + "&especialidade=" + $vleespecialidade;
                console.log($dataselect);
              }
              else {
                if ((!$vlecidade || $vlecidade == 0)  && (!$vleespecialidade || $vleespecialidade == 0)){
                  $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?palavrachave=" + $palavrachave + "&nome=" + $vlenome;
                  console.log($dataselect);
                }
                else {
                  if ((!$vlenome || $vlenome == 0) && (!$vlecidade || $vlecidade == 0) ){
                    $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?palavrachave=" + $palavrachave  + "&especialidade=" + $vleespecialidade;
                    console.log($dataselect);
                  }
                  else {
                    if ((!$vlenome || $vlenome == 0) && (!$vleespecialidade || $vleespecialidade == 0)){
                      $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?palavrachave=" + $palavrachave + "&cidade=" +  $vlecidade;
                      console.log($dataselect);
                    }
                    else {
                      if (!$palavrachave && (!$vlecidade || $vlecidade == 0) ){
                        $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?nome=" + $vlenome + "&especialidade=" +  $vleespecialidade;
                        console.log($dataselect);
                      }
                      else {
                        if (!$palavrachave && (!$vleespecialidade || $vleespecialidade == 0)){
                          $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?nome=" + $vlenome + "&cidade=" +  $vlecidade;
                          console.log($dataselect);
                        }
                        else {
                          if (!$palavrachave) {
                            $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?nome=" + $vlenome + "&cidade=" + $vlecidade + "&especialidade=" + $vleespecialidade;
                            console.log($dataselect);
                          }
                          else {
                            if ((!$vlenome || $vlenome == 0)){
                              $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?palavrachave=" + $palavrachave  + "&cidade" + $vlecidade + "&especialidade=" + $vleespecialidade;;
                              console.log($dataselect);
                            }
                            else {
                              if ((!$vlecidade || $vlecidade == 0) ){
                                $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?palavrachave=" + $palavrachave + "&nome=" + $vlenome + "&especialidade=" + $vleespecialidade;;
                                console.log($dataselect);
                              }
                              else {
                                if ((!$vleespecialidade || $vleespecialidade == 0)){
                                  $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?palavrachave=" + $palavrachave + "&nome=" + $vlenome + "&cidade=" + $vlecidade;
                                  console.log($dataselect);
                                }
                                else {
                                  $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?palavrachave=" + $palavrachave + "&nome=" +  $vlenome + "&cidade=" + $vlecidade + "&especialidade=" + $vleespecialidade;
                                  console.log($dataselect);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
    };
    };

  //
        // função mostra Resultados da consulta de medicos
  //
        function insereResultados(){
  //
        // captura a palavra chave
  //
          $palavrachaveobj = document.getElementById("form-control-palavrachave");
          $palavrachave = $palavrachaveobj.value;
  //
          // Chama função para montar URL de pesquisa
  //
            console.log($palavrachave, $vlenome, $vlecidade, $vleespecialidade);
            montaurl($palavrachave, $vlenome, $vlecidade, $vleespecialidade);
  //
          // Chama serviço de pesquisa no Backend
  //
              $.ajax({
                type: 'GET',
                url: $dataselect,
                success: function (dataMedicos) {

                  $("#resultados tr:gt(0)").remove();

                  var tabres = document.getElementById("resultados")
                  $.each(dataMedicos, function(i, medicos){
                    var lin = tabres.insertRow();
                    var cel = lin.insertCell();
                    var nmed = medicos.nome;
                    cel.append(nmed);
                  console.log(medicos.nome, medicos.id);
                  });
                },
                error: function(){
                  alert('errorloading Lista Medicos');
                },
                });

        };

$(function() {


function limpeza(){

  // Limpando variaveis
  //
      $palavrachave = null;
      $strnome = null;
      $vlenome = null;
      $strcidade = null;
      $vlecidade = null;
      $strespecialidade = null;
      $vleespecialidade = null;

};


  //carga inicial dos nomes dos médicos para seleção

//
  //Adiciona Nome do Médico
//
    function appOptionNome(dataNome){
      $('#form-control-nome').append($("<option></option>").attr("value",0).text("selecione o nome do medico"));
      $.each(dataNome, function(i, nome){
        $('#form-control-nome')
        .append($("<option></option>")
                          .attr("value",nome.id)
                          .text(nome.nome));
      });
    };
//
// Seleciona médico
//

    function selectOptionNome(){

        var e = document.getElementById("form-control-nome");
        console.log('lista nome', e);
  //        $strnome = e.options[0].text;
        $strnome = e.options[e.selectedIndex].text;
        $vlenome = e.options[e.selectedIndex].value;
    //    var $uflistasel = $('#uflistasel');
        console.log('Selecionado', $strnome);
        console.log('Selecionado', $vlenome);
}

    $('#form-control-nome').change(function(){
        selectOptionNome();
      });

//
  // Chama função para buscar o nome dos médicos
//

    $.ajax({
      type: 'GET',
      url: 'http://vhospital.herokuapp.com/apiv0/medico/',
  // Chama função para adicionar o nome dos médicos para seleção
      success: function(dataNome){
        appOptionNome(dataNome)
      },
      error: function(){
        alert('errorloading Nome Prestador');
      },
    });

//
  //Carga da Cidade
//
    function appOptionCidade(dataCidade){
      $('#form-control-cidade').append($("<option></option>").attr("value",0).text("selecione a cidade"));
      $.each(dataCidade, function(i, nome){
        $('#form-control-cidade')
        .append($("<option></option>")
                          .attr("value",nome.id)
                          .text(nome.nome));
      });
    };

    function selectOptionCidade(){
        var e = document.getElementById("form-control-cidade");
    console.log('lista cidade', e);
        $strcidade = e.options[e.selectedIndex].text;
        $vlecidade = e.options[e.selectedIndex].value;
    console.log('Selecionado', $strcidade);
    };

  $('#form-control-cidade').change(function(){
          selectOptionCidade();
  });

    $.ajax({
      type: 'GET',

      url: 'http://vhospital.herokuapp.com/apiv0/cidade/',
      success: function(dataCidade) {
        appOptionCidade(dataCidade);
      },
      error: function(){
        alert('errorloading cidade');
      },
    });

//
    //Carga da especialidade
//

      function appOptionEspecialidade(dataEspecialidade){
        $('#form-control-especialidade').append($("<option></option>").attr("value",0).text("selecione a especialidade"));
        $.each(dataEspecialidade, function(i, nome){
          $('#form-control-especialidade')
          .append($("<option></option>")
                            .attr("value",nome.id)
                            .text(nome.nome));
        });
      };

      function selectOptionEspecialidade(){
          var e = document.getElementById("form-control-especialidade");
      console.log('lista especialidade', e);
          $strespecialidade = e.options[e.selectedIndex].text;
          $vleespecialidade = e.options[e.selectedIndex].value;
      console.log('Selecionado', $strespecialidade);
      };

    $('#form-control-especialidade').change(function(){
            selectOptionEspecialidade();
    });

      $.ajax({
        type: 'GET',

        url: 'http://vhospital.herokuapp.com/apiv0/especialidade/',
        success: function(dataEspecialidade) {
          appOptionEspecialidade(dataEspecialidade);
        },
        error: function(){
          alert('errorloading especialidade');
        },
      });





//      $botaopesquisa = document.getElementById("btn-primary-pesquisa");
//      $botaopesquisa.onclick = insereResultados();




    });
