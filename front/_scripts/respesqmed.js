
/*    <!-- JS DO RESULTADO DE BUSCA -->


---------------------------------------------------------
                    $('#contact-list').append(
                        $('<li>')
                        .append(
                            $('<div>')
                            .attr('class, "col-xs-12 col-sm-3"')
                            .append($('<img>')
                              .attr("src","http://api.randomuser.me/portraits/men/49.jpg")
                              .attr("alt", $strnome)
                              .attr("class", "img-responsive img-circle")))
                        .append(
                            $('<div>')
                            .attr('class', "col-xs-12 col-sm-9")
                            .append($('<span>')
                              .attr("class","name")
                              .attr("text", $strnome))
                            .append($('<span>')
                                .attr("class","glyphicon glyphicon-map-marker text-muted c-info")
                                .attr("data-toggle", "tooltip")
                                .attr("title", "Endereco 1"))
                            .append($('<span>')
                                .attr("class","visible-xs")
                                .append($('<span>')
                                    .attr("class","text-muted")
                                    .attr("text","Endereco 1")))
                            .append($('<span>')
                                .attr("class","glyphicon glyphicon-earphone text-muted c-info")
                                .attr("data-toggle", "tooltip")
                                .attr("title", "Tel 1"))
                            .append($('<span>')
                                .attr("class","visible-xs")
                                .append($('<span>')
                                    .attr("class","text-muted")
                                    .attr("text","Tel 1")))
                            .append($('<span>')
                                    .attr("class","fa fa-comments text-muted c-info")
                                    .attr("data-toggle", "tooltip")
                                    .attr("title", "email 1"))
                            .append($('<span>')
                                    .attr("class","visible-xs")
                                    .append($('<span>')
                                          .attr("class","text-muted")
                                          .attr("text","email 1")))));

                    <li class="list-group-item">
                        <div class="col-xs-12 col-sm-3">
                            <img src="http://api.randomuser.me/portraits/men/49.jpg" alt="Scott Stevens" class="img-responsive img-circle" />
                        </div>
                            <div class="col-xs-12 col-sm-9">
                                <span class="name">João da Silva</span><br/>
                                <span class="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip" title="5842 Hillcrest Rd"></span>
                                <span class="visible-xs">
                                  <span class="text-muted">5842 Hillcrest Rd</span><br/>
                                </span>
                                <span class="glyphicon glyphicon-earphone text-muted c-info" data-toggle="tooltip" title="(870) 288-4149"></span>
                                <span class="visible-xs">
                                  <span class="text-muted">(870) 288-4149</span><br/>
                                </span>
                                <span class="fa fa-comments text-muted c-info" data-toggle="tooltip" title="scott.stevens@example.com"></span>
                                <span class="visible-xs">
                                  <span class="text-muted">scott.stevens@example.com</span><br/>
                                </span>
                            </div>
                                <div class="clearfix"></div>
                    </li>


                    $.each(data, function(i, nome){
                      $('#form-control-nome')
                      .append($("<option></option>")
                                        .attr("value",nome.id)
                                        .text(nome.nome));

 */



function mostraresultados(data) {
console.log(data);

   $.each(data, function(i, medicos){
    $('#lista-medico').append($('<li>').text(medicos.nome));

    console.log(medicos.nome, medicos.id);
})
    };




  /*            .append(
                   $('<div>')
                   .attr('class', "col-xs-12 col-sm-9")
                   .append($('<span>')
                     .attr("class","name")
                     .attr("text", medicos.nome))
                   .append($('<span>')
                       .attr("class","glyphicon glyphicon-map-marker text-muted c-info")
                       .attr("data-toggle", "tooltip")
                       .attr("title", "Endereco 1"))
                   .append($('<span>')
                       .attr("class","visible-xs")
                       .append($('<span>')
                           .attr("class","text-muted")
                           .attr("text","Endereco 1")))
                           .append($('<br>'))
                   .append($('<span>')
                       .attr("class","glyphicon glyphicon-earphone text-muted c-info")
                       .attr("data-toggle", "tooltip")
                       .attr("title", "Tel 1"))
                   .append($('<span>')
                       .attr("class","visible-xs")
                       .append($('<span>')
                           .attr("class","text-muted")
                           .attr("text","Tel 1")))
                           .append($('<br>'))
                   .append($('<span>')
                           .attr("class","fa fa-comments text-muted c-info")
                           .attr("data-toggle", "tooltip")
                           .attr("title", "email 1"))
                   .append($('<span>')
                           .attr("class","visible-xs")
                           .append($('<span>')
                                 .attr("class","text-muted")
                                 .attr("text","email 1")
                                 .append($('<br>')))))
                .append(
                    $('<div>')
                      .attr('class', 'clearfix'))
   */


    /* BOOTSNIPP FULLSCREEN FIX
    if (window.location == window.parent.location) {
        $('#back-to-bootsnipp').removeClass('hide');
    }


    $('[data-toggle="tooltip"]').tooltip();

    $('#fullscreen').on('click', function(event) {
        event.preventDefault();
        window.parent.location = "http://bootsnipp.com/iframe/4l0k2";
    });
    $('a[href="#cant-do-all-the-work-for-you"]').on('click', function(event) {
        event.preventDefault();
        $('#cant-do-all-the-work-for-you').modal('show');
    })

    $('[data-command="toggle-search"]').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('hide-search');

        if ($(this).hasClass('hide-search')) {
            $('.c-search').closest('.row').slideUp(100);
        }else{
            $('.c-search').closest('.row').slideDown(100);
        }
    })*/
/*
    $('#contact-list').searchable({
        searchField: '#contact-list-search',
        selector: 'li',
        childSelector: '.col-xs-12',
        show: function( elem ) {
            elem.slideDown(100);
        },
        hide: function( elem ) {
            elem.slideUp( 100 );
        }
    })


}*/
