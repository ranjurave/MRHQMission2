// const hi_text = document.getElementById('hi');
// const ranju_text = document.getElementById('IamRanju');
const intro_text = document.getElementById('selfIntro');
// const strHiText = hi_text.textContent;
// const strRanjuText = ranju_text.textContent;
// const strIntroText = intro_text.textContent;
const strText = intro_text.textContent;
const splitText = strText.split("");
intro_text.textContent="";

for(let i = 0; i < splitText.length; i++){
    intro_text.innerHTML += '<span>'+splitText[i]+'<span>'
}

let char = 0;
let timer = setInterval(onTick, 50);
function onTick(){
    const span = intro_text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    console.log(char);
    if(char>=splitText.length*2){
        complete();
        return;        
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}

function changeopacityover(works_text){
    works_text.style.opacity = '100%';
}
function changeopacityout(works_text){
    works_text.style.opacity = '0%';
}
function text_shadow_on(text){
    text.style.color = "#1182dd";
}
function text_shadow_off(text){
    text.style.color = 'white';
}