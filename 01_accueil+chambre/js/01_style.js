jQuery(document).ready(function(){
  //test si ma page génére mon js
    console.log ('test');

  // ----------- Navigation -----------//
    // On cache les sous-menus :
    $(".sousMenu").hide();


    // On modifie l'évènement "click"
    $("nav li h2").click( function () {
        // Si le sous-menu était déjà ouvert, on le referme :
        if ($(this).next("div.sousMenu:visible").length != 0) {
            $(this).next("div.sousMenu").slideUp("normal");
        }
        // Si le sous-menu est caché, on ferme les autres et on l'affiche :
        else {
            $("nav div.sousMenu").slideUp("normal");
            $(this).next("div.sousMenu").slideDown("normal");
        }
    });

    $("nav").mouseleave(function(){
        $("div.sousMenu").slideUp("normal");
    });


  // ----------- Footer décor repris dans certain endroit du site -----------//

  $(".decor").before('<div class="cinqLigneTop"><div class="cinqLigneDeux"><div class="cinqLigneMiddle"></div></div></div>');

  // ----------- Mise en place des icone ----------- //




  // ----------- bloc logo ----------- //
    $(".fleche").hide();


    $( ".blocLogo" ).mouseenter(function() {
        $( ".blocLogo .logo" ).fadeOut( 500 );
        $(".fleche").fadeIn( 500 );
      });

      $( ".blocLogo" ).mouseleave(function() {
        $( ".blocLogo .logo" ).fadeIn( 500 );
        $(".fleche").fadeOut( 500 );
      });














      // ----------- calendrier -----------//


    // Calendrier chambre
    $( function() {
      var dateFormat = "mm/dd/yy",
        from = $( "#from" )
          .datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 3
          })
          .on( "change", function() {
            to.datepicker( "option", "minDate", getDate( this ) );
          }),
        to = $( "#to" ).datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 3
        })
        .on( "change", function() {
          from.datepicker( "option", "maxDate", getDate( this ) );
        });
   
      function getDate( element ) {
        var date;
        try {
          date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
          date = null;
        }
   
        return date;
      }
    } );
    
    

    
    

});
