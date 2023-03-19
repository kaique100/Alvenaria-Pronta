window.onscroll = function(){
	
	let top = window.pageYOffset || document.documentElement.scrollTop;
	
	if(top > 10){
		console.log(top);
		document.getElementById("navbar").classList.add("menu-fixo");

		
	   }else{

		   console.log(top);
		   document.getElementById("navbar").classList.remove("menu-fixo");
	   }
	   
	
		
}
