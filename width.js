/**
QQ:1035417613
author:姚小白；
 */
$(document).ready(function() {
//获取屏幕宽度并动态赋值	

var winWidth = 0;
var winHeight = 0;
function findDimensions() //函数：获取尺寸
{
//获取窗口宽度
if (window.innerWidth)
winWidth = window.innerWidth;
else if ((document.body) && (document.body.clientWidth))
winWidth = document.body.clientWidth;
//获取窗口高度
if (window.innerHeight)
winHeight = window.innerHeight;
else if ((document.body) && (document.body.clientHeight))
winHeight = document.body.clientHeight;
//通过深入Document内部对body进行检测，获取窗口大小
if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
{
winHeight = document.documentElement.clientHeight;
winWidth = document.documentElement.clientWidth;
}
//结果输出至两个文本框


$("body").height(winHeight)
$("body").width(winWidth)
}

findDimensions();
//调用函数，获取数值
window.onresize=findDimensions;
//-->

})
$(document).ready(function() {
	var n=0
	//一个小小的恶作剧
	$("#apple").click(function(){
	
	var panel = $("#apple");
    box_left = ($(window).width() -  panel.width()) / 2;
    panel.css({'left': box_left,'position':'absolute'});
    for(var i=1; 4>=i; i++){
        panel.animate({left:box_left-(20-5*i)},50);
        panel.animate({left:box_left+2*(20-5*i)},50);
    }
	n=n+1
	if(n<3){
		setTimeout(function(){alert("很遗憾你什么都没抽中")},300);
		
	}else{
		setTimeout(function(){alert("你已经抽满3次了，下次再来试试")},300);
	}
	
	})
    
})

  
