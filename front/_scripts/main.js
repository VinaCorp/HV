
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


$(function() {

//
// Consulta Prestadores
//
  $('#btn-primary-pesquisa').click(function(){

    $palavrachaveobj = document.getElementById("form-control-palavrachave");
    $palavrachave = $palavrachaveobj.value;

  console.log('Palavra chave', $palavrachave, $vlenome, $vlecidade, $vleespecialidade);

    montaurl($palavrachave, $vlenome, $vlecidade, $vleespecialidade);


  $.ajax({
          type: 'GET',
          url: $dataselect,

          success: function (data) {
 console.log(data);

// 



          mostraresultados(data);
          },

          error: function(){
              alert('errorloading Lista Prestador');
          },
        })
    })

//
// Limpando variaveis
//
    $palavrachave = null;
    $strnome = null;
    $vlenome = null;
    $strcidade = null;
    $vlecidade = null;
    $strespecialidade = null;
    $vleespecialidade = null;







//
//Carga do Nome do Prestador
//
  function appOptionNome(data){
    $('#form-control-nome').append($("<option></option>").attr("value",0).text("selecione o nome do medico"));
    $.each(data, function(i, nome){
      $('#form-control-nome')
      .append($("<option></option>")
                        .attr("value",nome.id)
                        .text(nome.nome));
    });
  };

  function selectOptionNome(){

      var e = document.getElementById("form-control-nome");
      console.log('lista nome', e);
//        $strnome = e.options[0].text;
      $strnome = e.options[e.selectedIndex].text;
      $vlenome = e.options[e.selectedIndex].value;
  //    var $uflistasel = $('#uflistasel');
      console.log('Selecionado', $strnome);
      console.log('Selecionado', $vlenome);

//      showOption();
//      var outsel = document.getElementById('ufselecionada');
//      outsel.value = struf;
//      console.log('Selecionado', struf);
  };

$('#form-control-nome').change(function(){

        selectOptionNome();
});

  $.ajax({
    type: 'GET',
    url: 'http://vhospital.herokuapp.com/apiv0/medico/',
    success: function(data) {
      appOptionNome(data);
    },
    error: function(){
      alert('errorloading Nome Prestador');
    },
  });

  //Carga da Cidade

    function appOptionCidade(data){
      $('#form-control-cidade').append($("<option></option>").attr("value",0).text("selecione a cidade"));
      $.each(data, function(i, nome){
        $('#form-control-cidade')
        .append($("<option></option>")
                          .attr("value",nome.id)
                          .text(nome.cidade));
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

      url: 'http://vhospital.herokuapp.com/apiv0/localizacao/',
      success: function(data) {
        appOptionCidade(data);
      },
      error: function(){
        alert('errorloading cidade');
      },
    });

    //Carga da especialidade

      function appOptionEspecialidade(data){
        $('#form-control-especialidade').append($("<option></option>").attr("value",0).text("selecione a especialidade"));
        $.each(data, function(i, nome){
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

      //    var $uflistasel = $('#uflistasel');
          console.log('Selecionado', $strespecialidade);
    //      showOption();
    //      var outsel = document.getElementById('ufselecionada');
    //      outsel.value = struf;
    //      console.log('Selecionado', struf);
      };

    $('#form-control-especialidade').change(function(){
            selectOptionEspecialidade();
    });

      $.ajax({
        type: 'GET',

        url: 'http://vhospital.herokuapp.com/apiv0/especialidade/',
        success: function(data) {
          appOptionEspecialidade(data);
        },
        error: function(){
          alert('errorloading especialidade');
        },
      });
});
