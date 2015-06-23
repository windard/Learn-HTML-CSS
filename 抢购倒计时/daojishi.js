var BTN       = document.getElementById('btn');

var endyear   = 2015;
var endmonth  = 6;
var endday    = 23;
var endhour   = 17;
var endminute = 26;
var endsecond = 00;

function fun(){
	alert("hello world");
}


var daojishi = function()
{
 var endDate   =new Date(endyear,endmonth-1,endday,endhour,endminute,endsecond);
 var now=new Date();
 var newDate=endDate-now;
 var oft=Math.round(newDate/1000);
 var ofd=parseInt(oft/3600/24);
 var ofh=parseInt((oft%(3600*24))/3600);
 var ofm=parseInt((oft%3600)/60);
 var ofs=oft%60;
 if(ofs<0){
 	BTN.innerHTML='<br />抢购开始！';
 	BTN.onclick= fun ;
 	return;};
 setTimeout('daojishi()',1000);

 
 BTN.innerHTML='倒计时：</br> '+ofd+' 天 '+ofh+' 时 <br/>'+ofm+' 分 '+ofs+' 秒 ';
};
daojishi();
