


let evenOfOneven = function(){
    let number = document.getElementById('someNumber').value;

    
    if(number % 2 == 0){
        document.getElementById('result').innerHTML = "even getal";
    }else{
        document.getElementById('result').innerHTML = "oneven getal";
    }
}

document.getElementById('checkInput').addEventListener('click', evenOfOneven);
