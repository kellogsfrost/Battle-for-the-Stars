
var player1 = [];
var cpu = [];
player = 1;
var playerBoard;
var cpuBoard;
var playerScore;
var cpuScore;



var board = document.getElementById("board");
var box = document.getElementsByClassName("box");

for (var i = 0; i < box.length; i++){
box[i].addEventListener("click", function hit(e){
    if (player === 1){
        player1.push(e.target.textcontent);
    }
    else if (player === 0){
        cpu.push(e.target.textcontent);
    }
    if (player === 1){
        e.target.textcontent = "X";
        player = 0;
    }
    else{
        e.target.textcontent = "0";
        player = 1;
    }
   e.target.removeEventListener("click", hit);
});
}