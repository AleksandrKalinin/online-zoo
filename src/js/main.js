var sumElements = document.querySelectorAll('.donate-progress__circle');

var sumEl = Array.prototype.slice.call(sumElements);

var sums = [5000, 2500, 1000, 500, 250, 100, 50, 25];

var donateInput = document.getElementById('donateInput');

for (var i = 0; i < sumEl.length; i++) {
  sumEl[i].addEventListener('click', function(e){
    for (var j = 0; j < sumEl.length; j++) {
      sumEl[j].classList.remove('active');
    }
    e.target.classList.add('active');
    console.log(i);
    //donateInput.value = sums[i];
  });
}


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





//console.log(sumEl);

