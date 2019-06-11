
//var cpuShips = 

//var playerShips = 
var ships ={
    carrier: {
        location :[],
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

var player1 = [];
var cpu = [];
player = 1;
playerGuess = [];
cpuGuess =[];
var playerBoard;
var cpuBoard;
var playerScore;
var cpuScore;
win = 0;

// for sortable if i use.
// var el = document.getElementById('items');
// var sortable = Sortable.create(el);


var playerBoard = document.getElementsByClassName("playerboard");
var cpuBoard = document.getElementsByClassName("cpuboard");
var box = document.getElementsByClassName("box");



for (var i = 0; i < box.length; i++){
    box[i].addEventListener('click', function pickLocation(e){
        ships.carrier.location.push(e.target.textcontent);
        console.log(ships.carrier.location);
        if (ships.carrier.location.length >= 5){
            pickLocation();{
                ships.battleship.location.push(e.target.textcontent);
                console.log(ships.battleship.location);
            }
        }
    })
}




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
//         player = 0;
//     }
//     else{
//         player = 1;
//     }
//    e.target.removeEventListener("click", hit);
// });


// bare bone win and loss function + need to change.
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
// }
// let player know when ship explodes

// start button and reset button

//  