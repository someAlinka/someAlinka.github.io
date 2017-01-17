;(function(){
	var app = angular.module('accordion', []);
	app.controller("accordCtrl", [ '$scope', '$http', function($scope, $http){
		$scope.imgTitle = "Тестовый аккордеон";
		$http.get("accordion.json").then(function(obj){
			$scope.accordItems = obj.data;
		});
	}]);

	var AccordionModule =  (function(){
		var doc = document,
		crossEventType = "click",
		accordionLinks = doc.getElementsByClassName("accordion_link");

		if (typeof attachEvent !== 'undefined'){  //event for IE
			crossEventType = "onclick";
		}

		setTimeout(function() {
			doc.getElementsByTagName("body")[0].className += "show";
		}, 0);

		return {
			eventType: crossEventType,
			accordionCallback: function(obj){
				var liClassName = obj.parentNode.className;
			    if (liClassName.indexOf("current") > -1){
			    	obj.parentNode.className = liClassName.replace(" current","");
			    } else {
			    	for (var i = 0; i < accordionLinks.length ; i++) {
						accordionLinks[i].parentNode.className = accordionLinks[i].parentNode.className.replace(" current","");
				    }
				    obj.parentNode.className += " current";
			    }
			}
		};
	})();
	
	accordionList.addEventListener(AccordionModule.eventType, function(event){
		if(event.target.tagName == "A") AccordionModule.accordionCallback(event.target);
	});
}());