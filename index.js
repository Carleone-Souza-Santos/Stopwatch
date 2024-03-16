const minutes = document.getElementById('minutes'),
seconds = document.getElementById('seconds'),
mSeconds = document.getElementById('mseconds');


let [min, seg,  milseg] = [0, 0, 0], timer;  // usando array e a desestruturação e caminhando para a variavel timer

/*A função Verifica se o valor dos minutos segundos e milisegundos é menor que 10. 
Se for ultilizando operador condicional (ternário), adiciona um zero à esquerda
caso contrário, deixa o valor como está. 
Em seguida, define o conteúdo do elemento minutes para o valor resultante.*/
const updateDisplay = () => {
minutes.textContent = min < 10     ? '0' +  min    : min;
seconds.textContent = seg < 10     ? '0' +  seg    : seg;
mSeconds.textContent = milseg < 10 ? '0' +  milseg : milseg;
};


// arrow function aplicando
const startTimer = () => {
    clearInterval(timer);       // Limpando o intervalo anterior antes de iniciar um novo
timer = setInterval(() => {     // [0, 0, 0], timer; 
  updateDisplay();              // O cronômetro é atualizado e exibido updateDisplay().
  if (++milseg === 100) {       // os milissegundos atingiram 100. 
        milseg = 0;             // milissegundos  0
       if (++seg === 60){
        seg = 0; ++ min; } }    // Os Segundos atingiram 60 , Segundos zeram e ninuto receb +1
}, 10);                         // chamando p setInterval a cada 10 milissegundos.
};

// chamando o time e zera td.
const stopTimer = () => {
clearInterval(timer);
};

const resetTimer = () => {
// chamando o time e reinicia o cronômetro..
clearInterval(timer);
//Os valores de minutos, segundos e milissegundos redefinindo para 0.
[min, seg , milseg] = [0, 0, 0];
updateDisplay(); // Atualiza a exibição do cronômetro no HTML, definindo os valores tds para 00.
};

//ouvintes de eventos contendo id com evento de click que serão chamados para acionar arrow functions  
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);




