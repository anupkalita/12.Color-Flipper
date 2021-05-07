const colors = ["1","2","3","4","5","6","7","8","9","A","B","C",
"D","E","F"];

const bgColor = document.getElementById('bg-color');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){

    let hex = "#";
    for(let i=0; i<6; i++){
        hex += colors[getNumber()];
    }

    document.body.style.background = hex;
    bgColor.textContent = hex;
});

function getNumber(){
    return Math.floor(Math.random() * colors.length);
}