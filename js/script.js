;(function(){

	var d = document,
		accLinks = d.getElementsByClassName("acc_link");

	var accCallback = function() {
	    var liClassName = this.parentNode.className;
	    if(liClassName.indexOf("current") > -1){
	    	this.parentNode.className = liClassName.replace(" current","");
	    } else {
	    	Array.from(accLinks).forEach(function(element) {
				element.parentNode.className = element.parentNode.className.replace(" current","");
		    });
		    this.parentNode.className += " current";
	    }
	};

	Array.from(accLinks).forEach(function(element) {
		element.addEventListener('click', accCallback);
    });

}());