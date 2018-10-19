/****************************NAVBAR*****************************/
/****************************FIN NAVBAR*************************/
/***************************PRESENTATION************************/
$(document).ready(function() {
  $('.has-animation').each(function(index) {
    $(this).delay($(this).data('delay')).queue(function(){
      $(this).addClass('animate-in');
    });
  });

/***************************FIN PRESENTATION********************/
/****************************BOUTIQUE***************************/
/****************************FIN BOUTIQUE***********************/
/****************************PANIER*****************************/
var itemCount = 0;
var priceTotal = 0;



// Ajoute un produit au panier
$('.add').click(function (){
  itemCount ++;

  $('#itemCount').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem btn btn-light">Supprimer ce produit</button>');

  // Calculer le prix total
  var price = parseInt($(this).siblings().find('.price').text());
  priceTotal += price;
  $('#cartTotal').text("Total: " + priceTotal + " €");
});



// Ouvre et cache le panier
$('.openCloseCart').click(function(){
  $('#shoppingCart').toggle();
});


// Vider le panier
$('#emptyCart').click(function() {
  itemCount = 0;
  priceTotal = 0;

  $('#itemCount').css('display', 'none');
  $('#cartItems').text('');
  $('#cartTotal').text("Total: " + priceTotal + "€");
});



// Supprimer un produit du panier
$('#shoppingCart').on('click', '.removeItem', function(){
  $(this).parent().remove();
  itemCount --;
  $('#itemCount').text(itemCount);

  // Retire le prix d'un produit supprimé du prix total
  var price = parseInt($(this).siblings().find('.price').text());
  priceTotal -= price;
  $('#cartTotal').text("Total: " + priceTotal + " €");

  if (itemCount == 0) {
    $('#itemCount').css('display', 'none');
  }
});

});
/****************************FIN PANIER*************************/
/****************************MENTIONS LEGALES*******************/
$('#footer').css('display', 'block');
//$('.row').css({})
/****************************FIN MENTIONS LEGALES***************/
