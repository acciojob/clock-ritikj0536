//your JS code here. If required.
let TimerDisplay= document.getElementById("timer");
let currentDate =new Date();
set interval(S
	function (){
		currentDate=new Date();
		TimerDisplay.innerHTML=currentDate.toLocaleString()
	},1000
)