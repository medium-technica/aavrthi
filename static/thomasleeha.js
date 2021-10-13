// this possible write on clean JS

$(fnInit())

function fnInit() {
 console.log("init");
 loadFile("തോമാശ്ലീഹ");
}

function loadFile(nameFile, event) {
 if (event) {
  event.preventDefault();
 }
 console.log(nameFile);
 $.get('static/res/doc/' + nameFile + '.html', function (data) {
  $('#echo-file').html(data);
  $('.mdl-layout-title').html(nameFile);
  $('.mdl-layout__drawer')[0].setAttribute("class", "mdl-layout__drawer");
  $('.mdl-layout__obfuscator')[0].setAttribute("class", "mdl-layout__obfuscator");
 });
}

