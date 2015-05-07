var dataUrl = "data/sf.json"

function getData(callback){
	$.getJSON(dataUrl, callback);
}

function lookupTranslation(phrase,lang){
	if (sfBED.phrases[phrase][lang]){
		return sfBED.phrases[phrase][lang]
	}else {
		return sfBED.phrases[phrase].en
	}
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
		 var translation = lookupTranslation(value.dataset.i18n,langValue);
		 $(this).text( '( '+translation+' )' );
	})
});
