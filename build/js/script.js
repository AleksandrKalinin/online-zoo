
//Donate functionality

if (document.getElementById('donateInput')) {

	var sumElements = document.querySelectorAll('.donate-progress__circle');

	var sumEl = Array.prototype.slice.call(sumElements);

	var sums = [5000, 2500, 1000, 500, 250, 100, 50, 25];

	var donateInput = document.getElementById('donateInput');

	for (let i = 0; i < sumEl.length; i++) {
	  sumEl[i].addEventListener('click', function(e){
	    for (var j = 0; j < sumEl.length; j++) {
	      sumEl[j].classList.remove('active');
	    }
	    e.target.classList.add('active');
	    //console.log(i);
	    donateInput.value = sums[i];
	  });
	}

	window.addEventListener('load', function(e){
		donateInput.value = 100;
	    for (var j = 0; j < sumEl.length; j++) {
	      sumEl[j].classList.remove('active');
	    }
	    sumEl[5].classList.add('active');	
	})



	donateInput.addEventListener('input', function(e){
	  if (e.target.value.length > 4) {
	   e.target.value = e.target.value.slice(0,4);
	  }
	  var el = Number(e.target.value); 
	  if (sums.includes(el)) {
	    var pos = sums.indexOf(el);
	    for (var i = 0; i < sumEl.length; i++) {
	      sumEl[i].classList.remove('active');
	    }
	    sumEl[pos].classList.add('active');
	  }
	})

}



// Zoos functionality

if (document.getElementById('readButton')) {

	let readButton = document.getElementById('readButton');
	//console.log(readButton);

	readButton.addEventListener('click', function(e){
		var animalInfo = document.getElementById('animalInfo');
		animalInfo.style.maxHeight = (readButton.innerText == 'Read More') ? '1500px' : '270px';
		readButton.innerText = (readButton.innerText == 'Read More') ? 'Read Less' : 'Read More';
	})


	var animalCarousel = document.querySelectorAll('.gallery-item');
	var overlayArray = document.querySelectorAll('.animal-item__overlay');
	var animalMain = document.getElementById('animalMain');
	var animalPrev = document.getElementById('animalPrev');
	var animalNext =document.getElementById('animalNext');
	var animalIndex = 0;
	animalItems = Array.prototype.slice.call(animalCarousel);
	animalOverlays = Array.prototype.slice.call(overlayArray);

	for (var i = 0; i < overlayArray.length; i++) {
		overlayArray[i].addEventListener('click', function(e){
			var mainSrc = animalMain.getAttribute('src');
			var curEl = e.currentTarget.parentElement.children[0];
			animalMain.src = curEl.getAttribute('src');
			curEl.src = mainSrc;
		})
	}

	function rotateAnimals(index){
		for (var i = 0; i < animalItems.length; i++) {
			animalItems[i].classList.remove('visible');
		}	
		for (var i = index; i < index + 4; i++) {
			animalItems[i].classList.add('visible');
		}
	}

	animalNext.addEventListener('click', function(){
		animalIndex = (animalIndex !== 3) ? animalIndex + 1 : animalIndex;
		//console.log(animalIndex);
		rotateAnimals(animalIndex);
	})

	animalPrev.addEventListener('click', function(){
		animalIndex = (animalIndex !== 0) ? animalIndex - 1 : animalIndex;
		//console.log(animalIndex);
		rotateAnimals(animalIndex);	
	})

}



//About functionality

