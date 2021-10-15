/* global main script */
(($) => {
  Drupal.behaviors.codelar_e_shop = {
    attach: () => {
      // ready to use jquery in drupal
      const html = $("html");
      const darkIcon = $("#dark-icon");
      const lightIcon = $("#light-icon");
      const mobileMenu = $("#mobile-menu");
      const openMenuBtn = $("#open-menu");
      const closeMenuBtn = $("#close-icon");
      var toggle = false;
      // toggle dark -  light
      $(".toggleDarkLight").click( function () {
        toggle = !toggle;
        if (toggle) {
          darkIcon.addClass("hidden");
          lightIcon.removeClass("hidden");
          html.addClass("dark");
        }
        else {
          html.removeClass("dark");
          darkIcon.removeClass("hidden");
          lightIcon.addClass("hidden");
        }
      });
      // toggle mobile menu 
      $(".toggleMenu").click( function(){
        toggle = !toggle;
        if (toggle) {
          mobileMenu.addClass("hidden");
          openMenuBtn.addClass("hidden");
          closeMenuBtn.removeClass("hidden");
        } else {
          mobileMenu.removeClass("hidden");
          openMenuBtn.removeClass("hidden");
          closeMenuBtn.addClass("hidden");
        }
      });

    },
  };
})(jQuery);
