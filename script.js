document.addEventListener("keydown", () => {
    document.getElementById("eventKey").textContent = event.key;
    document.getElementById("title").textContent = event.keyCode;
    document.getElementById("eventCode").textContent = event.code;
    document.getElementById("eventKeyCode").textContent = event.keyCode;
    document.getElementById("table").style.display = "flex"
    document.getElementById("title").style.fontSize = "100px"
})
