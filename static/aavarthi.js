$(fnInit())

var ListFiles = [];
var Articles;

function fnInit() {
	console.log("init");
	loadFilesList();
}

function loadFilesList() {
	fetch("https://abraham198305.github.io/aavarthi/static/res/doc/text.json")
		.then(response => response.json())
		.then(data => {
			//console.log(data);
			Articles = data;
			$.each(data, function (key, data) {
				ListFiles.push(key);
				$('#ListMenu').append(`<a id="article" onclick="loadFile('` + key + `')" class=" mdl-navigation__link "> <i class=" material-icons ">library_books</i>'` + key + `'</a>`);
			})
			loadFile(ListFiles[0]);
		});
}

function loadFile(nameFile, event) {
	if (event) {
		event.preventDefault();
	}
	console.log(nameFile);
	$('.mdl-layout__drawer').attr("class", "mdl-layout__drawer");
	$('.mdl-layout__obfuscator').attr("class", "mdl-layout__obfuscator");
	$('.mdl-layout-title').html(nameFile);
	$('#echo-file').html(Articles[nameFile]);
}