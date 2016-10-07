;(function(){

	var d = document,
		accLinks = d.getElementsByClassName("acc_link");

	setTimeout(function() {
		d.getElementsByTagName("body")[0].className += "show";
	}, 0);
	
	var accCallback = function() {
	    var liClassName = this.parentNode.className;
	    if(liClassName.indexOf("current") > -1){
	    	this.parentNode.className = liClassName.replace(" current","");
	    } else {
	    	for (var i = 0; i < accLinks.length ; i++) {
				accLinks[i].parentNode.className = accLinks[i].parentNode.className.replace(" current","");
		    }
		    this.parentNode.className += " current";
	    }
	};

	for (var i = 0; i < accLinks.length ; i++) {
		if(typeof addEventListener !== 'undefined'){
			accLinks[i].addEventListener('click', accCallback);
		} else if (typeof attachEvent !== 'undefined'){
			accLinks[i].addEventListener('onclick', accCallback);
		} else {
			accLinks[i]['onclick'] = accCallback;
		}
	}

}());