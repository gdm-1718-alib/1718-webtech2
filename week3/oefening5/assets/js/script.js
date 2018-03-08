

function randomsort(a, b) { 
    
    return Math.random()>.5 ? -1 : 1;
}

var wachtwoord = "showbob";
var randomStr = wachtwoord.split('').sort(randomsort); 
    
    
    console.log(randomStr.join(''));


let vraagWachtwoord = function(){

    let input = document.getElementById('input').value;


    if(input == ""){
        alert("Input is leeg...");
    
    }else if(wachtwoord != input){
        alert("Wachtwoord is verkeerd!");
    
    }else if(wachtwoord == input){
        alert("Wachtwoord is correct!");
    }


}

document.write("</br>" + randomStr.join(''));
document.getElementById('checkInput').addEventListener('click', vraagWachtwoord);
