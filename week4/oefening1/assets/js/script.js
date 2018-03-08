

let anchor = document.querySelector('a');
console.log(anchor);

let strongElements = document.getElementsByTagName('strong');
let spanElements = document.getElementsByTagName('span');

anchor.addEventListener('mouseover',function(){
  //alle vetgedrukte woorden moeten oranje worden
  highlightElements(strongElements, 'orange');
  //alle span elementen
  highlightElements(spanElements, 'purple');
  //a-element moet een roze achtergrondkleur
  highlightAnchor(anchor, 'pink');
},false);

function highlightElements(elements, color){
  for(let i=0;i<elements.lenght;i++){
    elements[i].style.color = color;
  }
}

function highlightAnchor(element, color){
  element.style.color = color;
}