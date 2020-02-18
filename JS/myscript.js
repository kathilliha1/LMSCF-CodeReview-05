$(".like-button").on("click", function(e) {
    var $counter = $(this).find(".counting");
    var count = $counter.text() | 0; //set new number
    $counter.text(count + 1); //changes current count
});


$("h4").on("click",function(){
	$('.col-lg-5').sort(function(a, b) {
        return $(b).find(".counting").text() - $(a).find(".counting").text();
    }).appendTo('#movies');
});

