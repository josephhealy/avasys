function page_init(){
    //remove listener
    //$(window).die("load", init);
    
    $(document).pngFix();
    init_thumbs();
    init_slideshow();
}

function init_thumbs()
{
    $('.project_thumb').hover(
        function() {
            $(this).children('.project_caption').stop().animate({backgroundColor:'#efefea'}, 400 );
        },
        function(){
            $(this).children('.project_caption').stop().animate({backgroundColor:'#ffffff'}, 400 );
        }
    );
}

function init_slideshow()
{
	$('#feature_slides').cycle({
		fx:'fade',
		timeout:8000,
/*        timeout: 8000, */ /* PRODUCTION */
/*        timeout: 80000, */ /* REMOTE DEBUGGING */
		pager: '.pager',
		after:update_slide_caption,
		before:fade_slide_caption
	});
}

function fade_slide_caption(next, previous)
{
	$('#feature_caption').fadeOut('fast');
}

function update_slide_caption(next, previous)
{
	caption_container = $('#feature_caption');

	caption = $('span.slide_caption', previous);
	caption_container.fadeIn('fast');
	caption_container.html(caption.html());
}