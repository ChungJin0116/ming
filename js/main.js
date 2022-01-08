$(document).ready(function(){
	setTimeout(function(){
		$(".spooky-castle").fadeOut(1100);
	}, 3000);

    setTimeout(function(){
		$(".loading_con").fadeOut(1100);
	}, 5000);

    setTimeout(function(){
		$(".loading").fadeOut(1100);
	}, 7000);

	setTimeout(function(){
	$(".ming_video").get(0).play();
	}, 7000);
});


$('.mingturn').click(function(){
    $(this).addClass('active');
	setTimeout(function(){
		$(".mingturn_container").fadeIn(500);
	}, 500);
})

$('.mingturn_container .close_btn').click(function(){
	$(".mingturn_container").fadeOut(500);
	$('.mingturn').removeClass('active');
})


$(document).ready(function() {
	var inputs = $(".loading_tit").find($("label") );
	
	for(var i =0 ; i< inputs.length; i ++)
	{ 
	     var index = i +1;
		 var time = ((inputs.length)-i ) * 100; 
		$(".loading_tit label:nth-child("+ index+")").css( "-webkit-animation", "anim 5s "+time+"ms ease-in-out" );
		$(".loading_tit label:nth-child("+index+")").css( "-animation", "anim 5s "+time+"ms ease-in-out" );
	}

});

$(document).ready(function() {
	var inputs = $(".loading_tit2").find($("label") );
	
	for(var i =0 ; i< inputs.length; i ++)
	{ 
	     var index = i +1;
		 var time = ((inputs.length)-i ) * 100;
		$(".loading_tit2 label:nth-child("+ index+")").css( "-webkit-animation", "anim2 5s "+time+"ms ease-in-out" );
		$(".loading_tit2 label:nth-child("+index+")").css( "-animation", "anim2 5s "+time+"ms ease-in-out" );
	}

});


// 포트폴리오 슬라이드
var menuSwiper = new Swiper(".menu_swiper", {
	observer: true,
	observeParents: true,
	allowTouchMove : false,
    slidesPerView : 3,
	centeredSlides : true,
	spaceBetween: 20,
    loop: true,
	navigation: {   // 버튼 사용자 지정
		nextEl: '.arrow_right',
		prevEl: '.arrow_left',
	},
});

var cnt =0;
$('.info_tit').hide().eq(0).show();
$('.menu_swiper').hide().eq(0).show();
$('.menu_tab > li').click(function() {
    cnt = $(this).index();
    $('.menu_tab > li').removeClass('active').eq(cnt).addClass('active');
    $('.info_tit').hide().eq(cnt).fadeIn(1000);
    $('.menu_swiper').hide().eq(cnt).fadeIn(1000);
});

$(document).ready(function () {
    AOS.init({
        easing: "ease",
        duration: 1000,
        offset: 200,
        delay:150
    });
});