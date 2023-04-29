function register() {
	document.querySelector('.login-container').classList.add('hidden');
	document.querySelector('.register-container').classList.remove('hidden');
}

function login() {
	document.querySelector('.register-container').classList.add('hidden');
	document.querySelector('.login-container').classList.remove('hidden');
}


function addData(){
	var email = document.getElementById('registeremail').value;
	var pass = document.getElementById('registerpwd').value;


	localStorage.setItem('userEmail',email);
	localStorage.setItem('userPwd',pass);
}

function checkData(){
	var enterEmail = document.getElementById('loginemail').value;
	var enterPwd = document.getElementById('loginpwd').value;


    var getEmail = localStorage.getItem('userEmail');
	var getPwd = localStorage.getItem('userPwd');


   
  if (enterEmail === getEmail &&    enterPwd === getPwd) {
    alert("Login successful!");
    window.location.href = "index.html"; // Redirect to success page
  } else {
    alert("Invalid username or password.");
  }
}

