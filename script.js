const title = document.getElementById("title")
const button = document.getElementById("resetButton")
const table = document.getElementById("table")

document.addEventListener("keydown", () => {
    document.getElementById("eventKey").textContent = event.key;
    document.getElementById("eventCode").textContent = event.code;
    document.getElementById("eventKeyCode").textContent = event.keyCode;
    title.style.fontSize = "100px"
    table.style.display = "flex"
    button.style.display = "flex"
    title.textContent = event.keyCode;
})

button.addEventListener("click", () => {
    title.textContent = "Press any key to get the JavaScript event keycode";
    title.style.fontSize = "30px"
    table.style.display = "none"
    button.style.display = "none"
})
