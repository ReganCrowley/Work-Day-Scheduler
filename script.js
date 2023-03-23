// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
	$(".saveBtn").click(function(){
		var content= $(this).siblings(".description").val()
		var time=$(this).parent().attr("id")
		localStorage.setItem(time, content)
	});		
	
	for(let i = 9; i < 18; i++){
		$('#hour-'+ i +" .description").val(localStorage.getItem("hour-" + i))
	}
	
	var currentTime = dayjs().hour()
	$(".time-block").each(function(){
		var scheduleTime = parseInt($(this).attr("id").split("-")[1])
		if (scheduleTime < currentTime) {
			$(this).addClass("past")
			$(this).removeClass("present")
			$(this).removeClass("future")
		}
		else if (scheduleTime === currentTime) {
			$(this).removeClass("past")
			$(this).addClass("present")
			$(this).removeClass("future")
		}
		else {
			$(this).removeClass("past")
			$(this).removeClass("present")
			$(this).addClass("future")
		}
	});
});
