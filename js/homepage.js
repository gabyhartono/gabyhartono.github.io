<script>
  // var thecircles = [];
  // function clickEffect(e){
  //   var d=document.createElement("div");
  //   var dotwidth = 50;
  //   var dotheight = 50;
  //   d.className="clickEffect";
  //   d.style.top=(e.clientY-dotheight/2)+"px";
  //   d.style.left=(e.clientX-dotwidth/2)+"px";
  //   d.style.width=dotwidth+"px";
  //   d.style.height=dotheight+"px";
  //   document.getElementById("circles").appendChild(d);
  //   thecircles.push([(e.clientY-dotheight/2), (e.clientX-dotwidth/2)]);
  // }
  // document.addEventListener('click',clickEffect);
  var Canvas = document.getElementById('circlesbg');
  var ctx = Canvas.getContext('2d');

  var circlestore = [];
  var lines = [];
  var R = 35;

  var resize = function() {
      Canvas.width = Canvas.clientWidth;
      Canvas.height = Canvas.clientHeight;
      circlestore = [];
  };
  window.addEventListener('resize', resize);
  resize();

  function circleonclick(e){
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, R, 0, 2 * Math.PI, false);
    ctx.fillStyle = "rgb(" + Math.random()*99 + ", 255, 200)";
    ctx.fill();
    //draw line
    circlestore.push([e.clientX, e.clientY]);
    if (circlestore.length > 1) {
      ctx.beginPath();
      ctx.moveTo(circlestore[circlestore.length-2][0],circlestore[circlestore.length-2][1]);
      ctx.lineTo(circlestore[circlestore.length-1][0],circlestore[circlestore.length-1][1]);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "#b5b5b5";
      ctx.stroke();
    }
  };
  function linemove(e){
    if (circlestore.length >= 1) {
      ctx.beginPath();
      ctx.moveTo(circlestore[circlestore.length-1][0],circlestore[circlestore.length-1][1]);
      ctx.lineTo(e.clientX, e.clientY);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "#b5b5b5";
      ctx.stroke();
    }

  }
  document.addEventListener("click", circleonclick, false);
  document.addEventListener("mousemove", linemove, false);

</script>
