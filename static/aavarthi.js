$(fnInit())

function fnInit() {
	console.log("init");
	//loadMenuList();
	//loadFile("തോമാശ്ലീഹ");
	loadFilesList();
}

function loadMenuList() {
	console.log("ladMenuList");
	$('#echo-file').html("<b>Appended text</b>");
}

function loadFilesList() {
	/*
	$.ajax({
		url: "https://abraham198305.github.io/aavarthi/",
		success: function (data) {
			$(data).find("td > a").each(function () {
				if (openFile($(this).attr("href"))) {
					fileNames.push($(this).attr("href"));
				}
			});
		}
	});
	*/
	fetch("https://abraham198305.github.io/aavarthi/static/res/doc/text.json")
		.then(response => response.json())
		.then(data => {
			articles = JSON.parse(data);
			console.log(articles);
		});
}

function loadFile(nameFile, event) {
	if (event) {
		event.preventDefault();
	}
	console.log(nameFile);
	$('.mdl-layout__drawer').attr("class", "mdl-layout__drawer");
	$('.mdl-layout__obfuscator').attr("class", "mdl-layout__obfuscator");
	fetch('https://abraham198305.github.io/aavarthi/static/res/doc/' + nameFile + '.html')
		.then(response => response.text())
		.then(data => {
			// Do something with your data
			//console.log(data);
			$('.mdl-layout-title').html(nameFile);
			$('#echo-file').html(data);
		});
}