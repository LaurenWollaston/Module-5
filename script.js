// Makes sure the html is fully loaded before javascript executes anything.
$(window).bind("load", function () {
const svbtn = document.querySelector('.buttonwrapper');

//Saves the value of the textinput when the save button is clicked.
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
// Sets the color of the blocks based on the current hour
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
  if (i>18 || i<8){
    document.getElementById(mnshour).className="row time-block past"
  };
}

//Gets the current time and day, updates the clock every second
getday();
setInterval(getday,1000);
function getday(){
  
  var date=dayjs().format('dddd, MMMM Do');
  document.getElementById('currentDay').innerHTML = date;
};

//loads values saved in localstorage.
function initformdata(){
  for(i=9;i<18;i++){
    var curhourval = localStorage.getItem(i);
    document.getElementById("txt"+i).value=curhourval;
  }
}
initformdata();
});