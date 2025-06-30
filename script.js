let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#resetButton");
let newGameButton = document.querySelector("#newGameButton");
let msgContainer = document.querySelector(".msgContainer");
let winMessage = document.querySelector("#winMessage");
let clickCount = 0;
let turnO = true;

let winConditions = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    clickCount = 0;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            box.style.color= "orange";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "green";
            turnO = true;
        }
        box.disabled = true;
        clickCount++;
        console.log(clickCount);
        checkWinConditions();
    });
});

const drawGame = () => {
    disableBoxes();
    winMessage.innerText = "The game is a Draw";
    msgContainer.classList.remove("hide");
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    };
};

const showWinner = (winner) => {
    winMessage.innerText = `Congratulations, ${winner} Wins!`;
    msgContainer.classList.remove("hide")
    disableBoxes();
};

const checkWinConditions = () => {
    for (let condition of winConditions){
        
        let position1 = boxes[condition[0]].innerText
        let position2 = boxes[condition[1]].innerText
        let position3 = boxes[condition[2]].innerText

        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 && position1 === position3){
                showWinner(position1);
            }else if(clickCount === 9){
                drawGame();
            };

        };
    };
};

newGameButton.addEventListener("click", resetGame)
resetButton.addEventListener("click", resetGame)

