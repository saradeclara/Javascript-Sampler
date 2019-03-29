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
    } else if (e.keyCode == 70) {
        let activeButton = document.getElementById('f');
        activeButton.classList.add("active");
        document.getElementById("open-hat").play();
    } else if (e.keyCode == 71) {
        let activeButton = document.getElementById('g');
        activeButton.classList.add("active");
        document.getElementById("cymbal").play();
    } else if (e.keyCode == 72) {
        let activeButton = document.getElementById('h');
        activeButton.classList.add("active");
        document.getElementById("tom1").play();
    } else if (e.keyCode == 74) {
        let activeButton = document.getElementById('j');
        activeButton.classList.add("active");
        document.getElementById("tom2").play();
    } else if (e.keyCode == 75) {
        let activeButton = document.getElementById('k');
        activeButton.classList.add("active");
        document.getElementById("tom3").play();
    } else if (e.keyCode == 76) {
        let activeButton = document.getElementById('l');
        activeButton.classList.add("active");
        document.getElementById("perc").play();
    }
});

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
    } else if (e.keyCode == 68) {
        let activeButton = document.getElementById('d');
        activeButton.classList.remove("active");
        document.getElementById("close-hat").pause();
        document.getElementById("close-hat").currentTime = 0;
    } else if (e.keyCode == 70) {
        let activeButton = document.getElementById('f');
        activeButton.classList.remove("active");
        document.getElementById("open-hat").pause();
        document.getElementById("open-hat").currentTime = 0;
    } else if (e.keyCode == 71) {
        let activeButton = document.getElementById('g');
        activeButton.classList.remove("active");
        document.getElementById("cymbal").pause();
        document.getElementById("cymbal").currentTime = 0;
    } else if (e.keyCode == 72) {
        let activeButton = document.getElementById('h');
        activeButton.classList.remove("active");
        document.getElementById("tom1").pause();
        document.getElementById("tom1").currentTime = 0;
    } else if (e.keyCode == 74) {
        let activeButton = document.getElementById('j');
        activeButton.classList.remove("active");
        document.getElementById("tom2").pause();
        document.getElementById("tom2").currentTime = 0;
    } else if (e.keyCode == 75) {
        let activeButton = document.getElementById('k');
        activeButton.classList.remove("active");
        document.getElementById("tom3").pause();
        document.getElementById("tom3").currentTime = 0;
    } else if (e.keyCode == 76) {
        let activeButton = document.getElementById('l');
        activeButton.classList.remove("active");
        document.getElementById("perc").pause();
        document.getElementById("perc").currentTime = 0;
    }
});
