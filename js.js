/****************************NAVBAR*****************************/
/****************************FIN NAVBAR*************************/
/***************************PRESENTATION************************/
$(document).ready(function() {
  $('.has-animation').each(function(index) {
    $(this).delay($(this).data('delay')).queue(function(){
      $(this).addClass('animate-in');
    });
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

$(".add").click(function() {
  $(".alert").show();
});

$("#closealert").click(function() {
  $(".alert").hide();
});
/***************************FIN PRESENTATION********************/
/****************************BOUTIQUE***************************/
/****************************FIN BOUTIQUE***********************/
/****************************PANIER*****************************/
var itemCount = 0;


//ajoute le premier produit au panier
$('#add1').click(function (){
  if ($("#quantity1").length && $('#quantity1').val() < 10) { //si le produit existe déjà, rajouter 1 à la quantité
    $('#quantity1').val( function(i, quantity1) {
    return ++quantity1;
  });
  }
  else if ($('#quantity1').val() == 10) {
    alert("Vous avez déjà la quantité maximal de ce produit dans votre panier");
  }
  else { //sinon le rajouter au panier
  itemCount ++; //ajouter 1 au compteur du panier
  $('#itemCount, #itemCount2').text(itemCount).css('display', 'block'); //mettre à jour le compteur du panier
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem btn btn-light">Supprimer</button>').append("<input type='number' min='1' max='10' value='1' id='quantity1' />").css("display", "inline-block");
} //aller chercher les elements freres de #add1, les cloner dans #cartItems et rajouter un bouton supprimer et un input
  });

//ajoute le deuxieme produit au panier
$('#add2').click(function (){
  if ($("#quantity2").length && $('#quantity2').val() < 10) {  //si le produit existe déjà, rajouter 1 à la quantité
    $('#quantity2').val( function(i, quantity2) {
    return ++quantity2;
    });
  }
  else if ($('#quantity2').val() == 10) {
    alert("Vous avez déjà la quantité maximal de ce produit dans votre panier");
  }
  else {
  itemCount ++;
  $('#itemCount, #itemCount2').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem btn btn-light">Supprimer</button>').append("<input type='number' min='1' max='10' value='1' id='quantity2' />").css("display", "inline-block");
}});

  //ajoute le troisième produit au panier
$('#add3').click(function (){
  if ($("#quantity3").length && $('#quantity3').val() < 10) {
    $('#quantity3').val( function(i, quantity3) {
    return ++quantity3;
    });
  }
  else if ($('#quantity3').val() == 10) {
    alert("Vous avez déjà la quantité maximal de ce produit dans votre panier");
  }
  else {
  itemCount ++;
  $('#itemCount, #itemCount2').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem btn btn-light">Supprimer</button>').append("<input type='number' min='1' max='10' value='1' id='quantity3' />").css("display", "inline-block");
}});

$('#add4').click(function (){
  if ($("#quantity4").length && $('#quantity4').val() < 10) {
    $('#quantity4').val( function(i, quantity4) {
    return ++quantity4;
    });
  }
  else if ($('#quantity4').val() == 10) {
    alert("Vous avez déjà la quantité maximal de ce produit dans votre panier");
  }
  else {
  itemCount ++;
  $('#itemCount, #itemCount2').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem btn btn-light">Supprimer</button>').append("<input type='number' min='1' max='10' value='1' id='quantity4' />").css("display", "inline-block");
}});

$('#add5').click(function (){
  if ($("#quantity5").length && $('#quantity5').val() < 10) {
    $('#quantity5').val( function(i, quantity5) {
    return ++quantity5;
    });
  }
  else if ($('#quantity5').val() == 10) {
    alert("Vous avez déjà la quantité maximal de ce produit dans votre panier");
  }
  else {
  itemCount ++;
  $('#itemCount, #itemCount2').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem btn btn-light">Supprimer</button>').append("<input type='number' min='1' max='10' value='1' id='quantity5' />").css("display", "inline-block");
}});

$('#add6').click(function (){
  if ($("#quantity6").length && $('#quantity6').val() < 10) {
    $('#quantity6').val( function(i, quantity6) {
    return ++quantity6;
    });
  }
  else if ($('#quantity6').val() == 10) {
    alert("Vous avez déjà la quantité maximal de ce produit dans votre panier");
  }
  else {
  itemCount ++;
  $('#itemCount, #itemCount2').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem btn btn-light">Supprimer</button>').append("<input type='number' min='1' max='10' value='1' id='quantity6' />").css("display", "inline-block");
}});

$('#add7').click(function (){
  if ($("#quantity7").length && $('#quantity7').val() < 10) {
    $('#quantity7').val( function(i, quantity7) {
    return ++quantity7;
    });
  }
  else if ($('#quantity7').val() == 10) {
    alert("Vous avez déjà la quantité maximal de ce produit dans votre panier");
  }
  else {
  itemCount ++;
  $('#itemCount, #itemCount2').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem btn btn-light">Supprimer</button>').append("<input type='number' min='1' max='10' value='1' id='quantity7' />").css("display", "inline-block");
}});

$('#add8').click(function (){
  if ($("#quantity8").length && $('#quantity8').val() < 10) {
    $('#quantity8').val( function(i, quantity8) {
    return ++quantity8;
    });
  }
  else if ($('#quantity8').val() == 10) {
    alert("Vous avez déjà la quantité maximal de ce produit dans votre panier");
  }
  else {
  itemCount ++;
  $('#itemCount, #itemCount2').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem btn btn-light">Supprimer</button>').append("<input type='number' min='1' max='10' value='1' id='quantity8' />").css("display", "inline-block");
}});

$('#add9').click(function (){
  if ($("#quantity9").length && $('#quantity9').val() < 10) {
    $('#quantity9').val( function(i, quantity9) {
    return ++quantity9;
    });
  }
  else if ($('#quantity9').val() == 10) {
    alert("Vous avez déjà la quantité maximal de ce produit dans votre panier");
  }
  else {
  itemCount ++;
  $('#itemCount, #itemCount2').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem btn btn-light">Supprimer</button>').append("<input type='number' min='1' max='10' value='1' id='quantity9' />").css("display", "inline-block");
}});

$('#add10').click(function (){
  if ($("#quantity10").length && $('#quantity10').val() < 10) {
    $('#quantity10').val( function(i, quantity10) {
    return ++quantity10;
    });
  }
  else if ($('#quantity10').val() == 10) {
    alert("Vous avez déjà la quantité maximal de ce produit dans votre panier");
  }
  else {
  itemCount ++;
  $('#itemCount, #itemCount2').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem btn btn-light">Supprimer</button>').append("<input type='number' min='1' max='10' value='1' id='quantity10' />").css("display", "inline-block");
}});

$('#add11').click(function (){
  if ($("#quantity11").length && $('#quantity11').val() < 10) {
    $('#quantity11').val( function(i, quantity11) {
    return ++quantity11;
    });
  }
  else if ($('#quantity11').val() == 10) {
    alert("Vous avez déjà la quantité maximal de ce produit dans votre panier");
  }
  else {
  itemCount ++;
  $('#itemCount, #itemCount2').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem btn btn-light">Supprimer</button>').append("<input type='number' min='1' max='10' value='1' id='quantity11' />").css("display", "inline-block");
}});

$('#add12').click(function (){
  if ($("#quantity12").length && $('#quantity12').val() < 10) {
    $('#quantity12').val( function(i, quantity12) {
    return ++quantity12;
    });
  }
  else if ($('#quantity12').val() == 10) {
    alert("Vous avez déjà la quantité maximal de ce produit dans votre panier");
  }
  else {
  itemCount ++;
  $('#itemCount, #itemCount2').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem btn btn-light">Supprimer</button>').append("<input type='number' min='1' max='10' value='1' id='quantity12' />").css("display", "inline-block");
}});

$("#shoppingCart").find("input")

//  met à jour le panier lors de l'ajout d'un produit
$('#btnPanier, #maj').click(function(){
  if ($("#quantity1").length) { //si #quantity1 existe, calculer sa valeur en fonction du nombre de produits1 ajouter
    var price1 = parseInt($("#price1").text() * $("#quantity1").val());
  }
  else { //sinon, la valeur sera = 0 vu qu'il n'y a aucun produit 1
    var price1 = 0;
  }
  if ($("#quantity2").length) {
    var price2 = parseInt($("#price2").text() * $("#quantity2").val());
  }
  else {
    var price2 = 0;
  }
  if ($("#quantity3").length) {
    var price3 = parseInt($("#price3").text() * $("#quantity3").val());
  }
  else {
    var price3 = 0;
  }
  if ($("#quantity4").length) {
    var price4 = parseInt($("#price4").text() * $("#quantity4").val());
  }
  else {
    var price4 = 0;
  }
  if ($("#quantity5").length) {
    var price5 = parseInt($("#price5").text() * $("#quantity5").val());
  }
  else {
    var price5 = 0;
  }
  if ($("#quantity6").length) {
    var price6 = parseInt($("#price6").text() * $("#quantity6").val());
  }
  else {
    var price6 = 0;
  }
  if ($("#quantity7").length) {
    var price7 = parseInt($("#price7").text() * $("#quantity7").val());
  }
  else {
    var price7 = 0;
  }
  if ($("#quantity8").length) {
    var price8 = parseInt($("#price8").text() * $("#quantity8").val());
  }
  else {
    var price8 = 0;
  }
  if ($("#quantity9").length) {
    var price9 = parseInt($("#price9").text() * $("#quantity9").val());
  }
  else {
    var price9 = 0;
  }
  if ($("#quantity10").length) {
  var price10 = parseInt($("#price10").text() * $("#quantity10").val());
  }
  else {
    var price10 = 0;
  }
  if ($("#quantity11").length) {
    var price11 = parseInt($("#price11").text() * $("#quantity11").val());
  }
  else {
    var price11 = 0;
  }
  if ($("#quantity12").length) {
    var price12 = parseInt($("#price12").text() * $("#quantity12").val());
  }
  else {
    var price12 = 0;
  }
  var prixTotal = price1 + price2 + price3 + price4 + price5 + price6 + price7 + price8 + price9 + price10 + price11 + price12;
  $('#cartTotal').text("Total: " + prixTotal + " €").css("text-align", "center").css("font-weight", "bolder");
});

// //   // Calculer le prix total
// $(".add").click(function() {
//
// });

//
// Supprimer un produit du panier
$('#shoppingCart').on('click', '.removeItem', function(){ //dans le panier, au click sur un bouton de suppression
  $(this).parent().remove(); //supprimer le produit (l'élement parent de this qui contient le bouton de suppression en question)
  itemCount --; //retirer 1 au compteur de produit du panier
  if ($("#quantity1").length) {  //si le produit 1 existe, calculer sa valeur * le nombre de produits1 du panier
    var price1 = parseInt($("#price1").text() * $("#quantity1").val());
  }
  else {
    var price1 = 0;
  }
  if ($("#quantity2").length) {
    var price2 = parseInt($("#price2").text() * $("#quantity2").val());
  }
  else {
    var price2 = 0;
  }
  if ($("#quantity3").length) {
    var price3 = parseInt($("#price3").text() * $("#quantity3").val());
  }
  else {
    var price3 = 0;
  }
  if ($("#quantity4").length) {
    var price4 = parseInt($("#price4").text() * $("#quantity4").val());
  }
  else {
    var price4 = 0;
  }
  if ($("#quantity5").length) {
    var price5 = parseInt($("#price5").text() * $("#quantity5").val());
  }
  else {
    var price5 = 0;
  }
  if ($("#quantity6").length) {
    var price6 = parseInt($("#price6").text() * $("#quantity6").val());
  }
  else {
    var price6 = 0;
  }
  if ($("#quantity7").length) {
    var price7 = parseInt($("#price7").text() * $("#quantity7").val());
  }
  else {
    var price7 = 0;
  }
  if ($("#quantity8").length) {
    var price8 = parseInt($("#price8").text() * $("#quantity8").val());
  }
  else {
    var price8 = 0;
  }
  if ($("#quantity9").length) {
    var price9 = parseInt($("#price9").text() * $("#quantity9").val());
  }
  else {
    var price9 = 0;
  }
  if ($("#quantity10").length) {
    var price10 = parseInt($("#price10").text() * $("#quantity10").val());
  }
  else {
    var price10 = 0;
  }
  if ($("#quantity11").length) {
    var price11 = parseInt($("#price11").text() * $("#quantity11").val());
  }
  else {
    var price11 = 0;
  }
  if ($("#quantity12").length) {
    var price12 = parseInt($("#price12").text() * $("#quantity12").val());
  }
  else {
    var price12 = 0;
  }
  if (itemCount === 0) {
    $("#itemCount, #itemCount2").css("display", "none");
  }
  var prixTotal = price1 + price2 + price3 + price4 + price5 + price6 + price7 + price8 + price9 + price10 + price11 + price12; //recalculer le prix total
  $('#itemCount, #itemCount2').text(itemCount); //rmettre a jour le compteur du panier
  $('#cartTotal').text("Total: " + prixTotal + " €").css("text-align", "center").css("font-weight", "bolder"); //afficher le prix total
});

if (itemCount === 0) {
  $("#itemCount, #itemCount2").text();
}
/****************************FIN PANIER*************************/
/****************************MENTIONS LEGALES*******************/
$('#footer').css('display', 'block');
});
//$('.row').css({})
/****************************FIN MENTIONS LEGALES***************/
