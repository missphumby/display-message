
const button = document.getElementById("submitBtn");
const message = document.getElementById("feedback");
const form = document.getElementById("msgform");
const content = document.getElementById("messageBtn");
      const msgContent = document.getElementById("messagebtn-content");


form.addEventListener(`submit`,function(e){
    e.preventDefault();
    if(content.value === ""){
        message.innerHTML = "please enter a value";
        
    setTimeout(function(){message.innerHTML = ""}, 3000)
    } 
else{
        message.innerHTML = "";
    msgContent.textContent = content.value;
    content.value = ""
    }
    
    message.style.backgroundColor = "pink";


    
});



