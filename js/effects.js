
$( function() {
	
	// case 2: top to bottom
	$( "#topToBottom a" ).css({ backgroundPosition: "-20px 35px" }).mouseover( function() { 
		
		$( this ).stop().animate({
		
			backgroundPosition: "( -20px 94px )"
		
		}, { duration: 600 })
	
	}).mouseout( function() {

		$( this ).stop().animate({

			backgroundPosition: "( 20 35px )"
		
		}, { duration: 300, complete: function() {

				$( this ).css({ backgroundPosition: "-20px 35px" });
		}});
	});

	// case 3: left to right
	$( '#rightToLeft a' ).css({ backgroundPosition: "0 0" }).mouseover( function() {
		
		$ (this ).stop().animate({
			
			backgroundPosition:"(-150px 0)"
		
		}, { duration: 600 });
	
	}).mouseout( function() {

		$( this ).stop().animate({

			backgroundPosition:"(-300px 0)"
		
		}, { duration: 300, complete:function() {

			$( this ).css({ backgroundPosition: "0 0" });
		
		}});
	});
	
	// case 4: fade in and out
	$( '#fade a' ).css({ backgroundPosition: "0 0" }).mouseover( function() {
		
		$( this ).stop().animate({

			backgroundPosition: "(0 -250px)"
		
		}, { duration: 600 });

	}).mouseout( function() {
		
		$( this ).stop().animate({

			backgroundPosition: "(0 0)"
		
		}, { duration: 600 });
	});
	
	// case 5: fade in and out with an anothor color
	$( '#fadeColor a' ).css({ backgroundPosition: "0 0" }).mouseover( function() {

		$( this ).stop().animate({
			
			backgroundPosition:"(0 -250px)"
		
		},{ duration:500 });
	
	}).mouseout( function() {
	
		$(this).stop().animate({
		
			backgroundPosition: "(0 0)"
		
		},{ duration: 500 });
	});
	
	// case 6: slide up and down background 
	$( ".navTag a" ).css({ backgroundPosition: "right 0" }).mouseover( function() {

		$( this ).stop().animate({

			backgroundPosition: "(right -62px)"
		
		}, { duration: 400 });
	
	}).mouseout( function() {
		
		$(this).stop().animate({
			
			backgroundPosition: "(right 0)"
		
		}, { duration: 400 });
	});

	$( ".navTag a span" ).css({ backgroundPosition: "left 0" }).mouseover( function() {
		
		$( this ).stop().animate({

			backgroundPosition:"(left -62px)"
		
		}, { duration: 400 });

	}).mouseout(function(){
		
		$( this ).stop().animate({
		
			backgroundPosition:"(left 0)"
		
		}, { duration:400 });
	});
	
});