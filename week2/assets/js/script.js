

/*
//OEFENING 1

let evenOfOneven = function(){
    let number = document.getElementById('someNumber').value;

    
    if(number % 2 == 0){
        document.getElementById('result').innerHTML = "even getal";
    }else{
        document.getElementById('result').innerHTML = "oneven getal";
    }
}

document.getElementById('checkInput').addEventListener('click', evenOfOneven);
*/





/*
//OEFENING 4

let behaaldePercentageVanStudent = function(){
    let number = document.getElementById('behaaldePercentage').value;
    console.log(number);
    let percentage;

    switch(true){
        case (number <= 68 && number >= 50):
            percentage = "Net voldoende!";
            break;
        case (number >= 68 && number <= 77):
            percentage = "Oké";
            break;
        case (number >= 77 && number <= 85):
            percentage = "Goed";
            break;
        case (number >= 85 && number <= 90):
            percentage = "Heel goed";
            break;
        case (number >= 90 && number <= 100):
            percentage = "Super duper uber omega goed";
            break;


    }
    console.log(percentage);
    document.getElementById('result').innerHTML = "Het behaalde percentage is " + percentage;

}

document.getElementById('checkInput').addEventListener('click', behaaldePercentageVanStudent);

*/




/*
//OEFENING 5

let pluralizer = function(dier, aantal){

    if(dier == "sheep"){
        document.write(aantal + " " + dier + "") + document.write("</br>");
    
        }else if(dier == "buffalo"){
            document.write(aantal + " " + dier + "es") + document.write("</br>");

            }else
                document.write(aantal + " " + dier + "s") + document.write("</br>");

    }

pluralizer("buffalo", 5);
pluralizer("dog", 10);
pluralizer("sheep", 25);
*/



/*
//OEFENING 6

let getallenVergelijken = function(){

    let getal1 = document.getElementById('eersteGetal').value;
    let getal2 = document.getElementById('tweedeGetal').value;

    console.log(getal1, getal2);

    if(getal1 < getal2){
        document.getElementById('result').innerHTML = "Het getal " + getal1 + " is kleiner dan " + getal2; 
        
    }else if(getal1 > getal2){
            document.getElementById('result').innerHTML = "Het getal " + getal1 + " is groter dan " + getal2;
            
    }else
    document.getElementById('result').innerHTML = getal1 + " en "+ getal2 +" zijn hetzelfde!";

}

document.getElementById('checkInput').addEventListener('click', getallenVergelijken);
*/




/*
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
*/



/*
//OEFENING 8
var popcorn = prompt("geef de waarde van de popcorn");
var hamburger = prompt("geef de waarde van de hamburger");
var donut = prompt("geef de waarde van de donut");


let fastfoodEquation = function(){

    let donuts = donut * 2;

    console.log(popcorn);
    console.log(hamburger);
    console.log(donut);
    console.log(donuts);


    let oplossingBewerking1 = document.getElementById('result1').value;
    let oplossingBewerking2 = document.getElementById('result2').value;
    let oplossingBewerking3 = document.getElementById('result3').value;
    let oplossingBewerking4 = document.getElementById('result4').value;



    if(oplossingBewerking1 == (popcorn + popcorn + popcorn)){
        console.log("Eerste bewerking klopt");
    }else{
        console.log("Eerste bewerking klopt niet!");
    }


    
    if(oplossingBewerking2 == popcorn + hamburger*2){
        console.log("Tweede bewerking klopt!");
    }else{
        console.log("Tweede bewerking klopt niet!");
    }
    


   if(oplossingBewerking3 == hamburger + (donuts*2)){
       console.log("Derde bewerking klopt!");
   }else{ 
       console.log("Derde bewerking klopt niet!");     

   }    

   if(oplossingBewerking4 == hamburger + (donut * popcorn)){
       console.log("Vierde bewerking klopt!")
   }else{
       console.log("Vierde bewerking klopt niet!");
   }

   console.log("Eerste bewerking: " + popcorn + popcorn + popcorn);
   console.log("Tweede bewerking: " + popcorn+hamburger*2);
   console.log("Derde bewerking: " + hamburger + (donuts*2));
   console.log("Vierde bewerking: " + hamburger + (donut * popcorn));

}

document.getElementById('check').addEventListener('click', fastfoodEquation);
*/