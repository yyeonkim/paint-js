const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

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
    console.log(event);
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

function onMouseDown(event) {
    startPainting();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}