const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jsColor");
const ctx = canvas.getContext("2d");
const range = document.getElementById("jsRange");

ctx.width = document.getElementsByClassName("canvas")[0].offsetWidth;
ctx.height = document.getElementsByClassName("canvas")[0].offsetHeight;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.layerX;
    const y = event.layerY;

    if (!painting) {
        ctx.beginPath(); //path의 시작점 생성
        ctx.moveTo(x, y);  //시작점을 마우스를 따라 옮김
    } else {
        ctx.lineTo(x, y); //마우스를 따라 좌표 연결 --> 선을 만든다
        ctx.stroke();  //현재 strokeStyle에 따라 선을 그린다
        //작은 path들이 계속 연결되는 것
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if(range) { //range가 비어있을 수 있으니까 확인 차 작성
    range.addEventListener("input", handleRangeChange);
}