document.addEventListener('keydown', function (e) {
    if (e.keyCode == 65) {
        let activeButton = document.getElementById('a');
        activeButton.classList.add("active");
        document.getElementById("kick").play();
    } else if (e.keyCode == 83) {
        let activeButton = document.getElementById('s');
        activeButton.classList.add("active");
        document.getElementById("snare").play();
    } else if (e.keyCode == 68) {
        let activeButton = document.getElementById('d');
        activeButton.classList.add("active");
        document.getElementById("close-hat").play();
    }
})

document.addEventListener('keyup', function (e) {
    if (e.keyCode == 65) {
        let activeButton = document.getElementById('a');
        activeButton.classList.remove("active");
        document.getElementById("kick").pause();
        document.getElementById("kick").currentTime = 0;
    } else if (e.keyCode == 83) {
        let activeButton = document.getElementById('s');
        activeButton.classList.remove("active");
        document.getElementById("snare").pause();
        document.getElementById("snare").currentTime = 0;
    } if (e.keyCode == 68) {
        let activeButton = document.getElementById('d');
        activeButton.classList.remove("active");
        document.getElementById("close-hat").pause();
        document.getElementById("close-hat").currentTime = 0;
    }
})
