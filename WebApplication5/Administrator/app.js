/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
      "particles": {
          "number": {
              "value": 380,
              "density": {
                  "enable": true,
                  "value_area": 800
              }
          },
          "color": {
              "value": "#ffffff"
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

          },
          "opacity": {
              "value": 1,
              "random": false,
              "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
              }
          },
          "size": {
              "value": 1,
              "random": true,
              "anim": {
                  "enable": true,
                  "speed": 10,
                  "size_min": 0.1,
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
              "speed": 1,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                  "enable": false,
                  "rotateX": 0,
                  "rotateY": 100
              }
          }
      },
      "interactivity": {
          "detect_on": "canvas",
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "grab"
              },
              "onclick": {
                  "enable": true,
                  "mode": "push"
              },
              "resize": true
          },
          "modes": {
              "grab": {
                  "distance": 100,
                  "line_linked": {
                      "opacity": 0.7
                  }
              },
              "bubble": {
                  "distance": 1400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 1
              },
              "repulse": {
                  "distance": 200,
                  "duration": 4
              },
              "push": {
                  "particles_nb": 100
              },
              "remove": {
                  "particles_nb": 2
              }
          }
      },
      "retina_detect": true
    
  }

);