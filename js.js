$( function()
{    $('#audio').hide(0);
    $("h1").css("color","red").fadeOut(6000);    
	$(document).keydown(function(e)
    {
       
        switch(e.which){
       
                            case 37:  $('.box').animate({
                                         left: "-=20px",
                                         fontSize: "+=2px"
                                      }, function() {
                                   
                                     });
                                     break;
                            case 38: $('.box').animate({
                                        top: "-=20px",
                                        opacity: "+=0.1"
                                     },function(){

                                     });
                                     break;
                            case 39:$('.box').animate({
                                         left: "+=20px",
                                         fontSize: "-=2px"
                                     },function(){

                                     });
                                    break;
                            case 40: $('.box').animate({
                                        top: "+=20px",
                                        opacity: "-=0.1"
                                     },function(){

                                     });
                                    break;
                        }  
    } );
	

});
