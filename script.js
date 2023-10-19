const inputBox = document.getElementById('input-box');
const listcontainer = document.getElementById("list-container");

function AddTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    savedata();
}

listcontainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

 function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
 }
    function loaddata(){
        listcontainer.innerHTML = localStorage.getItem("data");
    }
    function showtask(){
        listcontainer.innerHTML = localStorage.getItem("data");
    }
 showtask();
 
 const darkModeToggle = document.getElementById('dark-mode-toggle');
 const body = document.body;
 
 darkModeToggle.addEventListener('click', () => {
     body.classList.toggle('dark-mode'); 
     saveDarkModeState(body.classList.contains('dark-mode')); 
 });
 
 function saveDarkModeState(isDarkMode) {
     localStorage.setItem('dark-mode', isDarkMode);
 }
 
 function loadDarkModeState() {
     const isDarkMode = localStorage.getItem('dark-mode');
     if (isDarkMode === 'true') {
         body.classList.add('dark-mode');
     }
 }
 
 loadDarkModeState();
 
