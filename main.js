
const inputBox = document.querySelector("#inputBox");
const listContainer = document.querySelector("#listContainer");
const addButton = document.querySelector(".add");
const spanCounter = document.querySelector(".counter");
const allButton = document.querySelector(".all");
const activeButton = document.querySelector(".active");
const completedButton = document.querySelector(".completed");



addButton.addEventListener("click", addTask);
listContainer.addEventListener("click",checkRemove)
allButton.addEventListener("click", toggleClass);
activeButton.addEventListener("click", toggleClass);
completedButton.addEventListener("click", toggleClass);
inputBox.addEventListener("keydown", function(e){
    if(e.key === "Enter")
        return addTask()
});

let counter = li.length;


function addTask(){
    if(inputBox.value === ""){
        alert("Write task befor add")
    } else{
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
    } else if(eT.tagName === "SPAN"){
        eT.parentElement.remove();
        counter --;
        spanCounter.innerHTML = counter;
        saveData();
    }
};

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
};

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
};
showTask();


function toggleClass(){

    let li = document.querySelectorAll("li");
    console.log(counter)
    for(let i = 0; i < counter; i ++){
        if(li[i].className.includes() == "checked"){
            console.log("yes")
            // li[i].style.display = "none"
        }
            console.log("no")
    }
};

function checkedCounter (){
    if(li.classList === 'checked'){
        
    } else if(li.classList === ""){
        
    }
};


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