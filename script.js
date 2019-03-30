document.addEventListener('keydown', function (e) {
    if (e.keyCode == 65) {
        let activeButton = document.getElementById('a');
        activeButton.classList.add("active-dm");
        document.getElementById("kick").play();
    } else if (e.keyCode == 83) {
        let activeButton = document.getElementById('s');
        activeButton.classList.add("active-dm");
        document.getElementById("snare").play();
    } else if (e.keyCode == 68) {
        let activeButton = document.getElementById('d');
        activeButton.classList.add("active-dm");
        document.getElementById("close-hat").play();
    } else if (e.keyCode == 70) {
        let activeButton = document.getElementById('f');
        activeButton.classList.add("active-dm");
        document.getElementById("open-hat").play();
    } else if (e.keyCode == 71) {
        let activeButton = document.getElementById('g');
        activeButton.classList.add("active-dm");
        document.getElementById("cymbal").play();
    } else if (e.keyCode == 72) {
        let activeButton = document.getElementById('h');
        activeButton.classList.add("active-dm");
        document.getElementById("tom1").play();
    } else if (e.keyCode == 74) {
        let activeButton = document.getElementById('j');
        activeButton.classList.add("active-dm");
        document.getElementById("tom2").play();
    } else if (e.keyCode == 75) {
        let activeButton = document.getElementById('k');
        activeButton.classList.add("active-dm");
        document.getElementById("tom3").play();
    } else if (e.keyCode == 76) {
        let activeButton = document.getElementById('l');
        activeButton.classList.add("active-dm");
        document.getElementById("perc").play();
    } else if (e.keyCode == 81) {
        let activeButton = document.getElementById('q');
        activeButton.classList.add("active-ad");
        document.getElementById("kick-ad").play();
    } else if (e.keyCode == 87) {
        let activeButton = document.getElementById('w');
        activeButton.classList.add("active-ad");
        document.getElementById("snare-ad").play();
    }else if (e.keyCode == 69) {
        let activeButton = document.getElementById('e');
        activeButton.classList.add("active-ad");
        document.getElementById("rim-ad").play();
    } else if (e.keyCode == 82) {
        let activeButton = document.getElementById('r');
        activeButton.classList.add("active-ad");
        document.getElementById("close-hat-ad").play();
    } else if (e.keyCode == 84) {
        let activeButton = document.getElementById('t');
        activeButton.classList.add("active-ad");
        document.getElementById("open-hat-ad").play();
    } else if (e.keyCode == 89) {
        let activeButton = document.getElementById('y');
        activeButton.classList.add("active-ad");
        document.getElementById("crash-ad").play();
    } else if (e.keyCode == 85) {
        let activeButton = document.getElementById('u');
        activeButton.classList.add("active-ad");
        document.getElementById("tom1-ad").play();
    } else if (e.keyCode == 73) {
        let activeButton = document.getElementById('i');
        activeButton.classList.add("active-ad");
        document.getElementById("tom2-ad").play();
    } else if (e.keyCode == 79) {
        let activeButton = document.getElementById('o');
        activeButton.classList.add("active-ad");
        document.getElementById("tom3-ad").play();
    }
});

document.addEventListener('keyup', function (e) {
    if (e.keyCode == 65) {
        let activeButton = document.getElementById('a');
        activeButton.classList.remove("active-dm");
        document.getElementById("kick").pause();
        document.getElementById("kick").currentTime = 0;
    } else if (e.keyCode == 83) {
        let activeButton = document.getElementById('s');
        activeButton.classList.remove("active-dm");
        document.getElementById("snare").pause();
        document.getElementById("snare").currentTime = 0;
    } else if (e.keyCode == 68) {
        let activeButton = document.getElementById('d');
        activeButton.classList.remove("active-dm");
        document.getElementById("close-hat").pause();
        document.getElementById("close-hat").currentTime = 0;
    } else if (e.keyCode == 70) {
        let activeButton = document.getElementById('f');
        activeButton.classList.remove("active-dm");
        document.getElementById("open-hat").pause();
        document.getElementById("open-hat").currentTime = 0;
    } else if (e.keyCode == 71) {
        let activeButton = document.getElementById('g');
        activeButton.classList.remove("active-dm");
        document.getElementById("cymbal").pause();
        document.getElementById("cymbal").currentTime = 0;
    } else if (e.keyCode == 72) {
        let activeButton = document.getElementById('h');
        activeButton.classList.remove("active-dm");
        document.getElementById("tom1").pause();
        document.getElementById("tom1").currentTime = 0;
    } else if (e.keyCode == 74) {
        let activeButton = document.getElementById('j');
        activeButton.classList.remove("active-dm");
        document.getElementById("tom2").pause();
        document.getElementById("tom2").currentTime = 0;
    } else if (e.keyCode == 75) {
        let activeButton = document.getElementById('k');
        activeButton.classList.remove("active-dm");
        document.getElementById("tom3").pause();
        document.getElementById("tom3").currentTime = 0;
    } else if (e.keyCode == 76) {
        let activeButton = document.getElementById('l');
        activeButton.classList.remove("active-dm");
        document.getElementById("perc").pause();
        document.getElementById("perc").currentTime = 0;
    } else if (e.keyCode == 81) {
        let activeButton = document.getElementById('q');
        activeButton.classList.remove("active-ad");
        document.getElementById("kick-ad").pause();
        document.getElementById("kick-ad").currentTime = 0;
    } else if (e.keyCode == 87) {
        let activeButton = document.getElementById('w');
        activeButton.classList.remove("active-ad");
        document.getElementById("snare-ad").pause();
        document.getElementById("snare-ad").currentTime = 0;
    } else if (e.keyCode == 69) {
        let activeButton = document.getElementById('e');
        activeButton.classList.remove("active-ad");
        document.getElementById("rim-ad").pause();
        document.getElementById("rim-ad").currentTime = 0;
    } else if (e.keyCode == 82) {
        let activeButton = document.getElementById('r');
        activeButton.classList.remove("active-ad");
        document.getElementById("close-hat-ad").pause();
        document.getElementById("close-hat-ad").currentTime = 0;
    } else if (e.keyCode == 84) {
        let activeButton = document.getElementById('t');
        activeButton.classList.remove("active-ad");
        document.getElementById("open-hat-ad").pause();
        document.getElementById("open-hat-ad").currentTime = 0;
    } else if (e.keyCode == 89) {
        let activeButton = document.getElementById('y');
        activeButton.classList.remove("active-ad");
        document.getElementById("crash-ad").pause();
        document.getElementById("crash-ad").currentTime = 0;
    } else if (e.keyCode == 85) {
        let activeButton = document.getElementById('u');
        activeButton.classList.remove("active-ad");
        document.getElementById("tom1-ad").pause();
        document.getElementById("tom1-ad").currentTime = 0;
    } else if (e.keyCode == 73) {
        let activeButton = document.getElementById('i');
        activeButton.classList.remove("active-ad");
        document.getElementById("tom2-ad").pause();
        document.getElementById("tom2-ad").currentTime = 0;
    } else if (e.keyCode == 79) {
        let activeButton = document.getElementById('o');
        activeButton.classList.remove("active-ad");
        document.getElementById("tom3-ad").pause();
        document.getElementById("tom3-ad").currentTime = 0;
    }
});
