var heading = document.createElement("h1");
heading.addEventListener("mouseover", function aa() {
    heading.innerHTML = "<p style='color: blue;'> You clicked me! </p>";
});


function validate() {
    var name = document.getElementById("inputBox").value;
    var error= document.getElementById("displayArea");
    var button= document.getElementById("button");
    if(name.length < 5){
        error.innerText="Name must be at least 5 characters long.";
        error.style.color="red";
        button.disabled=true;
    }
    else{
        error.innerHTML="";
        button.disabled=false;
    }
}