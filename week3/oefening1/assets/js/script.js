
//OEFENING 7

let bitterbal = function(){

    let lengteVanGetallen = [];

    let getal1 = document.getElementById('eersteGetal').value;
    let getal2 = document.getElementById('tweedeGetal').value;


    let i;

    for(i = getal1; i <= getal2; i++){
        if(i % 5 == 0){
            lengteVanGetallen.push("bal" + "</br>");
        }else if(i % 3 == 0){
            lengteVanGetallen.push("bitter" + "</br>");
        }else
            lengteVanGetallen.push(i + "</br>");
            document.getElementById('result').innerHTML = lengteVanGetallen.join(" ");
    }

}

document.getElementById('checkInput').addEventListener('click', bitterbal);