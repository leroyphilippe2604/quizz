let select = document.getElementById('select');
let rules = document.getElementById('rules');
let exit = document.getElementById('exit');
let ctn = document.getElementById('continue');
const sound = document.getElementById('audio');


ctn.addEventListener('click', () => {
    rules.style.display = "none";
});

exit.addEventListener('click', () =>{
    sound.pause();
    sound.currentTime = 0;
    sound.onloadeddata = sound.play();
});

