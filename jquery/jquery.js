

/*
$(document).ready(function(){
$("h1").addClass("h1style h1sizing");
$("h1").removeClass("h1sizing");
$("h1").text("hyii!!");

})
*/
$("input").keypress(function(event){
 $("h1").text(event.key);

});
$("h1").on("mouseover",function(){
    $("h1").css("color","purple");
    
})

