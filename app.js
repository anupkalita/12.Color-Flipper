const colors = ["red", "green", "rgb(123,432,345)", "#432562"];

const bgColor = document.getElementById('bg-color');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){

    let color = colors[getNumber()];
    document.body.style.background = color;
    bgColor.textContent = color;
});

function getNumber(){
    return(Math.floor(Math.random() * colors.length));
}