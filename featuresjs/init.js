(function($){
  $(function(){
    $('#buttoncolor').click(function (){
      $('#card1').toggleClass("scale-out");
      $('#card2').toggleClass("scale-out");
      $('#card3').toggleClass("scale-out");
    });

    $('.sidenav').sidenav();
  }); // end of document ready

})(jQuery); // end of jQuery name space
