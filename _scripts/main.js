$(function() {


// Variáveis de carga inicial
  var $palavrachaveobj;
  var $nome = $('#form-control-nome');
  var $cidade = $('#form-control-cidade');
  var $especialidade = $('#form-control-especialidade');

//Variáveis para consulta
  var $palavrachave;
  var $strnome;
  var $strcidade;
  var $strespecialidade;
  var $dataselect;



  // Consulta Prestadores

  $('#btn-primary-pesquisa').click(function(){
    $palavrachaveobj = document.getElementById("form-control-palavrachave");
    $palavrachave = $palavrachaveobj.value;
  console.log('Palavra chave', $palavrachave, $strnome, $strcidade, $strespecialidade);

    $dataselect= "{" + '"palavrachave"' + ":" + '"' + $palavrachave + '"' + "," +
          '"nome"' + ":" + '"' + $strnome + '"' + "," +
          '"cidade"' + ":" +  '"' + $strcidade + '"'+ "," +
          '"especialidade"' + ":" +  '"' + $strespecialidade + '"' + "}";
console.log($dataselect);


//  $.ajax({
//          type: 'GET',
//          url: 'url',
//          data: $dataselect,

//          success: function (data) {
//              var names = data
//              $('#cand').html(data);
//          }
//      });
//console.log(data);

  });




//Carga do Nome do Prestador

  function appOptionNome(data){
    $.each(data.nomeprestador, function(i, nome){
      $('#form-control-nome')
          .append($('<option>', {i: i})
          .text(nome.nome));
    });
  };

  function selectOptionNome(){
      var e = document.getElementById("form-control-nome");
      console.log('lista nome', e);
      $strnome = e.options[e.selectedIndex].text;
  //    var $uflistasel = $('#uflistasel');
      console.log('Selecionado', $strnome);
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

    url: 'https://api.myjson.com/bins/53nkd',
    success: function(data) {
      appOptionNome(data);
    },
    error: function(){
      alert('errorloading Nome Prestador');
    },
  });

  //Carga da Cidade

    function appOptionCidade(data){
      $.each(data.cidade, function(i, nome){
        $('#form-control-cidade')
            .append($('<option>', {i: i})
            .text(nome.nome));
      });
      $strcidade="Curitiba";
      $strnome = "";
      $strespecialidade = "";
      $
    };

    function selectOptionCidade(){
        var e = document.getElementById("form-control-cidade");
        console.log('lista cidade', e);
        $strcidade = e.options[e.selectedIndex].text;
    //    var $uflistasel = $('#uflistasel');
        console.log('Selecionado', $strcidade);
  //      showOption();
  //      var outsel = document.getElementById('ufselecionada');
  //      outsel.value = struf;
  //      console.log('Selecionado', struf);
    };

  $('#form-control-cidade').change(function(){
          selectOptionCidade();
  });

    $.ajax({
      type: 'GET',

      url: 'https://api.myjson.com/bins/ouqt',
      success: function(data) {
        appOptionCidade(data);
      },
      error: function(){
        alert('errorloading cidade');
      },
    });

    //Carga da especialidade

      function appOptionEspecialidade(data){
        $.each(data.especialidade, function(i, nome){
          $('#form-control-especialidade')
              .append($('<option>', {i: i})
              .text(nome.nome));
        });
      };

      function selectOptionEspecialidade(){
          var e = document.getElementById("form-control-especialidade");
          console.log('lista especialidade', e);
          $strespecialidade = e.options[e.selectedIndex].text;
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

        url: 'https://api.myjson.com/bins/23oap',
        success: function(data) {
          appOptionEspecialidade(data);
        },
        error: function(){
          alert('errorloading especialidade');
        },
      });


});
// url: 'https://api.myjson.com/bins/2p0f6',
