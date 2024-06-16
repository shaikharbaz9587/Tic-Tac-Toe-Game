let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let draw = document.querySelector("#draw");
let drawcontainer = document.querySelector(".draw-container");
let newbtn1 = document.querySelector("#new-btn1");

let turnO = true;

const winpatterns = [

[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]

];
 let count = 0;
boxes.forEach((box) => {
    
    box.addEventListener("click",() => {
        console.log("box is cliked");
        count++;
        if(turnO){
            box.innerText = "O";
            box.style.color = "blue";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        
        box.disabled = true;
        checkwinner();
    });
});

const resetbutton = () => {
    turnO = true;
    enabledboxes();
    msgcontainer.classList.add("hide");
    count = 0;
}

const enabledboxes = () => {
    for(let box of boxes ){
        box.disabled = false;
        box.innerText = "";
    }
}

const disabledboxes = () => {
    for(let box of boxes ){
        box.disabled = true;
    }
}



const showwinner = (winner) => {
    msg.innerText = `Congratulations Winner Is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
    
}



const checkwinner = () => {
    
    for(let patterns of winpatterns){
            
           let pst0Val = boxes[patterns[0]].innerText;
           let pst1Val = boxes[patterns[1]].innerText;
           let pst2Val = boxes[patterns[2]].innerText; 

         

           if(pst0Val != "" && pst1Val != "" && pst2Val != ""){
            
            if(pst0Val === pst1Val && pst1Val === pst2Val){
               // console.log("winner",pst0Val);
                showwinner(pst0Val);
            }
            else{
    
                    if(count === 9 && pst0Val != pst1Val && pst1Val != pst2Val){
                        msg.innerText = `OOps! match is draw`;
                        msgcontainer.classList.remove("hide");
                        disabledboxes();
                    }
                
                
            }
          
            
          
            
        }
       

}};

newbtn.addEventListener("click",resetbutton);
resetbtn.addEventListener("click",resetbutton);

