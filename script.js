function updateOutput()
{
	$("iframe").contents().find('html').html("<html><head><style type='text/css'>"+ $("#cssPanel").val() +"</style></head><body>"+$("#htmlPanel").val()+"</body></html>");

	document.getElementById('outputPanel').contentWindow.eval($("#javaScriptPanel").val());	
}

$(".toggleButton").hover(function()
{
	    // $(this).css("background-color","grey");
	    $(this).addClass('highlightButton');
},function()
{
		    // $(this).css("background-color","#EEEEEE");
		 $(this).removeClass('highlightButton');
});

$(".toggleButton").click(function()
{
     $(this).toggleClass('active');

     $(this).removeClass('highlightButton');
 
	 var PanelId=$(this).attr("id") + "Panel";

	 $("#"+PanelId).toggleClass("hidden"); 
     
     var numberOfActivePanels=(4 - $(".hidden").length); 

     $(".panel").width(($(window).width()/numberOfActivePanels)-10);
});

 $(".panel").height($(window).height() - $("#header").height());

 $(".panel").width(($(window).width()/2)-10);

updateOutput();

		$("textarea").on('change keyup paste', function() {	
		   updateOutput();		
		});	