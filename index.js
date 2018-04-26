function countdown(callback){
	window.setTimeout(callback, 2000);
};

function createMultiplier(x){
	return (num)=>x*num;
};

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(x){
	return function(num){
		return x*num;
	}.bind(this);
};

var doublerWithBind = multiplier(2);
var triplerWithBind = multiplier(3);