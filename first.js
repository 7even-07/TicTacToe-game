let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgCon = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn = true;

const wPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGames = () => {
    turn = true;
    enableBox();
    msgCon.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        // console.log("box was clickeds")
        if(turn===true) {
            box.innerText = "O";
            turn = false
        }else {
            box.innerText = "X";
            turn = true
        }
        box.disabled = true;
        winResult();

        
    })
})



const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgCon.classList.remove("hide");  
    disableBox();  

}

const disableBox = () => {
    for(let box of boxes ) {
        box.disabled = true;
    }
}


const enableBox = () => {
    for(let box of boxes ) {
        box.disabled = false;
        box.innerText = "";
    }
}


const winResult = () => {
    for(let i of wPattern) {
        let first = boxes[i[0]].innerText;
        let second = boxes[i[1]].innerText;
        let third = boxes[i[2]].innerText;

        if(first != "" && second != "" && third !="") {
            if(first === second && second === third) {
                // console.log("winner",first);    //here we can add any veriable whichever we wants
                showWinner(first);
            }
        }
    }
}




newBtn.addEventListener("click",resetGames);
resetBtn.addEventListener("click",resetGames);




// const winResult = () => {
//     for (let i of wPattern) {
//         let first = boxes[i[0]].innerText;
//         let second = boxes[i[1]].innerText;
//         let third = boxes[i[2]].innerText;

//         if (first !== "" && second !== "" && third !== "") {
//             if (first === second && second === third) {
//                 console.log("winner");
//             }
//         }
//     }
// }
