

let maakLandschap = function(aantal){

    let platteland = [];
    let i = 0;

    for(i = 0; i <= aantal; i++){
        platteland.push("_");
        
    }
    document.getElementById("result").innerHTML += platteland.join("");

    platteland.length = 0;

    return aantal;
}

let maakBerg = function(aantal){

    let berg = [];
    let i = 1;

    for(i = 1; i <= aantal; i++){
        if(i ==  1){
            berg.push("/");
        }
        berg.push("\'");
        if(i === aantal){
            berg.push("\\");
        }
    }
    
    document.getElementById('result').innerHTML += berg.join("");

    return aantal;
}

maakLandschap(6);
maakBerg(6);
maakLandschap(6);
maakBerg(6);
maakLandschap(6);

