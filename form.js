var saveToLocalStorage = function() {
	var the_form = document.getElementById('details_form');
	var elements = the_form.elements;

	var email = document.getElementById('email').value.toString();
	if (!validateEmail(email))
	{
	    document.getElementById('error_message').innerHTML = 'Please insert a valid email address';
	} else {
		document.getElementById('error_message').innerHTML = '';
		setTimeout(function(){
			local_storage = window.localStorage;

			for(var i = 0 ; i < elements.length ; i++){
            	var item = elements.item(i);
        		local_storage.setItem(item.name, item.value);
    		}

    		document.getElementsByClassName('container')[0].style.display = 'none';
			var thank_you = document.createElement("label");
			thank_you.innerHTML = 'Form saved in local storage, thank you, bye...'
			document.body.appendChild(thank_you);


	    },0);
	}

	return false;			
}

var validateEmail = function(email) {
	//source for regex: https://www.sitepoint.com/javascript-validate-email-address-regex/
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
	return re.test(email);
}