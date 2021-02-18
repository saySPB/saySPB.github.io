$(document).ready(function() {
	var leftUIEl = $('.carousel-arrow-left');
	var rightUIEl = $('.carousel-arrow-right');
	var elementsList = $('.carousel-list');

	var pixelsOffset = 600;
	var currentLeftValue = 0;
	var elementsCount = elementsList.find('li').length;
	var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
	var maximumOffset = 0;

	leftUIEl.click(function() {		
		if (currentLeftValue != maximumOffset) {
			currentLeftValue += 580;
			elementsList.animate({ left : currentLeftValue + "px"}, 500);
		}		
	});

	rightUIEl.click(function() {		
		if (currentLeftValue != minimumOffset) {
			currentLeftValue -= 580;
			elementsList.animate({ left : currentLeftValue + "px"}, 500);
		}		
	});
});