const inputBox = document.querySelector("#inputBox");
const listContainer = document.querySelector("#listContainer");
const addButton = document.querySelector(".add");
const spanCounter = document.querySelector(".counter");
const allButton = document.querySelector(".all");
const activeButton = document.querySelector(".active");
const completedButton = document.querySelector(".completed");
const clearButton = document.querySelector(".clear");
let counter = localStorage.getItem("count" || 0);


addButton.addEventListener("click", addTask);
listContainer.addEventListener("click",checkRemove)
allButton.addEventListener("click", toggleClass);
activeButton.addEventListener("click", toggleClass);
completedButton.addEventListener("click", toggleClass);
clearButton.addEventListener("click", toggleClass);
inputBox.addEventListener("keydown", function(e){
    if(e.key === "Enter")
        return addTask()
});



function addTask(){
    if(inputBox.value === ""){
        alert("Write a New Task")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.classList.add("all");
        li.classList.add("active");
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
        counter ++;
        spanCounter.innerHTML = counter;
    }
    inputBox.value = "";
    saveData();
};

function checkRemove(event){
    const eT = event.target;
    if(eT.tagName === "LI"){
        eT.classList.toggle("checked");
        saveData();
        if (eT.className.includes("checked")){
            counter --;
            spanCounter.innerHTML = counter;
            saveData();
        } else {
            counter ++;
            spanCounter.innerHTML = counter;
            saveData();
        }
    }
    if(eT.tagName === "SPAN"){
        if (eT.parentElement.className.includes("checked")){
            eT.parentElement.remove();
            saveData();
        } else {
            eT.parentElement.remove();
            counter --;
            spanCounter.innerHTML = counter;
            saveData();
        }
    }
};

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    localStorage.setItem("count", spanCounter.innerHTML);
};

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    spanCounter.innerHTML = localStorage.getItem("count");
};
showTask();


function toggleClass(event){
    let numLi = document.querySelectorAll("li");
    let target = event.target;
    for(let i = 0; i < numLi.length ; i ++){
        let name = numLi[i].className;
        let list = numLi[i].classList;
        if (target == allButton){
            if(name.includes("all")){
                list.remove("display");
        }}
        else if (target == activeButton){
            if(name.includes("active")){
                list.remove("display");}
            if(name.includes("checked")){
                list.add("display");}  
        }
        else if (target == completedButton){
            if(name.includes("active")){
                list.add("display");}
            if(name.includes("checked")){
                list.remove("display");}
    }
    if (target == clearButton){
        if(name.includes("checked")){
            numLi[i].remove();  
        }
        saveData();
    }
}}
//     if (target == allButton){
//         for(let i = 0; i < numLi.length ; i ++){
//             if(numLi[i].className.includes("all")){
//                 numLi[i].classList.remove("display");
//         }}
//     } else if (target == activeButton){
//         for(let i = 0; i < numLi.length ; i ++){
//             if(numLi[i].className.includes("active")){
//                 numLi[i].classList.remove("display");}
//             if(numLi[i].className.includes("checked")){
//                 numLi[i].classList.add("display");}
            
//             }
//     } else if (target == completedButton){
//         for(let i = 0; i < numLi.length ; i ++){
//             if(numLi[i].className.includes("active")){
//                 numLi[i].classList.add("display");
//             }
//             if(numLi[i].className.includes("checked")){
//                 numLi[i].classList.remove("display");
//  }}}};


// If target all
// Ul inner html =
// If target active
//     If li.class == active
//       Ul inner html ? Like inner?



// listContainer.addEventListener("click", function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//         saveData();
//     } else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         counter --
//         spanCounter.innerHTML = counter;
//         saveData();
//     }
// }, false);