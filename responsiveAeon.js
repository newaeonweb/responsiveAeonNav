// ResponsiveAeon Menu
(function($){
 	$.fn.extend({ 
 		//Plugin ResponsiveAeon Navigation
 		responsiveAeon: function(options) {
 			// Define default values
			var defaults = {
        text:'-- Table of Content --',
        list: ''

			};
			
			var options = $.extend(defaults, options);
		
    		return this.each(function() {
				  var o =options;
				  var obj = $(this);				

          //Create a select menu style for small screen
				  $("<select />").appendTo(this);

          var nav = "select";
          var navLink = "a"

            // Default option "-- Table of Content-- Change this valeu to fit your needs"
            $("<option />", {
               "selected": "selected",
               "value"   : "",
               "text"    : o.text
            }).appendTo(nav);
            
            // Populate dropdown with menu items
            $(navLink).each(function() {
             var el = $(this);
             $("<option />", {
                 "value"   : el.attr("href"),
                 "text"    : el.text()
             }).appendTo(nav);
            });
            
            // Simple function to check browser window size
            function screenWidth() {
                           
              return window.innerWidth != null? 
              window.innerWidth : document.documentElement && document.documentElement.clientWidth ?
              document.documentElement.clientWidth : document.body != null? 
              document.body.clientWidth : null;
            } 

            if(screenWidth() <= 480){
              //alert("smaller or equal to 480px");
                $(this).find('select').css({"display":"inline-block", "width":"100%"});
                $(this).find('ul').css({display:'none'});
            }
            else {
              //alert("Bigger than 480"); 
                $(this).find('select').css({display:'none'});
                $(this).find('ul').css({display:'inline-block'});
            }
            // Just to check window width
            //console.log(screenWidth());

            // Active 
            $(nav).change(function() {
              window.location = $(this).find("option:selected").val();
            });

            // Re-load the page when orientation change
            $(window).resize(function(){
              location.reload($(this));
            });

    		});
    	}
	});
})(jQuery);