if (document.getElementById('testCont')) {

	var testCont = document.getElementById('testCont');
	var testList = document.querySelectorAll('.testimonials-item');
	var testItems = Array.prototype.slice.call(testList);
	var testIndex = 1;
	var testTime = 0;
	var compareTime = 0;
	//console.log(testItems);
	var testInput = document.getElementById('testInput');
	testInput.addEventListener('input', function(e){
		testIndex = Number(e.target.value);
		rotateTestimonials(testIndex);
	})  

	for (var i = 0; i < testItems.length; i++) {
		testItems[i].addEventListener('click', function(){
			compareTime = testTime + 40;
		})
	}

	function rotateTestimonials(index){
		for (var i = 0; i < testItems.length; i++) {
			testItems[i].classList.remove('visible');
		}	
		for (var i = index; i < index + 4; i++) {
			testItems[i].classList.add('visible');
		}
		//console.log(testItems);
	}

	function increaseTime(){
		testTime++;
	}

	function fireFunctions(){
		if (testTime >= compareTime) {
			rotateTestimonials(testIndex);
			if (testIndex < 7) {
				testIndex++;
			}
			else {
				testIndex = 0;
			}
			testInput.value = testIndex;
		}
	}

	setInterval(increaseTime, 1000);
	setInterval(fireFunctions, 10000);

	let cardsIndex = 0;
	var cardsList = document.querySelectorAll('.single-card');
	var cardsItems = Array.prototype.slice.call(cardsList);
	let prev = document.getElementById('prevArrow');
	let next = document.getElementById('nextArrow');


	function rotateCards(index){
			console.log(cardsItems.length);
			for (var i = 0; i < cardsItems.length; i++) {
				cardsItems[i].classList.remove('visible');
			}	
			for (var i = index; i < index + 6; i++) {
				cardsItems[i].classList.add('visible');
			}
	}

	next.addEventListener('click', function(){
		cardsIndex = (cardsIndex + 6 !== cardsItems.length) ? cardsIndex+=6 : 0;
		rotateCards(cardsIndex);
	})

	prev.addEventListener('click', function(){
		cardsIndex = (cardsIndex - 6 >= 0) ? cardsIndex-=6 : 12;
		rotateCards(cardsIndex);	
	})

}


//Map
if (document.getElementById('mapImage')) {

	var mapSize = 1;
	let mapStep = 0;
	var popupOpen = false;
	var upscaleMap = document.getElementById('upscaleMap');
	var downscaleMap = document.getElementById('downscaleMap');
	var mapButtons = document.getElementById('mapButtons');
	var map = document.getElementById('mapImage');
	var icons = document.querySelectorAll('.map-container__icon');
	var mapIcons = Array.prototype.slice.call(icons);
	var outerElement = document.getElementById('outerElement');

	outerElement.addEventListener('click', function(e){
		var evTarget = e.target;
		//console.log(evTarget);
		if (evTarget.classList.contains('map-container__icon')) {

		}
		else {
			for (var i = 0; i < mapIcons.length; i++) {
				mapIcons[i].parentElement.children[1].style.display = 'none';
			}
		}
	})

	for (var i = 0; i < mapIcons.length; i++) {
		mapIcons[i].addEventListener('click', function(e){
			for (var j = 0; j < mapIcons.length; j++) {
				//console.log(mapIcons[j]);
				mapIcons[j].parentElement.children[1].style.display = 'none';
			}
			var tooltip = e.currentTarget.parentElement.children[1];
			tooltip.style.display = (tooltip.style.display == 'block') ? 'none' : 'block';
			popupOpen = (popupOpen == true) ? false : true;
		})
	}

	upscaleMap.addEventListener('click', function(){
		if (mapStep < 3) {
			mapSize = mapSize * 2;
			map.style.transform = `scale(${mapSize})`;
			//mapButtons.style.transform = `scale(${1 / mapSize})`;
			mapStep++;
		}
	})

	downscaleMap.addEventListener('click', function(){
		if (mapStep > 0) {
			mapSize = mapSize / 2;
			map.style.transform = `scale(${mapSize})`;
			//console.log(mapSize);
			//mapButtons.style.transform = `scale(${1 / mapSize})`;
			mapStep--;
		}
	})

	let pos = { top: 0, left: 0, x: 0, y: 0 };
	let mapOver = document.getElementById('mapOverflow');
	mapOver.scrollTop = 0;
	mapOver.scrollLeft = 0;

	const mouseDownHandler = function(e) {
	    pos = {
	        left: mapOver.scrollLeft,
	        top: mapOver.scrollTop,
	        x: e.clientX,
	        y: e.clientY,
	    };
	    mapOver.style.cursor = 'grabbing';
	    mapOver.style.userSelect = 'none';
	    document.addEventListener('mousemove', mouseMoveHandler);
	    document.addEventListener('mouseup', mouseUpHandler);
	};

	const mouseMoveHandler = function(e) {
	    const dx = e.clientX - pos.x;
	    const dy = e.clientY - pos.y;
	    mapOver.scrollTop = pos.top - dy;
	    mapOver.scrollLeft = pos.left - dx;
	};	

    const mouseUpHandler = function() {
        mapOver.style.cursor = 'grab';
        mapOver.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    mapOver.addEventListener('mousedown', mouseDownHandler);		


}