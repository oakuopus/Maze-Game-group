var total = 0;

$(document).ready(function() {
    //Maze Size/Dimensions
    var mazeHeight = 600
    var mazeWidth = 600
  
  
    //Player starting position
    var playerX = 0
    var playerY = 0
    var botX = 580
    var botY = 40
  
  
  
  
  
  
    //Movement Functionality for player
    function movePlayer(dx, dy) {
  
  
        var newX = playerX + dx;
        var newY = playerY + dy;
        // alert((Math.random() < .5))
        var newBotX = -20
        var newBotY = botY + 20;
       
        if (newBotX >= 0 && newBotX < mazeWidth && newBotY >= 0 && newBotY < mazeHeight) {
          // Check if the new position is not a wall
          if (!$('#maze').find('.wall').is('[style="top: ' + newBotY + 'px; left: ' + newBotX + 'px;"]')) {
              // Update the bot's position
              botX = newBotX;
              botY = newBotY;
              $('#bot').css({ top: botY + 'px', left: botX + 'px' });
          }
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
            if(playerX === 580 && playerY === 580){
              alert("Congratulations! you Completed this level! Your score is: " + (500 - total));
                window.location = "winPage3.html"
            }
          if(playerX == botX && playerY == botY){
              alert("You got killed fella! Try Again!")
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
          // {top:20, left:100},//wall 2
          // {top: 20, left: 160},
          {top: 40, left:20},
          {top: 60, left:20},
          {top: 60, left:40},
          {top: 60, left:60},
          {top: 80, left:60},
          {top: 100, left:60},
          {top: 100, left:40},
          {top: 100, left:20},
          {top: 120, left:20},
          {top: 140, left:20},
          {top: 160, left:20},
          {top: 160, left:0},
          {top: 20, left:40},
          {top: 20, left:60},
          {top: 20, left:100},
          {top: 20, left:120},
          {top: 20, left:140},
          {top: 20, left:160},
          {top: 20, left:180},
          {top: 40, left:180},
          {top: 60, left:180},
          {top: 80, left:180},
          {top: 100, left:100},
          {top: 100, left:120},
          {top: 100, left:140},
          {top: 80, left:140},
          {top: 100, left:180},
          {top: 60, left:140},
          {top: 60, left:120},
          {top: 60, left:100},
          {top: 120, left:100},
          {top: 140, left:100},
          {top: 140, left:80},
          {top: 140, left:60},
          {top: 160, left:60},
          {top: 180, left:80},
          {top: 180, left:60},
          {top: 200, left:100},
          {top: 200, left:80},
          {top: 200, left:20},
          {top: 220, left:20},
          {top: 260, left:40},
          {top: 220, left:40},
          {top: 240, left:60},
          {top: 260, left:20},
          {top: 280, left:20},
          {top: 300, left:40},
          {top: 300, left:60},
          {top: 300, left:80},
          {top: 280, left:80},
          {top: 320, left:0},
          {top: 320, left:60},
          {top: 320, left:100},
          {top: 320, left:120},
          {top: 340, left:0},
          {top: 340, left:100},
          {top: 340, left:140},
          {top: 360, left:40},
          {top: 380, left:20},
          {top: 400, left:20},
          {top: 400, left:40},
          {top: 400, left:100},
          {top: 400, left:60},
          {top: 400, left:120},
          {top: 400, left:140},
          {top: 440, left:0},
          {top: 440, left:20},
          // {top: 440, left:40},
          {top: 440, left:60},
          {top: 460, left:80},
          {top: 480, left:100},
          {top: 500, left:100},
          {top: 520, left:80},
          {top: 520, left:60},
          {top: 500, left:60},
          {top: 500, left:40},
          {top: 480, left:40},
          {top: 480, left:20},
          {top: 540, left:20},
          {top: 540, left:60},
          {top: 540, left:60},
          {top: 560, left:20},
          {top: 580, left:40},
          {top: 20, left:240},
          {top: 20, left:260},
          {top: 20, left:240},
          {top: 20, left:300},
          {top: 20, left:200},
          {top: 20, left:320},
          {top: 20, left:340},
          {top: 20, left:380},
          {top: 20, left:400},
          {top: 20, left:420},
          {top: 20, left:440},
          {top: 20, left:460},
          {top: 20, left:500},
          {top: 20, left:520},
          {top: 20, left:540},
          {top: 20, left:560},
          {top: 40, left:260},
          {top: 40, left:260},
          {top: 60, left:240},
          {top: 40, left:200},
          {top: 80, left:220},
          {top: 100, left:220},
          {top: 120, left:240},
          // {top: 120, left:180},
          {top: 140, left:160},
          {top: 140, left:200},
          {top: 40, left:260},
          {top: 40, left:260},
          {top: 140, left:120},
          {top: 180, left:140},
          {top: 160, left:160},
          {top: 180, left:180},
          {top: 200, left:200},
          {top: 180, left:220},
          {top: 160, left:220},
          {top: 140, left:260},
          {top: 220, left:160},
          {top: 220, left:100},
          {top: 220, left:140},
          {top: 240, left:100},
          {top: 260, left:160},
          {top: 260, left:120},
          {top: 280, left:120},
          {top: 40, left:300},
          {top: 80, left:280},
          {top: 100, left:240},
          {top: 60, left:320},
          {top: 100, left:300},
          {top: 120, left:320},
          {top: 120, left:360},
          {top: 100, left:360},
          {top: 80, left:340},
          {top: 160, left:300},
          {top: 140, left:360},
          {top: 140, left:320},
          {top: 180, left:300},
          {top: 180, left:260},
          {top: 140, left:240},
          {top: 180, left:340},
          {top: 200, left:380},
          {top: 220, left:240},
          {top: 240, left:200},
          // {top: 220, left:180},
          {top: 260, left:300},
          {top: 240, left:280},
          {top: 220, left:280},
          // {top: 200, left:0},
          {top: 200, left:300},
          {top: 260, left:220},
          {top: 240, left:240},
          {top: 40, left:540},
          // {top: 60, left:540},
          {top: 60, left:520},
          {top: 60, left:480},
          {top: 40, left:440},
          // {top: 80, left:400},
          {top: 80, left:420},
          {top: 60, left:440},
          {top: 100, left:460},
          {top: 80, left:480},
          {top: 80, left:540},
          // {top: 80, left:580},
          {top: 60, left:580},
          {top: 100, left:580},
          {top: 60, left:400},
          {top: 60, left:380},
          {top: 100, left:400},
          {top: 120, left:420},
          {top: 180, left:360},
          {top: 120, left:500},
          {top: 100, left:500},
          {top:300, left:400},
          {top: 140, left:460},
          {top: 160, left:500},
          {top: 140, left:540},
          {top: 160, left:580},
          {top: 120, left:540},
          {top: 100, left:540},
          {top: 180, left:540},
          {top: 200, left:520},
          {top: 240, left:520},
          {top: 240, left:560 },
          {top: 140, left:520},
          {top: 260, left:560},
          {top: 300, left:580},
          {top: 220, left:520},
          {top: 220, left:580},
          {top: 220, left:480},
          {top: 240, left:500},
          {top: 280, left:540},
          {top: 260, left:480},
          {top: 300, left:480},
          {top: 280, left:500},
          {top: 140, left:420},
          {top: 160, left:400},
          {top: 200, left:440},
          // {top: 220, left:400},
          {top: 240, left:440},
          {top: 300, left:460},
          {top: 260, left:400},
          {top: 280, left:440},
          {top: 240, left:360},
          {top: 220, left:340},
          {top: 240, left:380},
          {top: 220, left:180},
          {top: 360,left:160},
          {top: 340,left:180},
          {top: 420, left:160},
          {top: 460, left:180},
          {top: 300, left:200},
          {top: 320, left:180},
          {top: 300, left:160},
          {top: 460, left:140},
          {top: 360, left:80},
          {top: 300, left:260},
          {top: 320, left:220},
          {top: 440, left:200},
          {top: 380, left:240},
          {top: 420, left:220},
          {top: 380, left:200},
          {top: 400, left:240},
          {top: 320, left:280},
          {top: 280, left:340},
          {top: 300, left:320},
          {top: 540, left:120},
          {top: 580, left:120},
          {top: 520, left:140},
          {top: 500, left:120},
          {top: 520, left:180},
          {top: 540, left:200},
          {top: 540, left:240},
          {top:580, left:240},
          {top: 500, left:220},
          {top: 480, left:180},
          {top: 580, left:80},
          {top: 580, left:180},
          {top: 560, left:260},
          {top: 500, left:260},
          {top: 480, left:240},
          {top: 320, left:560},
          {top: 320, left:520},
          {top: 360, left:540},
          {top: 360, left:500},
          {top: 340, left:480},
          {top: 540, left:300},
          {top: 320, left:460},
          {top: 380, left:520},
          {top: 400, left:500},
          {top: 400, left:560},
          {top: 420, left:540},
          {top: 400, left:460},
          {top: 440, left:500},
          {top: 460, left:520},
          {top: 460, left:540},
          {top: 440, left:560},
          {top: 520, left:540},
          {top: 560, left:560},
          {top:540, left:540},
          {top: 480, left:560},
          {top: 480, left:500},
          {top: 520, left:500},
          {top: 540, left:480},
          {top: 560, left:520},
          {top: 560, left:500},
          {top: 500, left:480},
          {top: 340, left:260},
          {top: 580, left:400},
          {top: 580, left:300},
          // {top: 580, left:0},
          {top: 520, left:320},
          {top: 540, left:340},
          {top: 560, left:340},
          {top: 520, left:360},
          {top: 540, left:380},
          {top: 560, left:440},
          {top: 520, left:400},
          {top: 540, left:420},
          {top: 580, left:460},
          {top: 400, left:300},
          {top: 380, left:180},
          {top: 320,left:360},
          {top: 380, left:280},
          {top: 340, left:240},
          {top: 340, left:300},
          {top: 360, left:320},
          {top: 360, left:360},
          {top: 420, left:360},
          {top: 360, left:420},
          {top: 340, left:380},
          {top: 380, left:400},
          {top: 380, left:380},
          {top: 420, left:420},
          {top: 440, left:440},
          {top: 460, left:420},
          {top: 420, left:480},
          {top: 340, left:520},
          {top: 260, left:520},
          {top: 400, left:320},
          {top: 420, left:340},
          {top: 400, left:380},
          {top: 280, left:420},
          {top: 260, left:360},
          {top: 300, left:300},
          {top: 300, left:340},
          {top: 460, left:360},
          {top: 480, left:380},
          {top: 480, left:320},
          {top: 460, left:300},
          {top: 440, left:300},
          {top: 440, left:260},
          {top: 500, left:440},
          {top: 500, left:160},
          {top: 480, left:200},
          {top: 460, left:240},
          {top: 440, left:280},
          {top: 500, left:340},
          {top: 0, left:0},
          {top: 0, left:0},
          {top: 0, left:0},
          {top: 0, left:0},
          {top: 0, left:0},
          {top: 0, left:0},
          {top: 0, left:0},
          {top: 0, left:0},
          {top: 0, left:0},
          {top: 0, left:0},
          {top: 0, left:0},
          {top: 0, left:0},
          {top: 0, left:0},
  
  
  
          //Add more walls here and in the scss
      ]
  
  
      for (var i = 0; i < wallCoordinates.length; i++) {
        $('#maze').append('<div class="wall" style="top: ' + wallCoordinates[i].top + 'px; left: ' + wallCoordinates[i].left + 'px;"></div>');
      }
  
  
    //Create the player and append it to the board
    $('#maze').append('<div class="player" id="player" style="top: '+ playerY + 'px; left: ' + playerX + 'px;"> <img src="../assests/Idle (1).png" style="max-height:20px; max-width:20px;"></div>')
    $('#maze').append('<div class="bot" id="bot" style="top: '+ botY + 'px; left: ' + botX + 'px;"></div>')
  })
  
  var seconds = 0;
var minutes = 0;
var current;
function getTime() {
    seconds++;
    total++;
    //if the time is 60 seconds, it converts it into a minute
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    //has a little if else statement by checking if the seconds is double digits or not, just for formatting.
    var finalTime = minutes + ':' + (seconds < 10 ? '0' : '')  + seconds;
    document.getElementById('countUp').innerHTML = finalTime;
    // var maxPoints = 10200;
    // var scaleFactor = 40;
    // var points = (maxPoints - seconds) / scaleFactor;
    // document.getElementById('score1').innerHTML = "Score: " + final
}
var timer = setInterval(getTime,1000)