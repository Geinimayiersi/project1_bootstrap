$("#box1").hover(function(){
			$("#box2").toggle();
});
$("#box2").mouseenter(function(){
	$("#box2").css("display","block")
});
$("#box2").mouseleave(function(){
	$("#box2").css("display","none")
});
$("#buts1").click(function(){
	$("#my_ipt").removeClass("show");
	if($("#ssou").has("d-sm-none"))
})
