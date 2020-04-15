// Button Sound
var bleep = new Audio();
bleep.src = "assets/ding.mp3";

$(document).ready(function() {
  // Particles
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ec1f7f"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  // Ripple Effect Button
  $(function(){

    //creating a style object for the ripple effect
    function RippleStyle(width, height, posX, posY){
      this.width = ( width <= height ) ? height : width;
      this.height = ( width <= height ) ? height : width;
      this.top = posY - (this.height * 0.5);
      this.left = posX - (this.width * 0.5);
    }

    $('.btn').on('mousedown', function(e){
      //appending an element with a class name "btn-ripple"
      var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);

      //getting the button's offset position
      var pos = $(this).offset();

      //get the button's width and height
      var width = $(this).outerWidth();
      var height = $(this).outerHeight();

      //get the cursor's x and y position within the button
      var posX = e.pageX - pos.left;
      var posY = e.pageY - pos.top;

      //adding a css style to the ripple effect
      var rippleStyle = new RippleStyle(width, height, posX, posY);
      rippleEl.css(rippleStyle);
    });

    //this event listener will be triggered once the ripple animation is done
    $('.btn').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function(){
      $(this).remove();
    });
  });

  // Magic word validation
  $('.btn').click(function (e) {
    var mwordVal = document.getElementById('mword').value

    if (mwordVal == 'ibringthelight'){
      // Present transition
      e.preventDefault();
      var goTo = this.getAttribute("href");

      // do something while timeOut ticks ...
      $('.whitebg').animate({
        width: '5000px',
        height: '5000px',
        opacity: '1'
      }, 2000, 'linear')

      $('#fire').animate({
        opacity: '1'
      }, 2000, 'linear')

      setTimeout(function(){
           window.location = goTo;
      }, 4000);
      return;
    } else {
      $('.notMword').html('The word is not magical');
      $('.notMword').effect('shake');
    };
  });
});
