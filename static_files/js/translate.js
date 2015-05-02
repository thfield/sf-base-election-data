var dataUrl = "data/sf.json"

function getData(callback){
	$.getJSON(dataUrl, callback);
}

function getLang(obj,lang){
	if (obj.name_i18n){
		if (sfBED.phrases[obj.name_i18n][lang]){
			return sfBED.phrases[obj.name_i18n][lang]
		}else {
			return sfBED.phrases[obj.name_i18n].en
		}
	}else return obj.name
}

var sfBED = {};

getData(function(json){
	sfBED = json;
	//console.log("data loaded");
});

var translatePhrases = $("span[data-i18n]");
var langValue ="en";

$( "#i18n-selector" ).change( function(){
	langValue = $( "#i18n-selector" ).val();
  translatePhrases.each(function(i,value){
		var objKey = getKey(value.dataset.i18n);
		var translation = getLang(sfBED[objKey][value.dataset.i18n],langValue);
		$(this).text(translation);
	})
});

function getKey(phrase){
	var re = /(\w+?)_/;
	switch (re.exec(phrase)[0]){
		case "body_":
			return "bodies";
			break;
		case "category_":
			return "categories";
			break;
		case "office_":
			return "offices";
			break;
		case "district_":
			return "district";
			break;
		};
}
