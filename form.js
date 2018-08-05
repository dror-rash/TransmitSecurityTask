var saveToLocalStorage = function() {
	var the_form = document.getElementById('details_form');
	var elements = the_form.elements;

	//validate email
	//validateEmail

	setTimeout(function(){
		local_storage = window.localStorage;
		local_storage.setItem('name', elements.name);
		local_storage.setItem('email', elements.email);
		local_storage.setItem('subject', elements.subject);
		local_storage.setItem('comment', elements.comment);

		the_form.style.display = 'none';

	},0)
	
}

//source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}