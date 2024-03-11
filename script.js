//Selecionando os elementos do DOM
const startEL = document.getElementById('start');
const timerEL = document.getElementById('timer');
const stopEL = document.getElementById('stop');
const resetEL = document.getElementById('reset');

//Declarando as variáveis
let intervalo
let timeleft =1500;

//função de atualizar o timer
function updateTimer(){
    let minuto = Math.floor(timeleft/60);
    let segundo = timeleft%60;
    let tempoFormatado = `${minuto.toString().padStart(2,'0')}:${segundo.toString().padStart(2, '0')}`;
    timerEL.innerHTML = tempoFormatado;
}

//Função de start do tempo
function startTimer(){
    intervalo = setInterval(()=>{
        timeleft--
        updateTimer()
        if(timeleft === 0){
            clearInterval(intervalo)
            alert('O tempo acabou')
            timeleft = 1500
            updateTimer()
        }
    }, 1000)
};

//Função stop
function stopTimer(){
    clearInterval(intervalo)
}

//Função reset
function resetTimer(){
    clearInterval(intervalo)
    timeleft = 1500
    updateTimer()
}

// Setando a função startTmer no botão Start
startEL.addEventListener('click', startTimer);
stopEL.addEventListener('click', stopTimer);
resetEL.addEventListener('click', resetTimer);

