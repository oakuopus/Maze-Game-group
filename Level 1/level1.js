$(document).ready(function() {

    //Maze Size/Dimensions
    var mazeHeight = 400
    var mazeWidth = 400

    //Player starting position
    var playerX = 0
    var playerY = 0

    //Movement Functionality for player
    function movePlayer(dx, dy) {
        var newX = playerX + dx;
        var newY = playerY + dy;

        if (playerX === 380 && playerY === 320) {
          $('#maze').append('<div class="wall" style="top: 360px; left: 380px;"></div>');
          console.log(1)
        }
        //Verify new position is inside of the maze walls
        if (newX >= 0 && newX < mazeWidth && newY >= 0 && newY < mazeHeight) {
            //Check to see if the new position is a wall or not
            if (!$('#maze').find('.wall').is('[style="top: ' + newY + 'px; left: ' + newX + 'px;"]')) {
                //We can move the player
                playerX = newX;
                playerY = newY;
                $('#player').css({ top: playerY + 'px', left: playerX + 'px' });
            }

            //Check to see if the player reaches the end
            if(playerX === 380 && playerY === 380){
                window.location="../Level 2/index.html";
            }

        }
    }

    // Keypress Event Listener
    $(document).keydown(function(e){
        switch (e.which) {
            case 37: // Left arrow
              movePlayer(-20, 0);
              break;
            case 38: // Up arrow
              movePlayer(0, -20);
              break;
            case 39: // Right arrow
              movePlayer(20, 0);
              break;
            case 40: // Down arrow
              movePlayer(0, 20);
              break;
            case 65: // Left arrow
                movePlayer(-20, 0);
                break;
            case 87: // Up arrow
                movePlayer(0, -20);
                break;
            case 68: // Right arrow
                movePlayer(20, 0);
                break;
            case 83: // Down arrow
                movePlayer(0, 20);
                break;
          }
    })

    //Create Maze Walls
    var wallCoordinates = [
        {top:20, left:20},//wall 1
        {top:20, left:100},//wall 2
        {top: 20, left: 160},
        //Add more walls here and in the scss
        {top: 0, left: 80},
        {top: 20, left: 80},
        {top: 40, left: 80},
        {top: 60, left: 80},
        {top: 80, left: 80},
        {top: 20, left: 80},
        {top: 20, left: 40},
        {top: 20, left: 40},
        {top: 40, left: 40},
        {top: 60, left: 40},
        {top: 60, left: 20},
        {top: 100, left: 20},
        {top: 120, left: 20},
        {top: 140, left: 20},
        {top: 140, left: 40},
        {top: 140, left: 60},
        {top: 100, left: 40},
        {top: 20, left: 120},
        {top: 20, left: 140},
        {top: 20, left: 180},
        {top: 100, left: 80},
        {top: 100, left: 100},
        {top: 100, left: 140},
        {top: 80, left: 140},
        {top: 60, left: 140},
        {top: 60, left: 120},
        {top: 20, left: 200},
        {top: 0, left: 240},
        {top: 20, left: 240},
        {top: 40, left: 240},
        {top: 60, left: 200},
        {top: 80, left: 240},
        {top: 80, left: 220},
        {top: 80, left: 200},
        {top: 80, left: 180},
        {top: 80, left: 260},
        {top: 80, left: 280},
        {top: 60, left: 280},
        {top: 40, left: 280},
        {top: 20, left: 280},
        {top: 20, left: 300},
        {top: 20, left: 320},
        {top: 20, left: 340},
        {top: 20, left: 360},
        {top: 40, left: 360},
        {top: 60, left: 360},
        {top: 80, left: 360},
        {top: 60, left: 340},
        {top: 60, left: 320},
        {top: 80, left: 320},
        {top: 120, left: 360},
        {top: 140, left: 360},
        {top: 160, left: 360},
        {top: 160, left: 380},
        // {top: 120, left: 340},
        {top: 120, left: 320},
        {top: 120, left: 300},
        {top: 120, left: 280},
        {top: 120, left: 260},
        // {top: 120, left: 240},
        {top: 120, left: 220},
        {top: 120, left: 200},
        {top: 120, left: 180},
        {top: 120, left: 180},
        {top: 140, left: 180},
        {top: 140, left: 160},
        {top: 140, left: 140},
        {top: 140, left: 120},
        {top: 140, left: 100},
        {top: 160, left: 100},
        {top: 180, left: 100},
        {top: 200, left: 100},
        {top: 180, left: 100},
        {top: 180, left: 40},
        {top: 160, left: 40},
        {top: 180, left: 20},
        {top: 180, left: 60},
        {top: 180, left: 80},
        {top: 220, left: 20},
        {top: 240, left: 20},
        {top: 260, left: 20},
        {top: 220, left: 40},
        {top: 220, left: 60},
        {top: 220, left: 100},
        {top: 240, left: 100},
        {top: 260, left: 100},
        {top: 260, left: 80},
        {top: 260, left: 60},
        {top: 280, left: 60},
        {top: 300, left: 40},
        {top: 300, left: 60},
        {top: 340, left: 40},
        {top: 360, left: 40},
        {top: 360, left: 60},
        {top: 380, left: 60},
        {top: 300, left: 20},
        {top: 360, left: 20},
        {top: 240, left: 0},
        {top: 360, left: 100},
        {top: 340, left: 100},
        {top: 320, left: 100},
        {top: 300, left: 100},
        {top: 360, left: 120},
        {top: 360, left: 140},
        {top: 360, left: 160},
        {top: 340, left: 180},
        {top: 320, left: 180},
        {top: 320, left: 180},
        {top: 320, left: 160},
        {top: 320, left: 140},
        {top: 360, left: 180},
        {top: 300, left: 140},
        {top: 280, left: 140},
        {top: 260, left: 140},
        {top: 240, left: 140},
        {top: 220, left: 140},
        {top: 240, left: 120},
        {top: 360, left: 220},
        {top: 360, left: 240},
        {top: 360, left: 260},
        {top: 360, left: 280},
        {top: 380, left: 240},
        {top: 200, left: 140},
        {top: 180, left: 140},
        {top: 180, left: 180},
        {top: 200, left: 180},
        {top: 220, left: 180},
        {top: 180, left: 200},
        {top: 180, left: 220},
        {top: 160, left: 220},
        {top: 160, left: 240},
        {top: 160, left: 260},
        {top: 160, left: 280},
        {top: 160, left: 300},
        {top: 160, left: 320},
        {top: 140, left: 280},
        {top: 180, left: 280},
        {top: 220, left: 280},
        {top: 240, left: 280},
        {top: 240, left: 260},
        {top: 240, left: 240},
        {top: 220, left: 240},
        {top: 180, left: 220},
        {top: 220, left: 200},
        {top: 240, left: 200},
        {top: 260, left: 200},
        {top: 280, left: 200},
        {top: 260, left: 180},
        {top: 280, left: 220},
        {top: 300, left: 220},
        {top: 320, left: 220},
        {top: 320, left: 240},
        {top: 320, left: 260},
        {top: 320, left: 280},
        {top: 320, left: 300},
        {top: 320, left: 320},
        {top: 320, left: 340},
        {top: 320, left: 360},
        {top: 340, left: 360},
        {top: 360, left: 360},
        {top: 360, left: 340},
        {top: 200, left: 320},
        {top: 180, left: 320},
        {top: 200, left: 360},
        {top: 220, left: 360},
        {top: 240, left: 360},
        {top: 240, left: 320},
        {top: 240, left: 340},
        {top: 240, left: 340},
        {top: 260, left: 340},
        {top: 280, left: 340},
        {top: 280, left: 360},
        {top: 280, left: 300},
        {top: 280, left: 280},
        {top: 280, left: 260},
        {top: 280, left: 320},
        {top: 300, left: 320},
    ]

    for (var i = 0; i < wallCoordinates.length; i++) {
        $('#maze').append('<div class="wall" style="top: ' + wallCoordinates[i].top + 'px; left: ' + wallCoordinates[i].left + 'px;"></div>');
      }

    //Create the player and append it to the board
    $('#maze').append('<div class="player" id="player" style="top: '+ playerY + 'px; left: ' + playerX + 'px;"> <img src="../assests/Idle (1).png" style="max-height:20px; max-width:20px;"></div>')
  })
  var seconds = 0;
  var minutes = 0;
  function getTime() {
    seconds++;
    //if the time is 60 seconds, it converts it into a minute
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    //has a little if else statement by checking if the seconds is double digits or not, just for formatting.
    var finalTime = minutes + ':' + (seconds < 10 ? '0' : '')  + seconds;
    document.getElementById('countUp').innerHTML = finalTime;
  }
  var timer = setInterval(getTime,1000)
  function restart() {
    // alert("hi")
    seconds = 0;
    minutes = 0;
    playerX = 0;
    playerY = 0;
    movePlayer(20, 0);
    console.log(playerY)
  }
