/****************************NAVBAR*****************************/
/****************************FIN NAVBAR*************************/
/************************** PRESENTATION ************************/
$(document).ready(function() {
  $('.has-animation').each(function(index) {
    $(this).delay($(this).data('delay')).queue(function(){
      $(this).addClass('animate-in');
    });
  });
});
/************************** FIN PRESENTATION ********************/

/****************************BOUTIQUE***************************/
/****************************FIN BOUTIQUE***********************/
/****************************PANIER*****************************/
/****************************FIN PANIER*************************/
/****************************MENTIONS LEGALES*******************/
/****************************FIN MENTIONS LEGALES***************/
