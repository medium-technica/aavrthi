$(fnInit())

var ListFiles = [];
var Articles;

function fnInit() {
	console.log("init");
	loadFilesList();
}

function loadFilesList() {
	fetch("static/res/doc/text.json")
		.then(response => response.json())
		.then(data => {
			//console.log(data);
			Articles = data;
			i = 0;
			$.each(data, function (key, data) {
				ListFiles.push(key);
				$('#ListMenu').append(`<a href="#top" onclick="loadFile('` + key + `',` + i + `)" class=" mdl-navigation__link ">` + key + `</a>`);
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
	const urlSearchParams = new URLSearchParams(window.location.search);
	const params = Object.fromEntries(urlSearchParams.entries());
	indexFile = parseInt(params["a"]);
	if (indexFile > 0)
		indexFile--;
	if (ListFiles.length > 0) {
		//console.log(ListFiles[indexFile]);
		loadFile(ListFiles[indexFile], indexFile);
	}
}

function loadNext() {
	console.log("Next");
	const urlSearchParams = new URLSearchParams(window.location.search);
	const params = Object.fromEntries(urlSearchParams.entries());
	indexFile = parseInt(params["a"]);
	if (indexFile < ListFiles.length - 1)
		indexFile++;
	if (ListFiles.length > 0) {
		//console.log(ListFiles[indexFile]);
		loadFile(ListFiles[indexFile], indexFile);
	}
}

function loadFile(nameFile, index, event) {
	if (event) {
		updateevent.preventDefault();
	}
	console.log(nameFile, index, ListFiles.length);
	$('.mdl-layout__drawer').attr("class", "mdl-layout__drawer");
	$('.mdl-layout__obfuscator').attr("class", "mdl-layout__obfuscator");
	//$('.mdl-layout-title').html(nameFile);
	//$('title').html(nameFile);
	$('.page-title').html(nameFile);
	$('.page-content').html(Articles[nameFile]);
	history.pushState({}, null, "/aavarthi/?a=" + index);
	if (index == 0) {
		$('.mdl-paging__prev').css("visibility", "hidden");
	} else {
		$('.mdl-paging__prev').css("visibility", "visible");
	}
	if (index == ListFiles.length - 1) {
		$('.mdl-paging__next').css("visibility", "hidden");
	} else {
		$('.mdl-paging__next').css("visibility", "visible");
	}
}
