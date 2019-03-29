document.addEventListener('keydown', function(e) {
    if (e.keyCode == 65) {
        let activeButton = document.getElementById('a');
        activeButton.classList.add("active");
    }
})

document.addEventListener('keyup', function(e) {
    if (e.keyCode == 65) {
        let activeButton = document.getElementById('a');
        activeButton.classList.remove("active");
    }
})