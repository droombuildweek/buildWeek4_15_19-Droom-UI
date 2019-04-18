(function($){
  $(function(){
    var $card1 = $('#card1');
    var $card2 = $('#card1');
    var $card3 = $('#card1');

    $('#buttoncolor').click(function (){
      $card1.toggleClass("scale-out");
      $card2.toggleClass("scale-out");
      $card3.toggleClass("scale-out");
    });
    
    $('#card1reveal').click(function(){
      $card1.css('overflow', '');
    })
    $('#card2reveal').click(function(){
      $card2.css('overflow', '');
    })
    $('#card3reveal').click(function(){
      $card3.css('overflow', '');
    })
    $('.sidenav').sidenav();
  }); // end of document ready

})(jQuery); // end of jQuery name space
