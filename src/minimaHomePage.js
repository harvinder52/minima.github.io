console.log("made with love")
// document.querySelector("#extCheckPage").style.display = "none";
// document.querySelector(".flex-container").style.display = "none";


let mainWrapper = document.querySelector(".mainWrapper");


document.querySelector("#btnTry").addEventListener("click", ()=>{
	window.location.href = 'install.html'
	
	mainWrapper.style.display = "none";
	document.querySelector("#extCheckPage").style.display = "initial";
	console.log("button clicked: btnTry")
});


document.querySelector("#cardBtn").addEventListener("click", ()=>{
	
	
	document.querySelector("#extCheckPage").style.display = "none";
	document.querySelector(".flex-container").style.display = "initial";
	console.log("button clicked: cardBtn")
});


