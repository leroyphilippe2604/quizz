let select = document.getElementById('select');
let rules = document.getElementById('rules');
let exit = document.getElementById('exit');
let ctn = document.getElementById('continue');
let theme = document.getElementById('choix');
const sound = document.getElementById('audio');
const time_limit = 90;
let timePassed = 0;
let timeLeft = time_limit;




ctn.addEventListener('click', () => {
    rules.style.display = "none";
    select.style.display = "flex";
});

exit.addEventListener('click', () =>{
    sound.pause();
    sound.currentTime = 0;
    sound.onloadeddata = sound.play();
});

select.addEventListener('click', () =>{
    select.style.display = "none";
    theme.style.display = "flex";
});

//timer 

function formatTimeLeft(time){
    /* const minutes = Math.floor(time / 60); */
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    };
    return `${time}`; // return `${minute}:${seconds}
}

document.getElementById('base-timer-label').innerHTML =`
${formatTimeLeft(timeLeft)}`;


