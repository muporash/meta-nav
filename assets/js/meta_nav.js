$(function() {
  'use strict';
  /**
  * Au clique du premier élément du menu (+) pour ouvrir le sous-menu.
  */
  $('.lien-menu-principal:nth-child(1) .action-mm-sous-menu').on('click', function() {
    $('#menu-mobile-icone').prop('checked', true);
  });
  /**
  * A la fermeture du menu-principal.
  * fermer tous les sous-menu.
  */
  $('.action-menu-mobile').on('click', function() {
    $('.mm-action-sous-menu').prop('checked', false);
  });
  /**
  * Ferme le menu-principal lors de la redimension > 900px.
  */
  $(window).resize(function() {
    if ($(window).width() > 900) {
      // Menu principal.
      $('#menu-mobile-icone').prop('checked', false);
      // Sous-menu
      $('.mm-action-sous-menu').prop('checked', false);
    };
  });
});
