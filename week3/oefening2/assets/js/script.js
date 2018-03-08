
//OEFENING 8
var popcorn = prompt("geef de waarde van de popcorn");
var hamburger = prompt("geef de waarde van de hamburger");
var donut = prompt("geef de waarde van de donut");


let fastfoodEquation = function(){




    let oplossingBewerking1 = document.getElementById('result1').value;
    let oplossingBewerking2 = document.getElementById('result2').value;
    let oplossingBewerking3 = document.getElementById('result3').value;
    let oplossingBewerking4 = document.getElementById('result4').value;

    let popcorn = oplossingBewerking1 / 3;
    let hamburger = (oplossingBewerking2 - popcorn)/2;
    let donut = (oplossingBewerking3 - hamburger) / 4;
    let result = hamburger + donut * popcorn;



    console.log(popcorn);
    console.log(hamburger);
    console.log(donut);
    console.log(donuts);


    

   if(oplossingBewerking4 === result){
       console.log("bewerking klopt!")
   }else{
       console.log("bewerking klopt niet!");
   }

}

document.getElementById('check').addEventListener('click', fastfoodEquation);