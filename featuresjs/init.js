(function($){
  $(function(){
    var $card1 = $('#card1');
    var $card2 = $('#card2');
    var $card3 = $('#card3');

    $('#buttoncolor').click(function (){
      $card1.toggleClass("scale-out");
      $card2.toggleClass("scale-out");
      $card3.toggleClass("scale-out");
    });
    
    $('#card1reveal').click(function(){
      $card1.css('overflow', 'visible');
      $(this).css('display', 'block');
      $(this).css('transform', 'translateY(0%)')
    });

    $('#card2reveal').click(function(){
      $card2.css('overflow', 'visible;');
      $(this).css('display', 'block');
      $(this).css('transform', 'translateY(0%)')
    });

    $('#card3reveal').click(function(){
      $card3.css('overflow', 'visible');
      $(this).css('display', 'block');
      $(this).css('transform', 'translateY(0%)')
    
    });


    $('.sidenav').sidenav();
  }); // end of document ready

})(jQuery); // end of jQuery name space
