var show = document.querySelector('.show');
var expand = document.querySelector('.expand');
var bigpic = document.querySelector('.bigpic');
var big = document.querySelector('.big');
show.addEventListener('mouseover',function() {
	expand.style.display = 'block';
	bigpic.style.display = 'block';
	show.addEventListener('mousemove',function(e) {
	var expandX = e.pageX-this.offsetLeft-expand.offsetWidth/2;
	var expandY = e.pageY-this.offsetTop-expand.offsetHeight/2;	
	if(expandX <= 0) {
		expandX = 0;
	} else if (expandX >= 100) {
		expandX = 100;
	}
	if(expandY <= 0) {
		expandY = 0;
	} else if (expandY >= 100) {
		expandY = 100;
	}
	expand.style.left = expandX +'px';
	expand.style.top = expandY +'px';
	var bigX = expandX / 100 * 250;
	var bigY = expandY / 100 * 250; 
	big.style.top = -bigY +'px';
	big.style.left = -bigX +'px';

})
})
show.addEventListener('mouseout',function() {
	expand.style.display = 'none';
	bigpic.style.display = 'none'
})
