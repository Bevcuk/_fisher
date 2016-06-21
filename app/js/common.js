$(document).ready(function() {
	//fitler in small resolutions
	$(".filter-btn").click(function() {
		$(this).toggleClass("on");
		$(".filter").slideToggle();
	});

	//forward call
	$(".callback").click(function(e) {
		e.preventDefault();
		$(".forward-call").fadeIn(300, function() {
			$(this).focus();
		});
	});

	$(".close").click(function() {
		$(".forward-call").fadeOut(300);
	});

/*	$("body").click(function(e) {
		if (!$(e.target).closest(".forward-modal").length){
			$("forward-call").fadeOut(300);
		}
	});*/

	//menu clicking
	$('.toggle-mnu,.exit').click(function() {
		$('#sidebar').toggleClass('visible');
	});

	$('.mobile-search,.closes').click(function() {
		$('.searchmob').toggleClass('visible');
	});


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
