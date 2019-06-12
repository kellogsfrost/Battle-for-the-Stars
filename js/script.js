

var ships ={
    carrier: {
        location: [],
        hits:[],
        length: 5,
        
        battleship:{
            location: [],
            hits: [],
            length: 4,
            
            cruiser: {
                location: [],
                hits: [],
                length: 3,
                
                submarine: {
                    location:[],
                    hits: [],
                    length: 3,
                    
                    destroyer: {
                        location:[],
                        hits: [],
                        length: 2
                    }
                }
            }
        }
    }
}

var playerShips;
var cpuShips;
var player1 = [];
var cpu = [];
player = 1;
playerGuess = [];
cpuGuess =[];
var playerBoard;
var playerScore;
var cpuScore;
win = 0;




var rows = 8;
var columns = 8;
var squareSize = 62.5;




/* create the 2d array that will contain the status of each square on the board
and place ships on the board (later, create function for random placement!)
0 = empty, 1 = part of a ship, 2 = a sunken part of a ship, 3 = a missed shot
*/


var cpuBoard = 
[[0,0,0,0,0,0,0,0],
 [0,0,1,1,1,1,1,0],
 [1,0,0,0,0,0,0,1],
 [1,0,0,1,1,0,0,1],
 [1,0,0,0,0,0,0,1],
 [0,0,0,0,0,0,0,1],
 [0,0,0,0,0,0,0,0],
 [0,0,0,1,1,1,0,0]];

var playerBoard = document.getElementsByClassName("playerboard");
var box = document.getElementsByClassName("box");


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

cpuBoardContainer.addEventListener("click", fireMissle, false);
function fireMissle(e){
    if(e.target !== e.currentTarget){
        var rows = e.target.id.substring(1,2)
        var columns = e.target.id.substring(2,3)
        if(cpuBoard[rows][columns] === 0){
            e.target.style.background = '#bbb';
            cpuBoard[rows][columns] = 3;
        }else if (cpuBoard[rows][columns] === 1)
            e.target.style.background = "red";
            cpuBoard[rows][columns] = 2;
            win++
            if(win === 17){
                console.log("all enemy fighters went boom");
            }
            }else if (cpuBoard[rows][columns] > 1){
                console.log("Stop wasting your torpedos! You already fired at this location.");
            }
            e.stopPropagation();
        }
    
        for (var i = 0; i < ships; i++){
            box[i].addEventListener('click', function pickLocation(e){
            ships.location.push(e.target.id);
            ships.location[i].length
            console.log(ships.location);
        })
    }








        
        
        
        
        
        
        
        
        
        
        
        // for (var i = 0; i < box.length; i++){
        //     box[i].addEventListener('click', function pickLocation(e){
        //         ships.carrier.location.push(e.target.id);
        //         if (ships.carrier.location.length >= 5){
        //         console.log(ships.carrier.location);
        //         }
        //     })
// Switches turn but and should be stroing value to array but 
//not switching text content
// for (var i = 0; i < box.length; i++){
// box[i].addEventListener("click", function hit(e){
//     if (player === 1){
//         player1.push(e.target.textcontent);
//         console.log(player1.textcontent);
//     }
//     else if (player === 0){
//         cpu.push(e.target.textcontent);
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
