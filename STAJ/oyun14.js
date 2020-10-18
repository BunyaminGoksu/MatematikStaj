//generate random numbers
let firstNumber = parseInt(Math.random() * 200);
let secondNumber = parseInt(Math.random() * 200);

//get the total
let total = firstNumber - secondNumber;

//display numbers on the canvas
let primary = document.getElementById('primary-number');
primary.innerHTML = `<p>${firstNumber}</p>`;

let secondary = document.getElementById('secondary-number');
secondary.innerHTML = `<p>${secondNumber}</p>`


//get guess from user
let button = document.getElementById('btn')

button.addEventListener('click', function() {

    let guess = document.getElementById('guess').value;
    guess = Number(guess);
    //check answer
    if (guess === total) {
        alert('Doğru!');
        window.location.reload()
    } else {
        alert('Üzgünüm :( Yanlış. Doğru cevap şuydu: ' + total + '.')
        window.location.reload()

    }
});