;(function(){

	var doc = document,
		accordionLinks = doc.getElementsByClassName("accordion_link");

	setTimeout(function() {
		doc.getElementsByTagName("body")[0].className += "show";
	}, 0);
	
	var accordionCallback = function() {
	    var liClassName = this.parentNode.className;
	    if(liClassName.indexOf("current") > -1){
	    	this.parentNode.className = liClassName.replace(" current","");
	    } else {
	    	for (var i = 0; i < accordionLinks.length ; i++) {
				accordionLinks[i].parentNode.className = accordionLinks[i].parentNode.className.replace(" current","");
		    }
		    this.parentNode.className += " current";
	    }
	};

	for (var i = 0; i < accordionLinks.length ; i++) {
		if(typeof addEventListener !== 'undefined'){
			accordionLinks[i].addEventListener('click', accordionCallback);
		} else if (typeof attachEvent !== 'undefined'){
			accordionLinks[i].addEventListener('onclick', accordionCallback);
		} else {
			accordionLinks[i]['onclick'] = accordionCallback;
		}
	}

}());