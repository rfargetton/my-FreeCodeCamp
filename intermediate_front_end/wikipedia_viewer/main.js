console.log('Hello Wikipedia Viewer');

var appendResults = function (data) {
	console.log("query OK");
  for (var page in data.query.pages) {
    var thisPage = data.query.pages[page];
    var li = $('<li>', {
      class: 'result'
    }).appendTo("#results");
    var a = $('<a>', {
      href: thisPage.fullurl
    }).appendTo(li);
    var h2 = $('<h2>', {
      text: thisPage.title
    }).appendTo(a);
    var p = $('<p>', {
      text: thisPage.extract
    }).appendTo(a);
  }
};

$("#search-bar").submit(function(event){
  event.preventDefault();
  $("#results").empty();
  var searchVal = $("#search-field").val();
  $.ajax({
    headers : {
      "Access-Control-Allow-Origin":"*"
    },
    url : "http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&list=&generator=search&exsentences=1&exlimit=max&exintro=1&explaintext=1&inprop=url&gsrsearch=" + searchVal,
		type : "GET",
		dataType : "jsonp",
    success: appendResults
  });
  localStorage.clear();
});

$("#random-button").click(function(event){
	window.location = "https://en.wikipedia.org/wiki/Special:Random";
});
