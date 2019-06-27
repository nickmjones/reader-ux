$(window).scroll(function(){
  toScroll = $(document).height() - $(window).height() - 1800;
	if ( $(this).scrollTop() > toScroll ) {
    $('.up-next').addClass('up-next--visible');
	} else {
    $('.up-next').removeClass('up-next--visible');
  }
});