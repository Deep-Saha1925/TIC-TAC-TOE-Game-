let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newgame = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let main = document.querySelector("#main");
let msg = document.querySelector("#msg");
let p1 = prompt("Enter 1st player name");
let p2 = prompt("Enter 2nd player name");
let c = 0;

let turnO = true; //player x, player o;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8], 
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {  // player o
            // box.classList.add("p1");
            // box.classList.remove("p1");
            box.innerText = "0";
            turnO = false;
        } else {  // player x
            // box.classList.add("p2");
            // box.classList.remove("p2");
            box.innerText = "X";
            turnO = true; 
        }
        box.disabled = true;
        c++;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const draw = () => {
    msg.innerText = `Oops! It's a draw..`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 !="") {
            if(pos1 == pos2 && pos2 == pos3) {
                if(pos1 == 0){
                    showWinner(p1);
                }
                else {
                    showWinner(p2);
                } 
                main.classList.remove("container");
            }
            if(c==9) {
                draw();
            }
        }
    }
};

newgame.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);