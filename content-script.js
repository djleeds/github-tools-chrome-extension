$(document).ready(function() {
	var isWideModeActivated = false;
	$("<button id='activate-wide-mode' style='display:none' accesskey='k'>wide-mode</button>").appendTo($("body"));
		
	$("#activate-wide-mode").click(function(event) {
		isWideModeActivated = !isWideModeActivated;
		if(isWideModeActivated) {
			$("body").addClass("wide-mode-activated");
		} else {
			$("body").removeClass("wide-mode-activated");
		}		
	});
});
