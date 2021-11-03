/* console.log('Hello CFD');
const a = 1;
console.log(a);

a =2;
console.log(a); */

$menu_main = $('.menu');
$close = $('.menu .content .row .close');
$('.btn__menu').on('click',function(e){
    //$('.menu').addClass('active_menu');
    e.preventDefault();
    console.log($menu_main);
    $menu_main.addClass('active_menu');
});
$close.on('click',function(){
    
    $menu_main.removeClass('active_menu');
});
$menu_scroll = $('header .menu_scroll');
$heightMenuScroll = $menu_scroll.height();
$headerDetail = $('header .header_detail').height();
$sliderHeight = 800;

function addMenuScroll() {
    let scrollY = window.pageYOffset;
    if($headerDetail != undefined){
        if (scrollY > ($sliderHeight - $heightMenuScroll)) {
            $menu_scroll.addClass('active');
            $('header .menu_scroll').css({"margin-top":"-100px"});
        }
        else {
            $menu_scroll.removeClass('active');
        }
    }
    else{
        if (scrollY > ($sliderHeight - $heightMenuScroll)) {
            $menu_scroll.addClass('active');
            //$('header .header_detail').css("height:0px")
        }
        else {
            $menu_scroll.removeClass('active');
        }
    }
    
}
$(document).on('scroll',function(){
    addMenuScroll();
    console.log('ok');
})

let $carousel = $('.slider .slider__list');
$carousel.flickity({
    // options
    autoPlay: true,
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,

    on: {
        ready: function(){
           
            /* let dotted = $('.flickity-page-dots');
            let paging = $('.slider__control .paging .dotted');
            dotted.appendTo(paging); */
        },
        change: function(index) {
            /* let number = $('.slider__control .paging .number');
            let indexNumber = index +1;
            number.text(indexNumber.toString().padStart(2,0)); */
            //console.log(number);
        }
    }
    
  });
  let $carousel_detail = $('.product_page_detail .product .container-fluid .row .col-8 .slider .slider_list');
  $carousel_detail.flickity({
    // options
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    
  });
  $('.prev').on('click', function(){
    //alert(1);
    //let dotted = $('.flickity-page-dots');
    $carousel_detail.flickity('previous');
    //console.log(dotted);
});
$('.next').on('click', function(){
    $carousel_detail.flickity('next');
});

let $carousel_detail_hiden = $('.product_page_detail .product .container-fluid .row .col .slider_hiden .slider_hiden_list');
  $box = $('.btn_contact .btn_oder p');
$popup =$('.popup-box');
$close_popup = $('.popup-box .close');
$box.on('click',function(){
    $popup.css({"display":"flex"});
});
$close_popup.on('click',function(){
     $popup.css({"display":"none"});
})
$popup.on('click',function(){
     $popup.css({"display":"none"});
});
$('.popup').on('click',function(e){
    e.preventDefault();
    $menu_main.removeClass('active_menu');
})

let $carousel_other = $('.other_product .container .product_list');
/* $carousel_other.flickity({
    
    autoPlay: true,
    contain: true,
    wrapAround: true,
    groupCells: true,
    prevNextButtons: false,
    pageDots: false,
  }); */


