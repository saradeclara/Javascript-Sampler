document.addEventListener('keydown', function(e) {
    if (e.keyCode == 65) {
        let activeButton = document.getElementById('a');
        activeButton.classList.add("active");
        document.getElementById("kick").play();
    }
})

document.addEventListener('keyup', function(e) {
    if (e.keyCode == 65) {
        let activeButton = document.getElementById('a');
        activeButton.classList.remove("active");
        document.getElementById("kick").pause();
        document.getElementById("kick").currentTime = 0;
    }
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 83) {
        let activeButton = document.getElementById('s');
        activeButton.classList.add("active");
        document.getElementById("snare").play();
    }
})

document.addEventListener('keyup', function(e) {
    if (e.keyCode == 83) {
        let activeButton = document.getElementById('s');
        activeButton.classList.remove("active");
        document.getElementById("snare").pause();
        document.getElementById("snare").currentTime = 0;
    }
})