
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
  var $dataEspecialidade;

  //Monta URL de consulta

    function montaurl() {

    if ((!$palavrachave) && (!$vlenome || $vlenome == 0) && (!$vlecidade || $vlecidade == 0) && (!$vleespecialidade || $vleespecialidade == 0)) {
      $dataselect="/apiv0/medico/";
    console.log($dataselect);
    }
    else {
      if (!$palavrachave && (!$vlenome || $vlenome == 0) && (!$vlecidade || $vlecidade == 0)) {
        $dataselect="/apiv0/medico/?especialidade=" + $vleespecialidade;
        console.log($dataselect);
      }
      else {
        if (!$vlenome && (!$vlecidade || $vlecidade == 0) && (!$vleespecialidade || $vleespecialidade == 0)){
        $dataselect="/apiv0/medico/?palavrachave=" +  $palavrachave;
        console.log($dataselect);
        }
        else {
          if (!$palavrachave && (!$vlenome || $vlenome == 0) && (!$vleespecialidade || $vleespecialidade == 0)){
            $dataselect="/apiv0/medico/?cidade=" + $vlecidade;
            console.log($dataselect);
          }
          else {
            if (!$palavrachave && (!$vlecidade || $vlecidade == 0)  && (!$vleespecialidade || $vleespecialidade == 0)){
              $dataselect="/apiv0/medico/?nome=" + $vlenome;
              console.log($dataselect);
            }
            else{
              if (!$palavrachave && (!$vlenome || $vlenome == 0)) {
                $dataselect="/apiv0/medico/?cidade=" + $vlecidade + "&especialidade=" + $vleespecialidade;
                console.log($dataselect);
              }
              else {
                if ((!$vlecidade || $vlecidade == 0)  && (!$vleespecialidade || $vleespecialidade == 0)){
                  $dataselect="/apiv0/medico/?palavrachave=" + $palavrachave + "&nome=" + $vlenome;
                  console.log($dataselect);
                }
                else {
                  if ((!$vlenome || $vlenome == 0) && (!$vlecidade || $vlecidade == 0) ){
                    $dataselect="/apiv0/medico/?palavrachave=" + $palavrachave  + "&especialidade=" + $vleespecialidade;
                    console.log($dataselect);
                  }
                  else {
                    if ((!$vlenome || $vlenome == 0) && (!$vleespecialidade || $vleespecialidade == 0)){
                      $dataselect="/apiv0/medico/?palavrachave=" + $palavrachave + "&cidade=" +  $vlecidade;
                      console.log($dataselect);
                    }
                    else {
                      if (!$palavrachave && (!$vlecidade || $vlecidade == 0) ){
                        $dataselect="/apiv0/medico/?nome=" + $vlenome + "&especialidade=" +  $vleespecialidade;
                        console.log($dataselect);
                      }
                      else {
                        if (!$palavrachave && (!$vleespecialidade || $vleespecialidade == 0)){
                          $dataselect="/apiv0/medico/?nome=" + $vlenome + "&cidade=" +  $vlecidade;
                          console.log($dataselect);
                        }
                        else {
                          if (!$palavrachave) {
                            $dataselect="/apiv0/medico/?nome=" + $vlenome + "&cidade=" + $vlecidade + "&especialidade=" + $vleespecialidade;
                            console.log($dataselect);
                          }
                          else {
                            if ((!$vlenome || $vlenome == 0)){
                              $dataselect="/apiv0/medico/?palavrachave=" + $palavrachave  + "&cidade" + $vlecidade + "&especialidade=" + $vleespecialidade;;
                              console.log($dataselect);
                            }
                            else {
                              if ((!$vlecidade || $vlecidade == 0) ){
                                $dataselect="/apiv0/medico/?palavrachave=" + $palavrachave + "&nome=" + $vlenome + "&especialidade=" + $vleespecialidade;;
                                console.log($dataselect);
                              }
                              else {
                                if ((!$vleespecialidade || $vleespecialidade == 0)){
                                  $dataselect="/apiv0/medico/?palavrachave=" + $palavrachave + "&nome=" + $vlenome + "&cidade=" + $vlecidade;
                                  console.log($dataselect);
                                }
                                else {
                                  $dataselect="/apiv0/medico/?palavrachave=" + $palavrachave + "&nome=" +  $vlenome + "&cidade=" + $vlecidade + "&especialidade=" + $vleespecialidade;
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

    $("#ContainerResult1").remove();
};

function makeTableRes(container, dataMedicos ) {
  limpeza();




  var tableRes = $("<table"+" id="+ '"resultados1"'+ "class="+ '"table table-striped table-bordered table-list"'+"/>");

  if (dataMedicos.length !== 0) {

    var containerResult1 = "<div "+ "class=" + '"container"'+ " id=" + '"ContainerResult1"'+">"+"</div>";
  // var containerResult1 = "jkhdflhejbfkwejhfkwjeh";
//  console.log(containerResult1);
    $('#ContainerResult0').append(containerResult1);
     var rowRes0 = "<div "+ "class="+'"row"'+ " id="+'"rowRes0"'+">";
//      console.log(rowRes0);
      $('#ContainerResult1').append(rowRes0);
        var colMd10 = "<div " +"class="+'"col-md-10 col-md-offset-1"'+" id="+"'colMd10'"+">";
//        console.log(colMd10);
        $('#rowRes0').append(colMd10);
          var panelDef = "<div " +"class="+'"panel panel-default panel-table"'+" id="+'"panelDef"'+">";
//          console.log(panelDef);
          $('#colMd10').append(panelDef);
            var panelHRes = "<div " +"class="+'"panel-heading"'+" id="+'"panelHRes"'+">";
//            console.log(panelHRes);
            $('#panelDef').append(panelHRes);
              var rowRes1 = "<div "+"class="+'"row"'+" id="+'"rowRes1"'+">";
//              console.log(rowRes1);
                $('#panelHRes').append(rowRes1);
                var divColx6 = "<div "+"class="+'"col col-xs-6"'+" id="+'"divColx6"'+">";
//                console.log(divColx6);
                $('#rowRes1').append(divColx6);
                  var spanResultados = "<span "+"id="+ '"title-resultados"'+" class="+'"title"'+">Resultados</span>";
//                  console.log(spanResultados);
                  $('#divColx6').append(spanResultados);
                  var linkHref = "<link " + "href=" +'"https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz"' +" rel="+'"stylesheet"'+">";
//                  console.log(linkHref);
                  $('#divColx6').append(linkHref);


  };

  $.each(dataMedicos, function(rowIndex, medicos){
      var row = $("<tr/>");

      $.each(medicos, function(colIndex, c) {
      row.append($("<t"+(colIndex == 0 ?  "h" : "d")+"/>").text(c));

          tableRes.append(row);
//          tableRes.append("<div class="+'"clearfix"'+"></div>");
      });

  });


      return $('#panelHRes').append(tableRes);


  };


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
  //                $("#resultados tr:gt(0)").remove();
                console.log(dataMedicos);

// seleciona nome da especialidade
                $.each(dataMedicos, function(m, med){
                      console.log(med.especialidade);
                      $.each($dataEspecialidade, function(k, esp){
                        console.log(esp.id);
                        if (med.especialidade == esp.id){
                          dataMedicos.especialidade = esp.nome;
                        };

                      });
                      console.log(dataMedicos);
                });

//                $.each(dataEspecialidade, function(i, nome){

//                  $('#form-control-especialidade')
//                  .append($("<option></option>")
//                                    .attr("value",nome.id)
//                                    .text(nome.nome));
//                });


                var tableMedicos = makeTableRes('#paneltableRes', dataMedicos);
                },
                error: function(){
                  alert('errorloading Lista Medicos');
                },
                });

        };

$(function() {

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
      url: '/apiv0/medico/',
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

      url: '/apiv0/cidade/',
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
        url: '/apiv0/especialidade/',
        success: function(dataEspecialidade) {
          $dataEspecialidade = dataEspecialidade;
          appOptionEspecialidade(dataEspecialidade);
        },
        error: function(){
          alert('errorloading especialidade');
        },
      });





//      $botaopesquisa = document.getElementById("btn-primary-pesquisa");
//      $botaopesquisa.onclick = insereResultados();




    });
