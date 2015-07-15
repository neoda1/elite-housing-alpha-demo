/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

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

	$('.carousel-control').click(function(e){
	    e.stopPropagation();
	    var goTo = $(this).data('slide');
	    if(goTo=="prev") {
	        $('#carousel-id').carousel('prev'); 
	    } else {
	        $('#carousel-id').carousel('next'); 
	    }
	});

	$('a[data-href-link]').on('click',function(evt){
		var linkId = $(evt.target).closest('a').data('href-link');
		$('#'+linkId).tab('show');
		setTimeout(function(){

		initialize();
	}, 500);
	});

	$('#rent-details-map-view').on('change',function(e){
		if ( $(e.target).get(0).checked ){
			$('#nav-rent-details-map').tab('show');
		}
		else{
			$('#nav-rent-details-list').tab('show');	
		}
	});

	$('.main-menu-dd .dropdown-menu a').eq(0).click();
});


// First, create an object containing LatLng and population for each city.
var citymap = {};
citymap['bangalore'] = {
  center: new google.maps.LatLng(12.9667, 77.5667),
  population: 200
};

var cityCircle;

function initialize() {
  // Create the map.
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(12.9667, 77.5667),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (var city in citymap) {
    var populationOptions = {
      strokeColor: '#0023f2',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#1133ff',
      fillOpacity: 0.35,
      map: map,
      draggable: true,
      editable:true,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100
    };
    // Add the circle for this city to the map.
    cityCircle = new google.maps.Circle(populationOptions);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);

