$(window).scroll(function() {
    if($(this).scrollTop()>5) {
        $( ".__navbar-fixed" ).addClass("__fixed-nav");
    } else {
        $( ".__navbar-fixed" ).removeClass("__fixed-nav");
    }
});



// slider
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1209,
            settings: {
                slidesToShow: 5
            }
        },{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        },{
            breakpoint: 1030,
            settings: {
                slidesToShow: 4
            }
        }, 
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3
            }
        }, 
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, 
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});





$(function() {
			
	$( '#ri-grid' ).gridrotator( {
		rows		: 2,
		columns		: 4,
		animType	: 'fadeInOut',
		animSpeed	: 1000,
		interval	: 1000,
		step		: 1,
		w1024 : {
            rows : 2,
            columns : 4
        },
        w768 : {
            rows : 2,
            columns : 3
        },
        w480 : {
            rows : 2,
            columns : 3
        },
        w320 : {
            rows : 4,
            columns : 3
        },
        w240 : {
            rows : 4,
            columns : 2
        },
	} );

});



// for Advert
$(document).ready(function(){

    $(window).load(function(){
        $duration = 15;
        $('.seconds').text($duration);
        $('.popup-wrap').fadeIn(1500);

        $myTimer = setInterval(function(){ startTimer() }, 1000);
        $('.popup .btn-close').on("click",function(){
            clearInterval($myTimer);
            $('.popup-wrap').fadeOut(500);
        });
        
        function startTimer(){
            $duration--;
            $('.seconds').text($duration);
            if($duration==0){
                clearInterval($myTimer);
                $('.popup-wrap').fadeOut(500);
            }
        }
    });
});



// show and hide div using radio
    $(':radio').change(function (event) {
        var id = $(this).data('id');
        $('#' + id).addClass('none').siblings().removeClass('none');
    });

   // end

   // dropdown
    $(document).ready(function(){
        $('.dropdown-submenu a.test').on("click", function(e){
            $(this).next('ul').toggle();
            e.stopPropagation();
            e.preventDefault();
        });
    });




   // accordion
var acc = document.getElementsByClassName("__accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
        panel.style.maxHeight = null;
    } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}
// end



