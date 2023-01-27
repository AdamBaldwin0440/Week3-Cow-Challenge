const Cow = document.getElementById("Cow");
const Message = document.getElementById("Message");

const MakeCow = () =>{
    let X = Math.round(Math.random() * (innerWidth - 70));
    let Y = Math.round(Math.random() * (innerHeight - 80));
    Cow.style.left = `${X}px`;
    Cow.style.top = `${Y}px`;
}

Cow.addEventListener("mouseover", () =>{
    Message.textContent = "Catch the cow! Click him before he runs away!"
    setTimeout(() =>{
        MakeCow()
    },200);
})

Cow.addEventListener("click", () =>{
    Message.textContent = "Hurray! You caught the cow!";
})

MakeCow()