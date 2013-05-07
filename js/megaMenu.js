setTimeout(function(){ 
		
		//Cache selectors 
		var $sel = {
			megaMenu: $('.megMenu'), 
			navagationChoice: $('.navChoice'), 
			navagationArrow: $('#navArrow')
		}

               
		//Append
        $('body').append($sel.navagationArrow);

		var timer, 
			navChoice, 
			hoveringNav, 
			arrowLocations, 
			positonArrowLeft;

//Mobile devices / iPad Android 
if( /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {

$('.megMenu').css('position', 'relative');

$('#wrapper').css({
width: '100%', 
left: 0, 
marginLeft: 0
});

$('#nav').css({
marginLeft: 180, 

});

$('#nav li').css({
height: 15
});

//Mobile click 
		
$sel.navagationChoice.click(function(){
		    $sel.navagationArrow.hide();
			
			navChoice = this.id;

			$sel.navagationChoice.each(function(){
				$(this).removeClass('navHover');
			});

			$(this).addClass('navHover');


		   	$sel.megaMenu.hide();
		   	//Clear the time out so it doesn't close the megamenu
		    clearTimeout(timer);

		    setTimeout(function() {
			    	$('#' + navChoice).clearQueue();

					$('#mm-' + navChoice).stop(true, true).slideDown(500, function(){
						
						moveArrowIntoPlaceAndSlideUp();				
							
					});
			}, 300);
		});

}

//Default/Desktop expierence  
$sel.navagationChoice.hover(function(){
		    $sel.navagationArrow.hide();
			
			navChoice = this.id;

			$sel.navagationChoice.each(function(){
				$(this).removeClass('navHover');
			});

			$(this).addClass('navHover');


		   	$sel.megaMenu.hide();
		   	//Clear the time out so it doesn't close the megamenu
		    clearTimeout(timer);

		    setTimeout(function() {
			    	$('#' + navChoice).clearQueue();

					$('#mm-' + navChoice).stop(true, true).slideDown(500, function(){
						
						moveArrowIntoPlaceAndSlideUp();				
							
					});
			}, 300);
		}, function(){
			//Afer hover function allows hovering from megaMenu to nav
			afterHover();

		});


//Hover over one of the menu options

		//Hover over the megaMenu 
		$sel.megaMenu.hover(function(){
			//Clear the time out so it doesn't close the megamenu
			 clearTimeout(timer);

			}, function(){
				//Afer hover function allows hovering from megaMenu to nav
				afterHover();
		});	

		function afterHover(){
			//Set a timeout function to allow hovering from the nav to the megamenu
			timer = setTimeout(function() {
        		$sel.megaMenu.slideUp(100, function(){
        			$sel.navagationChoice.removeClass('navHover');

        			$sel.navagationArrow.hide();
        		});
    		}, 800);
		}

            	//Listen for scroll, if true will hide the mega menu and arrow 
            	$(window).scroll(function () {
                     $sel.navagationChoice.each(function(){
						$(this).removeClass('navHover');
					});
                     $sel.megaMenu.hide();
                     $sel.navagationArrow.hide();      
              	});

		//function to position and move arrow up
		function moveArrowIntoPlaceAndSlideUp() {
				hoveringNav = $('#' + navChoice);
                  
                //Caculate left to move the nav under menu option                
				positonArrowLeft = hoveringNav.offset().left + hoveringNav.outerWidth(true) / 2 - 10;

				//Show arrow
			    $sel.navagationArrow.show();

			    //Move arrow into place with css
				$sel.navagationArrow.css({
					left: positonArrowLeft, 
					top: 30
				});

				//Clear all intances of the arrow
				$sel.navagationArrow.clearQueue();

				//Move the arrow up 
				$sel.navagationArrow.stop(true, true).animate({
					top: 16
				});
		}

	}, 500)	