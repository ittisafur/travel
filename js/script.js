(function(){
	$('.portfolios-carousel').owlCarousel({
		items:3,
	    loop:true,
	    dots:true,
	    margin:5,
	    autoplay:true,
	    autoplayTimeout:2500,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	            
	        },
	        600:{
	            items:2,
	            
	        },
	        768:{
	            items:3,
	            
	            loop:true
	            
	        }
	    }	
	});

	var author = $('div.author-carousel');

	author.owlCarousel({
		items:3,
	    loop:true,
	    nav:true,
	    dots:false,
	    margin:10,
	    navText: ["","<i class='fa fa-angle-right'></i>"],
	    autoplay:true,
	    autoplayTimeout:2000,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	            nav:false
	        },
	        600:{
	            items:2,	            
	        },
	        768:{
	            items:3,
	            nav:true	              
	        }
	    }

	});

	author.find('.owl-prev').hide();

	$('.client-carousel').owlCarousel({
		items:4,
	    loop:true,
	    nav:true,
	    dots:false,
	    margin:10,
	    navText: ["","<i class='fa fa-angle-right'></i>"]
	});

	$('.review-carousel').owlCarousel({
		items:3,
	    loop:true,
	    nav:true,
	    dots:false,
	    margin:10,
	    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:true
	        },
	        768:{
	            items:3,
	            nav:true,
	            loop:true
	            
	        }
	    }
	});

	

	$('.client-carousel').find('.owl-prev').hide();

	$('.quotes').owlCarousel({
		items:1,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:4000
	});

	$('#menu').slicknav();

	

	// progressbar.js@1.0.0 version is used
	// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

	var bar = new ProgressBar.Circle(alphaProgress, {
	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 1,
	  easing: 'easeInOut',
	  duration: 2400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#aaa', width: 1 },
	  to: { color: '#ff4800', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value);
	    }

	  }
	});
	bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	bar.text.style.fontSize = '2rem';

	bar.animate(.9);  // Number from 0.0 to 1.0

	var chodu = new ProgressBar.Circle(betaProgress, {
	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 1,
	  easing: 'easeInOut',
	  duration: 2400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#aaa', width: 1 },
	  to: { color: '#ff4800', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value);
	    }

	  }
	});
	chodu.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	chodu.text.style.fontSize = '2rem';

	chodu.animate(.8);  // Number from 0.0 to 1.0

	var modu = new ProgressBar.Circle(gamaProgress, {
	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 1,
	  easing: 'easeInOut',
	  duration: 2400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#aaa', width: 1 },
	  to: { color: '#ff4800', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value);
	    }

	  }
	});
	modu.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	modu.text.style.fontSize = '2rem';

	modu.animate(.7);  // Number from 0.0 to 1.0

	var lodu = new ProgressBar.Circle(deltaProgress, {
	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 1,
	  easing: 'easeInOut',
	  duration: 2400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#aaa', width: 1 },
	  to: { color: '#ff4800', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value);
	    }

	  }
	});
	lodu.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	lodu.text.style.fontSize = '2rem';

	lodu.animate(1.0);  // Number from 0.0 to 1.0


		


	 
})();

