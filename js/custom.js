/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

function renameDropDownToggle(toggleSelector, currentLink){
  $(toggleSelector).text($(currentLink).text());
}



$(function(){

	$('.main-menu-dd .dropdown-menu a').on('click',function(el){
		$('.navbar-brand').click();
		$(el.target).parents('.dropdown').find('.toggle-text').text($(el.target).text());
	});

	$('.dropdown .dropdown-menu a').on('click',function(el){
		setTimeout(function(){
			$(el.target).parents('.dropdown').removeClass('open');
		},500);
	});


	$('.main-menu-dd .dropdown-menu a').eq(0).click();

});