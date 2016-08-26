$(document).ready(function() {
	function endsWith(str, ending) {
    return str.indexOf(ending, str.length - ending.length) !== -1;
	}

	var isWideModeActivated = false;
	$("<button id='activate-wide-mode' style='display:none' accesskey='k'>wide-mode</button>").appendTo($("body"));
	$("<button id='list-pr-tests' style='display:none' accesskey='l'>list-pull-request-test-status</button>").appendTo($("body"));

	$("#activate-wide-mode").click(function(event) {
		isWideModeActivated = !isWideModeActivated;
		if(isWideModeActivated) {
			$("body").addClass("wide-mode-activated");
		} else {
			$("body").removeClass("wide-mode-activated");
		}
	});

  $("#list-pr-tests").click(function(event) {
		console.log("Let's check out the testing situation...");
		var titles = $("div.file-info span.user-select-contain")
		  .map(function(index, element) {
		      var tokens = $(element).prop("title").split("/");
		      return tokens[tokens.length - 1];
		  });

		var classesWithTests = [];
		var classesWithoutTests = [];

		for(var i = 0; i < titles.length; i++) {
		    var title = titles[i];
		    if(!endsWith(title, "Test.java") && !endsWith(title, "IT.java")) {
		        var expectedTest = title.replace(".java", "Test.java");
		        if($.inArray(expectedTest, titles) !== -1) {
		            classesWithTests.push(title);
		        } else {
		            classesWithoutTests.push(title);
		        }
		    }
		}

		console.info("The following classes do have tests\n");
		for(var i = 0; i < classesWithTests.length; i++) {
		    console.info("\t" + classesWithTests[i]);
		}

		console.warn("The following classes do NOT have tests\n");
		for(var i = 0; i < classesWithoutTests.length; i++) {
		    console.warn("\t" + classesWithoutTests[i]);
		}
	});
});
