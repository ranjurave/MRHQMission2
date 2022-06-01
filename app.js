//name animation
window.onload = nameAnimation();
function nameAnimation(){
    const intro_text = document.getElementById('selfIntro');
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
        if(char>=splitText.length*2){
            complete();
            return;        
        }
    }

    function complete(){
        clearInterval(timer);
        timer = null;
    }
}

//Mouse over behaviour for works
function WorkMouseOver(works){
    works.children[0].style.opacity = '50%';
    works.children[1].style.opacity = '100%';
}
function WorkMouseOut(works){
    works.children[0].style.opacity = '100%';
    works.children[1].style.opacity = '0%';
}

// Smooth scroll to the sections of the page
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});