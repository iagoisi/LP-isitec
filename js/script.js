const btn = document.getElementById('button');

const intro = document.querySelector('.intro');

const animation01 = document.querySelector('.animation_01');
const animation02 = document.getElementById('animation_02');

console.log(intro, animation01, animation02)

function handleClick(){
        intro.classList.add('hideIntro');
        setTimeout(() => {
            animation01.classList.add('openAnimate');
            animation01.removeAttribute('animation_01');

        }, 1100)


}





btn.addEventListener('click', handleClick);