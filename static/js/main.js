$(function(){ //Нужно для работы сначала html, а потом уже JS

    $('.textt_text').hide();
    $('.slider').slick({
        nextArrow: '<button type="button" class="slick-button slick-next"><span class="material-icons md-right">chevron_right</span></button>',
        prevArrow: '<button type="button" class="slick-button slick-prev"><span class="material-icons md-left">chevron_left</span></button>',
        infinite: false
    });
    $('.textt_title').click(
        function(){
            let parent =  $(this).parent('.textt_item');
            let children = $(parent).children('.textt_text');
            $(children).slideToggle('slow', function(){
            });
        }
    );

});