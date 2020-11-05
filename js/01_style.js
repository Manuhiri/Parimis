jQuery(document).ready(function(){
  //-----------------------------------------------------//
  //----------- test si ma page génére mon js -----------//
    console.log ('test');

  //-----------------------------------------------------//
  // --------------------- Navigation -------------------//
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

    // Lorsque que l'n quitte la navigation tous les menus se cache
    $("nav").mouseleave(function(){
        $("div.sousMenu").slideUp("normal");
    });


  
  //-----------------------------------------------------//
  //- Footer décor repris dans certain endroit du site -//

    $(".decor").before('<div class="cinqLigneTop"><div class="cinqLigneDeux"><div class="cinqLigneMiddle"></div></div></div>');


  //-----------------------------------------------------//
  //--------------------- bloc logo -------------------- //

    //Lorsque ll'on survole le logo celui ci disparait pour faire apparaitre la flèche
    $( "main .logo" ).mouseenter(function() {
        $(this).animate( ".blocLogo .logo" ).fadeOut( 500 );
    });
    //Au départ de la sourie le logo revient
    $( ".blocLogo" ).mouseleave(function() {
      $( ".blocLogo .logo" ).fadeIn( 500 );
    });

      
  //-----------------------------------------------------//
  //-------------------- calendrier ---------------------//
    // Calendrier réservation chambre
    $( function() {
      var dateFormat = "dd/mm/yy",
        from = $( "#from" )
          .datepicker({
              defaultDate: "+1w",
              changeMonth: true,
              numberOfMonths: 3,
              dateFormat: "dd/mm/yy",
              firstDay: 1,
              monthNames: [ "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre" ],
              dayNamesMin: [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ]
          })
          .on( "change", function() {
            to.datepicker( "option", "minDate", getDate( this ) );
          }),
        to = $( "#to" ).datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 3,
          dateFormat: "dd/mm/yy",
          firstDay: 1,
          monthNames: [ "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre" ],
          dayNamesMin: [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ]
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

    //Calendrier reservation restaurant
    $( "#datepicker" ).datepicker({
      dateFormat: "dd/mm/yy",
      firstDay: 1,
      monthNames: [ "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Auot", "Septembre", "Octobre", "Novembre", "Decembre" ],
      dayNamesMin: [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ]
    });
      
    $( "#datepicker2" ).datepicker({
      dateFormat: "dd/mm/yy",
      firstDay: 1,
      monthNames: [ "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Auot", "Septembre", "Octobre", "Novembre", "Decembre" ],
      dayNamesMin: [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ]
    });
  

      
  //-----------------------------------------------------//
  //-- Faire apparaitre le ou les formulaire souhaité --//
      //Tous les formulaires sont caché
    $("main .resaChambre").hide();
    $("main .resaRestaurant").hide();
    $("main .resaSpa").hide();

      //Condition if elfse if pour faire apparaitre le formulaire souhaité
    $("#choixResa").ready(function(){
        $("#choixResa select").change(function(){
          $(this).find("option:selected").each(function(){
            var val = $(this).attr("value");
              if (val == 'chambre'){
                $("main .resaChambre").slideDown("normal");
                $("main .resaRestaurant").slideUp("normal");
                $("main .resaSpa").slideUp("normal");
              }else if(val =='table'){
                      $("main .resaChambre").slideUp("normal");
                      $("main .resaRestaurant").slideDown("normal");
                      $("main .resaSpa").slideUp("normal");
                    }else if (val == 'spa'){
                            $("main .resaChambre").slideUp("normal");
                            $("main .resaRestaurant").slideUp("normal");
                            $("main .resaSpa").slideDown("normal");
                          }else if(val == 'tous'){
                                  $("main .resaChambre").slideDown("normal");
                                  $("main .resaRestaurant").slideDown("normal");
                                  $("main .resaSpa").slideDown("normal");
                                }else{
                                  $("main .resaChambre").slideUp("normal");
                                  $("main .resaRestaurant").slideUp("normal");
                                  $("main .resaSpa").slideUp("normal");
                                }
          });
        }).change();
    });


  //----------------------------------------------------//
  //------ Choix sur les page restaurant et spa --------//
      //cache la partie choix
    $(".bouttonChoix").hide();

      //Affiche les 2 options quand la sourie passe sur choix
      $( ".bouttonHover" )
        .mouseenter(function() {
          $( this )
            .toggleClass( ".bouttonChoix" )
            .next().slideToggle();
      });
      //Cache les options qaund la sourie sort de la figcaption
      $( "figcaption" ).mouseleave(function() {
        $( ".bouttonChoix" ).slideUp("normal");
        $(".bouttonHover").slideDown("normal");
      });


    
      
  //---------------------------------------------------//
  //------------ Affichage des articles ---------------//
    $( function() {
      $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
      $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
    } );

  
  //---------------------------------------------------//
  //------------ Affichage des articles ---------------//
    $( function() {
      $( "#accordion" ).accordion();
    } );

    
});
