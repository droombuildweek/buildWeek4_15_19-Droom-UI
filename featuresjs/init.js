(function($){
  $(function(){
    $('#card1').click(function (){
      $(this).toggleClass("scale-out");
    });

    $('.sidenav').sidenav();
    
  }); // end of document ready

})(jQuery); // end of jQuery name space
