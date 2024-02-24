
    


let doc = document
console.log(doc)
let calc = document.getElementById('calculator')
console.log(calc)

function appendToDisplay(value){
    document.getElementById('display').value += value;
}
function clearDisplay(){
    document.getElementById('display').value = '';
}


function calculateResult(){
    var result = eval( document.getElementById('display').value)
    document.getElementById('display').value = result;
}