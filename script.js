const q = [
    {
        name:'Author number 1',
        quote:'Quote number 1'
    },
    {
        name:'Author number 2',
        quote:'Quote number 2'
    },
    {
        name:'Author number 3',
        quote:'Quote number 3'
    },
    {
        name:'Author number 4',
        quote:'Quote number 5'
    },
    {
        name:'Author number 5',
        quote:'Quote number 6'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');
quoteBtn.addEventListener('click',displayQuote);
function displayQuote(){
    const random = Math.floor(Math.random()*q.length);
    quote.innerHTML = q[random].quote;
    quoteAuthor.innerHTML = q[random].name;
}