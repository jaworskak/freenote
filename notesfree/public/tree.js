const canvas = document.querySelector('canvas')
const generateButton = document.querySelector('.generate-tree-button');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

let curve;
let curve2;

let lefes;

// poczatek rysowania drzewa
function drawTree(startX, startY,len, angle, branchWidth, color1, color2){
    ///console.log(len)
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle= color1;
    ctx.fillStyle = color2;
    ctx.shadowBlur = 15;
    ctx.shadowColor = 'black';
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI/180);
    ctx.moveTo(0,0);
   // ctx.lineTo(0,-len); // musi byc limit renderowania zeby nie zajmowalo za duzo miejsca
    if(angle >0 ){ // lewe liscie w lewa strone, prawe w prawą
        ctx.bezierCurveTo(curve2,-len/2, curve2, - len/2, 0, -len) // dodaje zaokraglenie
    } else{
        ctx.bezierCurveTo(curve2,-len/2, -curve2, - len/2, 0, -len) // dodaje zaokraglenie
    }
    ctx.stroke(); // rysuje wybrany fragment

    if(len < lefes ){
        // liscie
        ctx.beginPath();
        ctx.arc(0, -len, lefes/2, 0, Math.PI/2); // dodaje kolkko
        ctx.fill(); // color2
        ctx.restore(); // ostatni state
        return;
    }
    curve =  (Math.random() * 10) + 10; // wylosowany raz juz zostaje na stale

    // rekurencja
    drawTree(0,-len ,len * 0.78, angle + curve, branchWidth * 0.6); // branchwidth *0;5 coraz ciensze galezie
    drawTree(0,-len ,len * 0.78, angle - curve, branchWidth *0.6); // galezie pojda w dwie rozne strony
    ctx.restore(); // zwraca ostatni status
}

// losowanie wygladu na poczatku i juz sie nie zmienia
lefes=100;
curve = (Math.random()*20)+2;
curve2 = Math.random()*50;
let centerPointX = canvas.width+30;
let len = Math.floor((Math.random()*10) + 300);
let angle = 0;
let branchWidth = (Math.random()*70) + 2;
color1= 'rgb(233,137,106)'
color2= 'rgb(56,124,109)'

function generateRandomTree(){

    lefes-=5; // co kolejne odlapenie zwiekszamy drzewo az do 10

    if(lefes>=15){
          console.log('draw')
              ctx.clearRect(0,0,canvas.width, canvas.height);
         drawTree(centerPointX,canvas.height,len,-20,40,color1, color2);
    }


  
    
}