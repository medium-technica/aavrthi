// this possible write on clean JS

$(fnInit())

function fnInit() {
	console.log("init");
	loadFile("തോമാശ്ലീഹ");
	loadFilesList();
}

function loadFilesList() {
	var fileNames = new Array();
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
	fetch("https://abraham198305.github.io/aavarthi/static/res/doc/titles.json")
		.then(response => response.text())
		.then(data => {
			// Do something with your data
			//console.log(data);
			/*
			$(data).find("td > a").each(function () {
				if (openFile($(this).attr("href"))) {
					fileNames.push($(this).attr("href"));
				}
			});
			*/
			fileNames = JSON.parse(data);
			console.log(fileNames);

			function openFile(file) {
				var extension = file.substr((file.lastIndexOf('.') + 1));
				switch (extension) {
					case 'jpg':
					case 'png':
					case 'gif': // the alert ended with pdf instead of gif.
					case 'zip':
					case 'rar':
					case 'pdf':
					case 'php':
					case 'doc':
					case 'docx':
					case 'xls':
					case 'xlsx':
						return true;
					default:
						return false;
				}
			};
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