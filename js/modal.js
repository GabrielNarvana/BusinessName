var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var btn1 = document.getElementById("myBtn1");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.classList.add('active');
};

btn1.onclick = function() {
  modal.classList.add('active');
};

span.onclick = function() {
  modal.classList.remove('active')
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('active')
  }
};

var tWidth = "1125px";
var tHeight = "24px";
var tcolour = "#fc0146";
var fontfamily = "arial";
var moStop = false;
var tSpeed = 6;

var content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

var cps = -tSpeed;
var aw, mq;
var fsz = parseInt(tHeight) - 4;
function startticker() {
  if (document.getElementById) {
    var tick =
      '<div style="position:relative;width:' +
      tWidth +
      ";height:" +
      tHeight +
      ";overflow:hidden;background-color:" +
      tcolour +
      '"';
    if (moStop) tick += ' onmouseover="cps=0" onmouseout="cps=-tSpeed"';
    tick +=
      '><div id="mq" style="position:absolute;right:0px;top:0px;font-family:' +
      fontfamily +
      ";font-size:" +
      fsz +
      'px;white-space:nowrap;"></div></div>';
    document.getElementById("ticker").innerHTML = tick;
    mq = document.getElementById("mq");
    mq.style.right = 10 + parseInt(tWidth) + "px";
    mq.innerHTML = '<span id="tx">' + content + "</span>";
    aw = document.getElementById("tx").offsetWidth;
    lefttime = setInterval("scrollticker()", 50);
  }
}
function scrollticker() {
  mq.style.right =
    parseInt(mq.style.right) > -10 - aw
      ? (mq.style.right = parseInt(mq.style.right) + cps + "px")
      : parseInt(tWidth) + 30 + "px";
}
window.onload = startticker;