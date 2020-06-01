
var Canvas = document.getElementById('circlesbg');
var ctx = Canvas.getContext('2d');

var circlestore = [];
var lines = [];
var R = Canvas.clientWidth*0.01;

//clear on resize
var resize = function() {
    Canvas.width = Canvas.clientWidth;
    Canvas.height = Canvas.clientHeight;
    circlestore = [];
    lines = [];
    R = Canvas.width*0.01;
};
window.addEventListener('resize', resize);
resize();

function draw(){
  if(lines.length > 1) {
    for (var k=0; k<(lines.length-1); k++) {
      ctx.beginPath();
      ctx.moveTo(lines[k][0], lines[k][1]);
      ctx.lineTo(lines[k+1][0], lines[k+1][1]);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "#b5b5b5";
      ctx.stroke();
    };
};
  for (var i=0; i<circlestore.length; i++) {
    var cX = circlestore[i][0];
    var cY = circlestore[i][1];
    ctx.beginPath();
    ctx.arc(cX, cY, R, 0, 2 * Math.PI, false);
    //ctx.fillStyle = "rgb(3, 198, 252)";
    ctx.fillStyle = circlestore[i][2];
    ctx.fill();
  };
}

function circleonclick(e){
  ctx.beginPath();
  ctx.arc(e.clientX, e.clientY, R, 0, 2 * Math.PI, false);
  randomfill = "#" + Math.floor(Math.random()*16777215).toString(16);
  ctx.fillStyle = randomfill;
  ctx.fill();
  circlestore.push([e.clientX, e.clientY, randomfill]);
  //add coordinates of new circle for connecting line
  lines.push([e.clientX, e.clientY]);
};

function linemove(e){
  ctx.clearRect(0, 0, Canvas.width, Canvas.height);
  draw();
  if (circlestore.length >= 1) {
    ctx.beginPath();
    ctx.moveTo(circlestore[circlestore.length-1][0],circlestore[circlestore.length-1][1]);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = "#b5b5b5";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(circlestore[circlestore.length-1][0], circlestore[circlestore.length-1][1], R, 0, 2 * Math.PI, false);
    ctx.fillStyle = circlestore[circlestore.length-1][2];
    ctx.fill();
  }
}
document.addEventListener("click", circleonclick, false);
document.addEventListener("mousemove", linemove, false);
