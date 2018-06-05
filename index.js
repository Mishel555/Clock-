//
// function myFunc(){
//   var sec;
//   var min;
//   var hour;
//   var div = document.getElementsByTagName('div')[0];
//
//     sec=0;
//     min=0;
//     hour=0;
//     setInterval(function() {
//     	sec++;
//
// 	    if(sec == 60){
// 	      sec=0;
// 	      console.log(sec);
// 	      min++;
// 	    }
// 	    if(min==60){
// 	      min=0;
// 	      hour++;
// 	    }
//
// 	    if(hour == 24) {
// 	    	hour = 0;
// 	    }
//
// 	    div.innerHTML = hour + '' + ':' + ''+ min + ''+':'+''+sec;
//     },1000)
// }
// // myFunc()
// function func() {
//   var div = document.getElementById('divul');
//   div.style.width = '400px';
//   div.style.height = '400px';
//   div.style.backgroundColor='red';
//   let p = document.createElement('p');
//   let text = 'Hello World';
//   p.innerHTML = text;
//   div.appendChild(p);
//   div.onmouseover = function() {
//     div.style.borderRadius = '50%'
//   }
// }
window.onload = function() {
let secCnt;
let minCnt;
let hrCnt;
let timer = setInterval(function() {
  let date = new Date();
  // console.log(date);
  // secCnt =  date.getSeconds();
  // minCnt = date.getMinutes();
  // hrCnt = date.getHours();
  // console.log(date.getMinutes());

  // let sec = date.getSeconds() * 6;
  // let min = date.getMinutes() * 6;
  // let hour = date.getHours();
  let ss = date.getSeconds();
  let mm = date.getMinutes();
  let hh = date.getHours();
  let sec = ss * 6;
  let min = mm * 6;
  let hour = hh;
  // console.log(hour);
  let electroClock = document.getElementById('electroClock');
  let time = [hh,mm,ss];
  for(let i in time){
    if(time[i]<10){
      time[i]='0'+time[i];
    }
  }
  console.log(time);
  electroClock.innerHTML = time[0] + ':' + time[1] + ':' + time[2];

  if(hour > 12){
  hour=hour-12;
}
// console.log(hour);
  hour =  (hour+date.getMinutes()/60) * 30
  // hour = hour * 30
document.getElementById('sec').style.transform = `rotate(${sec}deg)`;
document.getElementById('min').style.transform = `rotate(${min}deg)`;
document.getElementById('hour').style.transform = `rotate(${hour}deg)`;

},1000)
// clearInterval(timer)


}
