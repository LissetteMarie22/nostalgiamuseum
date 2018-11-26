$(document).ready(function(){
var showChar = 100;
var ellipseText=" . . .";
var moreText= "more";
var lessText= "less";
$('.comment').each(function(){
var content = $(this).html();
var
if(content.length > showChar){
var c = content.substr(0,showChar);
var h = content.substr(showChar-1, content.length - showChar);
var html= c + '<span class="commentellipses">' + ellipseText + '&nbsp;</span>';
$(this).html(html);
}
});
$(".commentlink").click(function{
if($(this).hasClass("less")){
$(this).removeClass('less');
$(this).html(moretext);

}
else{
$(this).addClass("less");
$(this).html(lesstext);
}
$(this).parent().prev().toggle();
return false;
});
});