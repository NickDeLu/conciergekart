/**
 * 
 */

function checkPasswords(){
	var password = document.forms['form']['password'].value;
	var confirmPassword = document.forms['form']['confirmPassword'].value;
	if(password.localeCompare(confirmPassword) == 0){
		return true;
	}else{
		document.getElementById("error").innerHTML 
			= "Passwords Do Not Match";
		return false;
	}
	
}