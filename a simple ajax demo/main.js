$(document).ready(function(){

	var ideaBefore = "<div class='idea'>";
	var ideaAfter = "</div>"
	$("#idea-btn").on("click",function(){
		$.get("server.php",{name:$("#idea-text").val()},function(data){
			// $("#result").text(data);
			// $("#result").append('Some text <a href="#">这里是一个链接</a>chaba ');
			// $("#body").style.display = "block" ;
			// $("#body").text(data);
			$("#body").prepend(ideaBefore + data + ideaAfter);
		});
	});
});