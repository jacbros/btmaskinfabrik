var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var sub = this.nextElementSibling;
        if (sub.style.display === "block") {
            sub.style.display = "none";
        } else {
            sub.style.display = "block";
        }
    });
}


function menuToggle() {
    var x = document.getElementById("menu");
    x.classList.toggle("menuactive");
}



//Hovedprogramdel
var time = new Date();
document.getElementById("currentyear").innerHTML = time.getFullYear();


