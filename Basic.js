function myFunction() {
	var x =document.getElementById("myTopnav");

	if (x.className === "menuarea"){
		x.className += " responsive";
	}else{ 
		x.className = "menuarea";
	}
}