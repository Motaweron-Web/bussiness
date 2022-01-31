$(document).ready(function () {
  $('select').niceSelect();





  /*  to change nav-bar color on scroll  */
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });
});