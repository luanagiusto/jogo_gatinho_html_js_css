
const cat = document.querySelector('.cat');
const background = document.querySelector('.background');
let isJumping = false;
let position = 80;
let pontos = 0;

function loop() {
    placar();
}

function handleKeyUp(event){
    if(event.keyCode === 38) {
        if(!isJumping) {
        jump();
      }
    }
}

function jump() {
 
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >=300) {
            clearInterval(upInterval); 
    //descendo
    let downInterval = setInterval(() => {
        if (position <= 80) {
            clearInterval(downInterval);
            isJumping = false;
        } else{
            position -= 20;
            cat.style.bottom = position + 'px';
            }  
        }, 20);    
        } else{
            //subindo
        position += 20;
        cat.style.bottom = position + 'px';
        }
    }, 20);
}
    


function createPH() {
    const ph = document.createElement('div');
    let phPosition = 1000;
    let randomTime = Math.random() * 6000;

    ph.classList.add('ph');
    ph.style.left = 1000 + 'px';
    background.appendChild(ph);

    let leftInterval = setInterval(() => {
        if(phPosition < -100) {
            clearInterval(leftInterval);
            background.removeChild(ph);
        } else if (phPosition > 0 && phPosition < 100 && position < 100) {
            //Game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1> <br> <h2>Sua pontuação foi:"0" </h2><h4>Você perdeu todos os seus pontos >.< </h4>';
        } else {    
        phPosition -=10;
        ph.style.left = phPosition + 'px';
        }
    }, 20);

    setTimeout(createPH, randomTime);
}
createPH();

function createBat() {
    const bat = document.createElement('div');
    let batPosition = 1000;
    let randomTime = Math.random() * 6000;

    bat.classList.add('bat');
    bat.style.left = 1000 + 'px';
    background.appendChild(bat);

    let leftInterval = setInterval(() => {
        if(batPosition < -100) {
            clearInterval(leftInterval);
            background.removeChild(bat);
          
                 
        } else {    
        batPosition -=10;
        bat.style.left = batPosition + 'px';
        }
    }, 20);

    setTimeout(createBat, randomTime);
}
createBat();

function pontuacao(){
    infoPontos.innerHTML = 'Pontuação: \n' + (gatinho.length - 1);
}
document.addEventListener('keyup',handleKeyUp);