console.log("made with love")
// document.querySelector("#extCheckPage").style.display = "none";
// document.querySelector(".flex-container").style.display = "none";


let mainWrapper = document.querySelector(".mainWrapper");


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("emailBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  console.log("button clicked emalBtn")
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyd2l8Nn4X1BMqAOAMPMtdKQfgfap--Q4owxxzuvW-4K3wEQIgNYktMXqeq3tKJfCZU/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e=>{
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
	.then(response => alert ("You have successfully subscribed for email reminder"))
	.catch(error => console.error('Error!', error.message))
})


document.querySelector("#btnTry").addEventListener("click", ()=>{
	window.location.href = 'install.html'
	
	console.log("button clicked: btnTry")
});


document.querySelector("#cardBtn").addEventListener("click", ()=>{
	
	
	window.location.href = 'demoPage.html'
	
	
	console.log("button clicked: cardBtn")
});



