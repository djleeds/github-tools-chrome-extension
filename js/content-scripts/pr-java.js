$(document).ready(function() {
    function startsWith(str, beginning) {
        return str.indexOf(beginning, 0) === 0;
    }

    function endsWith(str, ending) {
        return str.indexOf(ending, str.length - ending.length) !== -1;
    }

    var $files = $("div.file-info a");

    console.log($files);

    var $sourceFiles = $files.filter(function(index, element) {
        return startsWith($(element).prop("title"), "src/main/");
    });

    console.log($sourceFiles);

    var $testFiles = $files.filter(function(index, element) {
        return startsWith($(element).prop("title"), "src/test/");
    });

    console.log($testFiles);

    $sourceFiles.each((i,e) => {
        var $e = $(e);
        var expectedTitle = $e.prop("title").replace(/^src\/main\//, 'src/test/').replace(/\.java$/, 'Test.java');

        console.log(expectedTitle);

        var $matchingTest = $testFiles.filter(function(index, element) {
            return $(element).prop("title") === expectedTitle;
        });

        console.log($matchingTest);

        var id = $matchingTest.closest(".file").prop("id");

        console.log(id);

        if(id === undefined) {
            $("<span class='file-link-label untested'>No Test</span>").insertAfter($e);
        } else {
            $("<a class='file-link-label test-file-link' href='#" + id + "'>Test</a>").insertAfter($e);
        }
    });

    $testFiles.each((i,e) => {
        var $e = $(e);
        var expectedTitle = $e.prop("title").replace(/^src\/test\//, 'src/main/').replace(/Test\.java$/, '.java');

        console.log(expectedTitle);

        var $matchingMain = $sourceFiles.filter(function(index, element) {
            return $(element).prop("title") === expectedTitle;
        });

        console.log($matchingMain);

        var id = $matchingMain.closest(".file").prop("id");

        console.log(id);

        if(id !== undefined) {
            $e.append("<a class='file-link-label main-file-link' href='#" + id + "'>Main</a>");
        }
    });


    //document.getElementById(id).scrollIntoView();



//<a name="diff-369a5f76f4651baa8657a3e649f7e58d"></a>

    /*
    $("<button id='list-pr-tests' style='display:none' accesskey='l'>list-pull-request-test-status</button>").appendTo($("body"));

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
    */
});
