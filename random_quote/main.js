console.log("Hello World !");
var url = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous";
var appendQuote = function(data) {
  console.log(data);
  $(".quote").html(data.quote);
  $(".author").html("— " + data.author);
  $("#twitterShare").attr("href", 'https://twitter.com/intent/tweet?text=' + " '" + data.quote + "' " + data.author);
};

$(document).ready(function(){
  $.ajax({
    headers : {
      "X-Mashape-Key":"LRDCx0HiQmmshMRxLdBr1DofZckdp1aSg5WjsnO7DiL6pK8f4O"
    },
    dataType : "json",
    url : url,
    type : 'GET',
    success: appendQuote
  });
});

$("#newQuote").on("click", function(){
  $.ajax({
    headers : {
      "X-Mashape-Key":"LRDCx0HiQmmshMRxLdBr1DofZckdp1aSg5WjsnO7DiL6pK8f4O"
    },
    dataType : "json",
    url : url,
    type : 'GET',
    success: appendQuote
  });
});
