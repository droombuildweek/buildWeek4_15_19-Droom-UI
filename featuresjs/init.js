(function($){
  $(function(){
    var $featurebutton = $('#buttoncolor');
    var $card1 = $('#card1');
    var $card2 = $('#card2');
    var $card3 = $('#card3');

    $featurebutton.on.click(function (){
      $card1.toggleClass("scale-out");
      $card2.toggleClass("scale-out");
      $card3.toggleClass("scale-out");
    })

    $('.sidenav').sidenav();
    
  }); // end of document ready

})(jQuery); // end of jQuery name space
