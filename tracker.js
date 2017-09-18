

$('.num').on('click',function(e){
	e.preventDefault();
	var $t = $(this);
	$t.toggleClass('inactive');

	var num = $t.text();
	var color = $t.parents('.color-group').attr('id');
	console.log(num,color);
})

function incrementHints(){
	var hints = parseInt($('#hints').text());
	if(hints === 8){
		console.log('max hints');
		// alert("Can't have more than 8 hints")
	}
	else {
		hints++
	}
	$('#hints').text(hints);
}

function decrementHints(){
	var hints = parseInt($('#hints').text());
	if(hints === 0){
		console.log('no more hints');
	}
	else {
		hints--
	}
	$('#hints').text(hints);
}

$('#minus-hint').on('click',decrementHints);
$('#add-hint').on('click',incrementHints);

$(document).on('keyup', function(e){
	e.preventDefault();
	var key = e.which;
	// 37 = left
	// 38 = up
	// 39 = right
	// 40 = down
	// 46 = delete
	// 189 = -
	// 187 = +
	// 74 = j
	// 75 = k
	if ( key == 37 || key == 40 || key == 189 || key == 74 ) {
		decrementHints()
	}
	else if ( key == 38 || key == 39 || key == 187 || key == 75 ){
		incrementHints()
	}
})

function resetGame() {
	$('#hints').text('8');
	$('.inactive').removeClass('inactive');
}
$('#reset').on('click',resetGame);