const board = document.querySelector('.board');
function getRandom(){
    return Math.floor(Math.random()*LIST.length);
};
let random = getRandom();
board.textContent = LIST[random].print;

document.addEventListener('keypress', showResult);

function showResult(event) {
    console.log("event "+event.code+" board "+ board.textContent+" select "+ 'div[data-id="'+event.code+'"]');
    let key = document.querySelector('div[data-id='+event.code+']');
    key.classList.add('react');
    let delayTime = 1000;
    setTimeout(function() {
        key.classList.remove('react');
    }, delayTime);

    if(LIST[random].name == event.code){
        random = getRandom();
        board.textContent = LIST[random].print;
    }
}