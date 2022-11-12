const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click" , ()=>{
	hamburger.classList.toggle("active");
	menu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=> n.addEventListener("click", ()=>{
	hamburger.classList.remove("active");
	menu.classList.remove("active");
}
))

function validateForm(){
	let form = document.getElementById('form');
	let nameC = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;
	let textEmail = document.getElementById('text-email');
	let textName = document.getElementById('text-name');
	let textMessage = document.getElementById('text-message');
	let formText = document.getElementById('form-text')
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	if(nameC != ""){
		form.classList.add("valid");
		form.classList.remove("invalid");
		textName.innerHTML = "";
	}if(nameC ==""){
		form.classList.remove("valid");
		form.classList.remove("invalid");
		textName.innerHTML = "Name is required";
		textName.style.color = "#ff0000"
	}
	if(email.match(pattern)){
		form.classList.add("valid");
		form.classList.remove("invalid");
		textEmail.innerHTML = "";
	}else{
		form.classList.remove("valid");
		form.classList.add("invalid");
		textEmail.innerHTML = "Enter a valid email address";
		textEmail.style.color = "#ff0000"
	}
	if(email == ""){
		form.classList.remove("valid");
		form.classList.remove("invalid");
		textEmail.innerHTML = "Email is required";
		textEmail.style.color = "#ff0000"
	}
	if(message != ""){
		form.classList.add("valid");
		form.classList.remove("invalid");
		textMessage.innerHTML = "";
	}if(message == ""){
		form.classList.remove("valid");
		form.classList.remove("invalid");
		textMessage.innerHTML = "Message is required";
		textMessage.style.color = "#ff0000"
	}else{
		form.addEventListener('submit', (e) => {
		formText.innerHTML = "Thanks for contacting me!";
		formText.style.color = "#00ff00"
	})
	}
}