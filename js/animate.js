$(document).ready(function(){
     jQuery.Color.hook( "fill" );
     setTimeout(function(){
          $("#st0>path").animate({ 
               "fill": "#000000"
          },800);
     },4000);
     setTimeout(function(){
          $(".introTit").animate({opacity:'1'},2000);
     },4500);
     setTimeout(function(){
          $(".visitCard>a").animate({opacity:'1'},2000);
     },5000);
});


