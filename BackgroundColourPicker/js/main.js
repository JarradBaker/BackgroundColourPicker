document.querySelector('#grid-item-red').addEventListener('click', runRed)
document.querySelector('#grid-item-blue').addEventListener('click', runBlue)
document.querySelector('#grid-item-green').addEventListener('click', runGreen)
document.querySelector('#grid-item-brown').addEventListener('click', runBrown)
document.querySelector('#grid-item-pink').addEventListener('click', runPink)

function runRed(){
    document.body.style.backgroundColor = 'red';
}
function runBlue(){
    document.body.style.backgroundColor = 'blue';
}
function runGreen(){
    document.body.style.backgroundColor = 'green';
}
function runBrown(){
    document.body.style.backgroundColor = 'brown';
}
function runPink(){
    document.body.style.backgroundColor = 'pink';
}
