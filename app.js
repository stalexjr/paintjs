const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d"); //2d로 진행
const colors = document.getElementsByClassName("jsColor");

canvas.width = 700; 
// cavas는 두개의 사이즈를 가진다 하나는 css사이즈 두번째는 실제로 그릴 사이즈가 필요하다.
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c"; // 색 선택
ctx.lineWidth = 2.5; // 선 굵기 선택

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        // console.log("create path", x, y)
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        // console.log("create line", x, y)
        ctx.lineTo(x, y);
        ctx.stroke();
    }
} //모든 움직임을 감지하고 라인을 그림


// function onMouseLeave(event){
//     stopPainting();
// }

function changeColor(event){
    console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    console.log(color);
}


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    // canvas.addEventListener("mouseleave", onMouseLeave); 주석처리한 이유는 반복되는 painting = true 라는 값을 함수로 주었는데 함수안에 함수를 또 호출하기에는 비효율적이기 때문에 직접적으로 stopPainting 이라는 값을 주었다.
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("mouseup", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", changeColor));


console.log(Array.from(colors)); //array/from 메소드는 object 로부터 array를 만든다.