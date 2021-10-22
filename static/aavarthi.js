$(fnInit())

var ListFiles = [];
var Articles;
var indexFile;

function fnInit() {
	console.log("init");
	loadFilesList();
}

function loadFilesList() {
	var i = 0;
	fetch("static/res/doc/text.json")
		.then(response => response.json())
		.then(data => {
			//console.log(data);
			Articles = data;
			$.each(data, function (key, data) {
				ListFiles.push(key);
				$('#ListMenu').append(`<a href="#top" onclick="loadFile('` + key + `',` + i + `)" class=" mdl-navigation__link ">` + key + `</a>`);
				//$('#ListMenu').append(`<a href="?a=` + i + `" class=" mdl-navigation__link ">` + key + `</a>`);
				i++;
			})
			const urlSearchParams = new URLSearchParams(window.location.search);
			const params = Object.fromEntries(urlSearchParams.entries());
			indexFile = parseInt(params["a"]);
			//console.log(indexFile);
			if (indexFile >= 0 && ListFiles.length > 0) {
				//console.log(ListFiles[indexFile]);
				loadFile(ListFiles[indexFile], indexFile);
			} else {
				loadFile(ListFiles[0], 0);
			}
		});
}

function loadPrev() {
	console.log("Prev");
	if (indexFile > 0)
		indexFile--;
	if (ListFiles.length > 0) {
		//console.log(ListFiles[indexFile]);
		loadFile(ListFiles[indexFile], indexFile);
	}
}

function loadNext() {
	console.log("Next");
	if (indexFile < ListFiles.length - 1)
		indexFile++;
	if (ListFiles.length > 0) {
		//console.log(ListFiles[indexFile]);
		loadFile(ListFiles[indexFile], indexFile);
	}
}

function loadFile(nameFile, i, event) {
	if (event) {
		//event.preventDefault();
	}
	//console.log(nameFile);
	$('.mdl-layout__drawer').attr("class", "mdl-layout__drawer");
	$('.mdl-layout__obfuscator').attr("class", "mdl-layout__obfuscator");
	$('.mdl-layout-title').html(nameFile);
	$('title').html(nameFile);
	$('.page-content').html(Articles[nameFile]);
	history.pushState({}, null, "/aavarthi/?a=" + i);
	if (indexFile == 0) {
		$('.mdl-paging__prev').prop("hidden", true);
	} else {
		$('.mdl-paging__prev').prop("hidden", false);
	}
	if (indexFile == ListFiles.length - 1) {
		$('.mdl-paging__next').prop("hidden", true);
	} else {
		$('.mdl-paging__next').prop("hidden", false);
	}
}
