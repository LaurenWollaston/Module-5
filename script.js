$(window).bind("load", function () {
const svbtn = document.querySelector('.buttonwrapper');

$(function () {
 svbtn.addEventListener("click", (event) =>{
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  var maniphour = event.target.id;
  console.log(maniphour);
  localStorage.setItem(maniphour,document.getElementById("txt"+maniphour).value);
  });
});

var crntime=dayjs().format('H');

for (i=9;i<18;i++){
  if (i<crntime){
    var mnshour = ('hour-'+i)
    document.getElementById(mnshour).className="row time-block past"
  };
  if (i==crntime){
    var mnshour = ('hour-'+i)
    document.getElementById(mnshour).className="row time-block present"
  };
  if (i>crntime){
    var mnshour = ('hour-'+i)
    document.getElementById(mnshour).className="row time-block future"
  };
  if (i>18 || i<9){
    document.getElementById(mnshour).className="row time-block past"
  };
}

getday();
setInterval(getday,1000);
function getday(){
  
  var date=dayjs().format('dddd, MMMM Do');
  document.getElementById('currentDay').innerHTML = date;
};

function initformdata(){
  for(i=9;i<18;i++){
    var curhourval = localStorage.getItem(i);
    document.getElementById("txt"+i).value=curhourval;
  }
}

initformdata();
});