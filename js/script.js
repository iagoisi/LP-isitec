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


        if(error) {
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
    console.log('formulário enviado')

})
















// const form = document.querySelector('form');

// console.log(form)


// function cap(event) {

//     console.log("entrei na captura")
    
//     event.preventDefault()
// }

// let valor = "";

//     valor = form.parentNode.querySelector('input').value;
//     const regexpEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

//     console.log(valor);
//     if ( valor !== regexpEmail || "") {
//         console.log('digite um e-mail válido');
//     } else {
//         form.addEventListener('submit', cap)        
//     }



//     form.addEventListener('submit', cap)












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