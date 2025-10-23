let boxes= document.querySelectorAll(".box");
let resetbutton =document.querySelector("#reset");
let msg=document.querySelector("#msg");
let win=document.querySelector(".win");
let choose=document.querySelector("#choose");
let startbutton = document.querySelector("#startgame");
let choosebox = document.querySelector(".choosebox");

// let oturn =true;
let oturn =true;
let temp="";

const undisableboxes = () => {
    for (let box of boxes){
        box.disabled =false;
    }
}
const ellu= () => {
    choosebox.classList.add("hide");
}
const newgame = () => {
    for (let box of boxes){
        box.innerText="";
        box.disabled =false;
    }
    win.classList.add("hide");
    choosebox.classList.remove("hide");
    startbutton.disabled=false;
    choose.disabled=false;
    temp="";
    disableboxes();

}


const startgame = () => {
    if (choose.value==="o" || choose.value ==="O"){
        oturn=true;
        temp=choose.value;
        choose.value="";
        startbutton.disabled=true;
        choose.disabled=true;
        undisableboxes();
        
    }
    else if (choose.value==="x" || choose.value ==="X"){
        oturn=false;
        temp=choose.value;
        choose.value="";
        startbutton.disabled=true;
        choose.disabled=true;
        undisableboxes();
        
    }
    else {
        alert("Please enter a valid choice X or O to start the game");
    }
    ellu();
}

const reset = () => {
    for (let box of boxes){
        box.innerText="";
        box.disabled =false;
    }
    win.classList.add("hide");
    if (temp==="o" || temp==="O"){
        oturn=true;
    } else {
        oturn=false;
    }
}

let patterns = [[0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(oturn){
            box.innerText ="O";
            oturn = false;
        } 
        else {
            box.innerText = "X";
            oturn = true;
        }
        box.disabled = true;

        iswinner();
        checkDraw();
    })
})

const disableboxes = () => {
    for (let box of boxes){
        box.disabled =true;
    }
}
const showwinner = (arg) => {
    msg.innerText = `Winner is ${arg}`;
    win.classList.remove("hide");
    disableboxes();
}
const iswinner = () =>{
    for(let pattern of patterns){
        let pos1= boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        
        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1 === pos2 && pos2 === pos3){
                console.log("winner is " + pos1);
                showwinner(pos1);
            }
        }
    }
}

const checkDraw = () => {
    let filled = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            filled = false;
            break;
        }
    }
    if (filled) {
        msg.innerText = "It's a Draw!";
        win.classList.remove("hide");
        disableboxes();
    }
}


newgame();
