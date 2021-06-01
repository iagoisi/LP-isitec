const fields =  document.querySelectorAll('[required]');

function customValidation(event) {

    event.preventDefault();

    const field = event.target

        function verifyErrors() {
            let foundError = false;

            for ( let error in field.validity ) {
                

                if(field.validity[error] && !field.validity.valid) {
                    foundError = error;
                }
            }

            console.log(foundError)
            return foundError;
        }

        const error = verifyErrors();

        const spanError = field.parentNode.querySelector('span.error')


        if(error === 'patternMismatch') {
            spanError.classList.add('active');
            spanError.innerHTML = 'Digite um e-mail válido';
        } else {
            spanError.classList.remove('active');
            spanError.innerHTML = '';
        }
}

for ( const field of fields ) {
    field.addEventListener('invalid', customValidation)
    field.addEventListener('blur', customValidation)
}

document.querySelector('form')
.addEventListener('submit', event => {
})



// const btn = document.getElementById('button');

// const intro = document.querySelector('.intro');

// const animation01 = document.querySelector('.animation_01');
// const animation02 = document.getElementById('animation_02');

// console.log(intro, animation01, animation02)

// function handleClick(){
//         intro.classList.add('hideIntro');
//         setTimeout(() => {
//             animation01.classList.add('openAnimate');
//             animation01.removeAttribute('animation_01');

//         }, 1100)


// }





// btn.addEventListener('click', handleClick);