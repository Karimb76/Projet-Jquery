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
  var quantity = $(this).parent.length - 1;

  $('#itemCount').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem btn btn-light">Supprimer ce produit</button>').css("display", "inline-block").attr('class','mx-auto');
  $("#cartItems img").css("max-height", "100px")
  var quantitymaj = quantity;
  $('#cartItems').on('click', '.btnPlus', function (){
      quantitymaj ++;
      $("#cartItems #quant").text(quantitymaj)
    });
    $('#shoppingCart').on('click', '.btnMoins', function (){
        quantitymaj --;
        $("#cartItems #quant").text(quantitymaj)
      });

  // Calculer le prix total
  var price = parseInt($(this).siblings().find('.price').text());
  priceTotal += (quantitymaj * price);
  $('#cartTotal').text("Total: " + priceTotal + " €").css("text-align", "center").css("font-weight", "bolder");
});




// Ouvre et cache le panier
$('.openCloseCart').click(function(){
  $('#shoppingCart').toggle();
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
