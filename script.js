$(document).ready(function() {
 /*   
    $('h1').click(function(){
        $(this).css('background-color', '#ff0000');
    })  
*/
    
/* 
        var waypoints = $('#handler-first').waypoint(function(direction) {
          notify(this.element.id + ' hit 25% from top of window') 
        }, {
          offset: '25%'
        })
*/
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down"){
            $('nav').addClass('sticky');
        } else{
            $('nav').removeClass('sticky');
            
        }}, {
          offset: '60px;'
        });
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function(){ //the dot is hyper important
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);  
    });    
    $('.js--scroll-to-start').click(function(){ //the dot is hyper important
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);  
    });
    
    /* Navigation scroll */
    
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
    } // End if
  });

        
  /* Animation on scroll */

     $('.js--wpfeatures').waypoint(
        (direction) => {
          $('.js--wpfeatures').addClass('animate__animated animate__fadeIn');
        },
        {
          offset: '50%',
        }
      );
    
     $('.js--wpphone').waypoint(
        (direction) => {
          $('.js--wpphone').addClass('animate__animated animate__fadeInUp');
        },
        {
          offset: '50%',
        }
      );
    
    $('.js--wpcities').waypoint(
        (direction) => {
          $('.js--wpcities').addClass('animate__animated animate__fadeIn');
        },
        {
          offset: '50%',
        }
      );
    
    $('.js--wpplan').waypoint(
        (direction) => {

          $('.js--wpplan').addClass('animate__animated animate__pulse');
            
        },
        {
          offset: '50%',
        }
      );

    /* Mobile navigation */
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        nav.slideToggle(200);
        });
        
                         
                    

  
    
});
