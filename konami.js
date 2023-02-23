/*Konami code = nahoru nahoru dolů dolů vlevo vpravo vlevo pravo B A*/

let keys = { /*Vypůjčeno od hodného indického pána na YouTube"*/
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        65: "a",
        66: "b"
      };

      let konamiCode = ["up", "up", "down", "down", "left", "right", "left", "right", "b", "a"];
      
      document.addEventListener("keydown", checkCode, false);

      let keyCount = 0;

      let timerID;

      function checkCode(event) {
        let keyPressed = keys[event.keyCode];

        if (keyPressed === konamiCode[keyCount]) {
          keyCount++;

          window.clearTimeout(timerID);

          timerID = window.setTimeout(resetKeyState, 1000);

          if(keyCount === konamiCode.length){
               cheatCodeActivated();
               resetKeyState();
          }
        }
        else {
          resetKeyState();
        }
      }
      function cheatCodeActivated() {
        ukaz_meme();
      }

      function resetKeyState() {
        keyCount = 0;
        window.clearTimeout(timerID);
      }

      function ukaz_meme() {
          /*
          var elem = document.getElementById('meme');
          elem.style.visibility = 'visible';
          elem.style.position = 'relative';
          var elem2 = document.getElementsByClassName('hero-image')[0];
          elem2.style.visibility = 'hidden';
          */
         window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
      }
      /*
      function remove_meme() {
          var elem = document.getElementById('meme');
          elem.style.visibility = 'hidden';
          elem.style.position = 'fixed';
          var elem2 = document.getElementsByClassName('hero-image')[0];
          elem2.style.visibility = 'visible';
      }
      */