const button = document.getElementById("resetButton")

document.addEventListener("keydown", () => {
    document.getElementById("eventKey").textContent = event.key;
    document.getElementById("title").textContent = event.keyCode;
    document.getElementById("eventCode").textContent = event.code;
    document.getElementById("eventKeyCode").textContent = event.keyCode;
    document.getElementById("table").style.display = "flex"
    document.getElementById("title").style.fontSize = "100px"
    button.style.display = "flex"
})

button.addEventListener("click", () => {
    document.getElementById("title").textContent = "Press any key to get the JavaScript event keycode";
    document.getElementById("table").style.display = "none"
    document.getElementById("title").style.fontSize = "30px"
    button.style.display = "none"
})
