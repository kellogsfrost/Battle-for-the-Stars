

 starCruiser = {
    location: ["0,0", "0,1", "0,2", "0,3", "0,5"],
    hits:[],
    length: 5}
        
transport = {
    location: ["4,1", "4,2", "4,3", "4,4"],
    hits: [],
    length: 4}
            
starFighter ={
    location: ["7,0", "6,0", "5,0"],
    hits: [],
    length: 3,}
                
falcon = {
    location:["7,6","6,6", "5,6"],
    hits: [],
    length: 3,}
                    
xwing = {
    location:["5,2","5,3"],
    hits: [],
    length: 2}


var playerShips = [starCruiser,transport,starFighter,falcon,xwing];
var player1 = [];
var cpu = [];
player = 1;
playerGuess = [];
cpuShots =[];
var playerBoard;
var playerScore = 0;
var cpuScore = 0;
var cpuRow;
var cpuColumn;





var rows = 8;
var columns = 8;
var squareSize = 62.5;

var cpuBoard = 
[[0,0,0,0,0,0,0,0],
 [0,0,1,1,1,1,1,0],
 [1,0,0,0,0,0,0,1],
 [1,0,0,1,1,0,0,1],
 [1,0,0,0,0,0,0,1],
 [0,0,0,0,0,0,0,1],
 [0,0,0,0,0,0,0,0],
 [0,0,0,1,1,1,0,0]];




/* create the 2d array that will contain the status of each square on the board
and place ships on the board (later, create function for random placement!)
0 = empty, 1 = part of a ship, 2 = a sunken part of a ship, 3 = a missed shot
*/

// source LearningNerds


 
 starCruiser = document.getElementById("starcruiser");
 transport = document.getElementById("transport");
 starFighter = document.getElementById("starfighter");
 falcon = document.getElementById("falcon");
 xwing = document.getElementById("xwing");
 
 
 
 //CPU board and ship placement
 
 
 
 var cpuBoardContainer = document.getElementById("cpuboard");
 for (i = 0; i< columns; i++){
     for (j = 0; j< rows; j++){
         var square = document.createElement('div');
         cpuBoardContainer.appendChild(square);
         square.id = 's' + j + i;
         var topPosition = j * squareSize;
         var leftPosition = i * squareSize;
         square.style.top = topPosition + 'px';
         square.style.left = leftPosition + 'px';
        }
    }
    
    cpuBoardContainer.addEventListener("click", fireMissle);

    function fireMissle(e){
        e.stopPropagation();
        if ( e.target  ) {
            var rows = e.target.id.substring(1,2)
            var columns = e.target.id.substring(2,3)
            console.log("rows:", rows);
            console.log("cols:", columns);
            if (cpuBoard[rows][columns] === 0){
                console.log('no ship')
                e.target.style.background = '#bbb';
                cpuBoard[rows][columns] = 3;
            } else if (cpuBoard[rows][columns] === 1) {
                console.log('ship')
                e.target.style.background = "red";
                cpuBoard[rows][columns] = 2;
                playerScore++;
            } else if (cpuBoard[rows][columns] > 1) {
                console.log("Stop wasting your missles");
            }
        }
        if(playerScore === 17){
            console.log( "We have destroyed the enemy fleet");
        }
        setTimeout(function(){
             cpuGuess();
        },800);
    }
    
    
    
    function cpuGuess(){
        var cpuRows = Math.floor(8* Math.random() );
        var cpuColumn = Math.floor(8 * Math.random() );
        var gridID = cpuRows + "," + cpuColumn;
        console.log(gridID);
        if(!cpuShots.includes(gridID)){
            for (let i = 0; i< playerShips.length; i++){
                if(playerShips[i].location.includes(gridID) && !playerShips[i].hits.includes(gridID)){
                    playerShips[i].hits.push(gridID);
                    document.getElementById(gridID).classList.remove("placed");
                    document.getElementById(gridID).classList.add("hit");
                    cpuShots.push(gridID);
                    cpuScore++
                    if(cpuScore === 17)
                    console.log("cpu has won");
                    return;
                }else if (!playerShips[i].location.includes(gridID)) {
                    document.getElementById(gridID).classList.add("miss");
                    cpuShots.push(gridID);
                    
                }
                
                
            }
        }
        
        
        
        function playerWinGame(){
            if (playerScore === 17)
            document.getElementById("text").textContent = "The rebels have won the battle!";
            
        }
        
         
        function cpuWinGame(){
            if (cpuScore === 17)
            document.getElementById("text").textContent = "The imperials have won the battle.....regroup your forces.";
            
        }
        
        
        
        cpuWinGame();
        
        playerWinGame();




    
            // Switches turn but and should be stroing value to array but 
            //not switching text content
            // for (var i = 0; i < box.length; i++){
                // box[i].addEventListener("click", function hit(e){
                    //     if (player === 1){
                        //         player1.push(e.target.id);
                        //         console.log(player1.id);
                        //     }
                        //     else if (player === 0){
                            //         cpu.push(e.target.id);
                            //         console.log(cpu.textcontent);
                            //     }
                            //     if (player === 1){
                                //         e.target.textcontent = "Hit";
                                //         player = 0;
                                //     }
                                //     else{
                                    //         e.target.textcontent = "Hit"
                                    //         player = 1;
                                    //     }
                                    //    e.target.removeEventListener("click", hit);
                                    // });
                                    // }
                                    
                                    //bare bone win and loss function + need to change. this needs to be rewritten for new win counter on cpu side.
                                    // function checkPlayerWin(){
                                        //     for (let i = 0; i < cpuShips.length; i++){
                                            //         win = 0;
                                            //         if (player === 1){
                                                //             for (let j = 0; j < player1.length; j++){
                                                    //                 var check1 = cpuShips[i].includes(player1[j]);
                                                    //                 if (check1 === true){
                                                        //                     win++
                                                        //                     if (win === 17){
                                                            //                         console.log("player1 wins");
                                                            //                     }
                                                            //                 }
                                                            //             }
                                                            
                                                            //         }
                                                            //     }
                                                            // }
                                                            // function checkCpuWin(){
                                                                //     for (let i = 0; i < playerShips.length; i++){
                                                                    //         win = 0;
                                                                    //         if (player === 0){
                                                                        //             for (let j = 0; j < cpu.length; j++){
                                                                            //                 var check2 = playerShips[i].includes(cpu[j]);
                                                                            //                 if (check2 === true){
                                                                                //                     win++
                                                                                //                     if (win ===17){
                                                                                    //                         console.log("player 2 wins");
                                                                                    //                     }
                                                                                    //                 }
                                                                                    //             }
                                                                                    //         }
                                                                                    //     }
                                                                                    // }}} 
    }