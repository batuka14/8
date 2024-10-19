var time=document.querySelector('.time');
var year1=document.querySelector('.year');
function clock(){
    var now=new Date();
    var hours=now.getHours();
    var minutes=now.getMinutes();
    var seconds=now.getSeconds();
    var day=now.getDay();
    var date=now.getDate();
    var month=now.getMonth();
    var year=now.getFullYear();
	var dayNames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var monthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];
	h=hours % 12 || 12;
	m=minutes<10 ? '0'+minutes : minutes;
	s=seconds<10 ? '0'+seconds : seconds;
	d=date<10 ? '0'+date : date;
	var l=hours < 12 ? 'AM' : 'PM';
	time.innerHTML=h+':'+m+':'+s+''+l;
	year1.innerHTML=dayNames[day]+','+monthNames[month]+''+date+','+year;
}
clock();
setInterval(clock,1000);