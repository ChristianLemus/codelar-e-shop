/* global main script */
(($) => {
  Drupal.behaviors.codelar_e_shop = {
    attach: () => {
      // ready to use jquery in drupal
      const html = $("html");
      const body = $("body");
      const darkIcon = $("#dark-icon");
      const lightIcon = $("#light-icon");
      const mobileMenu = $("#mobile-menu");
      const openMenuBtn = $("#open-menu");
      const closeMenuBtn = $("#close-icon");
      const darkMode = localStorage.getItem("darkMode");
      var menuToggle = false;
      var toggle = false;
      // enable theme dark
      function enableDarkMode() {
        toggle = true;
        darkIcon.addClass("hidden");
        lightIcon.removeClass("hidden");
        html.addClass("dark");
        body.addClass("dark:bg-bg_dark");
        localStorage.setItem("darkMode", "enabled");
      }
      // disable
      function disableDarkMode() {
        toggle = false;
        html.removeClass("dark");
        darkIcon.removeClass("hidden");
        lightIcon.addClass("hidden");
        body.removeClass("dark:bg-bg_dark");
        localStorage.setItem("darkMode", null);
      }
      // on load valid theme dark
      if (darkMode == "enabled") {
        enableDarkMode();
      }
      // toggle dark -  light
      $(".toggleDarkLight").click(function () {
        toggle = !toggle;
        if (toggle) {
          enableDarkMode();
        } else {
          disableDarkMode();
        }
      });
      // toggle mobile menu
      $(".toggleMenu").click(function () {
        menuToggle = !menuToggle;
        if (menuToggle) {
          mobileMenu.removeClass("hidden");
          openMenuBtn.addClass("hidden");
          closeMenuBtn.removeClass("hidden");
        } else {
          mobileMenu.addClass("hidden");
          openMenuBtn.removeClass("hidden");
          closeMenuBtn.addClass("hidden");
        }
      });
    },
  };
})(jQuery);
