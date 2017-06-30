console.log("Hello Twicth App !")
var channels = ["ESL_SC2", "Brunofin", "comster404",  "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];


function getChannel(data){
	console.log(data);
}
channels.forEach(function(channel){
	$.ajax({
		url : "https://wind-bow.gomix.me/twitch-api/streams/" + channel,
		type : "GET",
		dataType : "jsonp",
		success : function(data){
			console.log(data);
			var status;
			if (data.stream === null){
				status = "offline";
			} else {
				status = "online";
			}
			$.ajax({
				url : "https://wind-bow.gomix.me/twitch-api/channels/" + channel,
				type : "GET",
				dataType : "jsonp",
				success : function(data){
					console.log(data);
					var div = $("<div>", {
						class: "channel " + status
					}).appendTo("#channels");
					if (data.logo){
						var img = $("<img>", {
							src: data.logo,
							class: "avatar"
						}).prependTo(div);
					} else {
						var img = $("<img>", {
							src: "http://via.placeholder.com/60x60",
							class: "avatar"
						}).prependTo(div);
					}
					var div2 = $('<div>', {class:"info"}).appendTo(div);
			    var h2 = $('<h2>').appendTo(div2);
					var a = $('<a>', {
						text: channel,
						href: data.url
					}).appendTo(h2);

					if (status === "online"){
						var p = $("<p>", {
							text: "currently playing " + data.game
						}).appendTo(div2);
						var div3 = $("<div>", {
							class:"active-dot"
						}).appendTo(div);
					}
				},
				error : function(err){
					console.log(err);
				}
			});
		},
		error : function(err){
			console.log(err);
		}
	});
});

$("#online").on("click", function(){
	$(".online").removeClass("hidden");
	$(".offline").addClass("hidden");
});
$("#offline").on("click", function(){
	$(".offline").removeClass("hidden");
	$(".online").addClass("hidden");
});
$("#all").on("click", function(){
	$(".offline, .online").removeClass("hidden");
});
$("button").on("click", function(){
	$(".selected").toggleClass("selected");
	$(this).toggleClass("selected");
});
