jQuery('#calculate').click(function(){

	var laundry=jQuery('[name="laundry"]').val()*10

	var dineout=jQuery('[name="dineout"]').val()*50

	var coffee=jQuery('[name="coffee"]:checked').length*30
	var fresh=jQuery('[name="fresh"]:checked').length*50
	var icecream=jQuery('[name="icecream"]:checked').length*30
	var junk=jQuery('[name="junk"]:checked').length*40

	var sweatshirt=jQuery('[name="sweatshirt"]:checked').length*45
	var tshirt=jQuery('[name="tshirt"]:checked').length*20
	var sweatpants=jQuery('[name="sweatpants"]:checked').length*35 
	var waterbottle=jQuery('[name="waterbottle"]:checked').length*25

	var movie=jQuery('[name="movie"]:checked').length*10
	var clothes=jQuery('[name="clothes"]:checked').length*60
	var books=jQuery('[name="books"]:checked').length*10
	var magazine=jQuery('[name="magazine"]:checked').length*5
	var emergency=jQuery('[name="emergency"]:checked').length*25

	var dineout
	console.log(laundry+dineout+coffee+fresh+icecream+junk+sweatshirt+tshirt+sweatpants+waterbottle+movie+clothes+books+magazine+emergency)
	var total=laundry+dineout+coffee+fresh+icecream+junk+sweatshirt+tshirt+sweatpants+waterbottle+movie+clothes+books+magazine+emergency
	
	// document.getElementById('totalPrice').innerHTML ="Total Budget:"+total
	jQuery('#totalPrice').html("Total: $"+total).css("visibility", "visible");
	if (pymChild) pymChild.sendHeight();

})


jQuery('#one').click(function(){
	jQuery('[type="checkbox"]').prop('checked', false)
	jQuery('[name="laundry"]').val(2)
	jQuery('[name="dineout"]').val(1)
	$('input[name=magazine]').prop('checked', true)
	$('input[name=emergency]').prop('checked', true)
		jQuery('#calculate').click()
})

jQuery('#two').click(function(){
	jQuery('[type="checkbox"]').prop('checked', false)
	jQuery('[name="laundry"]').val(2)
	jQuery('[name="dineout"]').val(2)
	$('input[name=icecream]').prop('checked', true)
	$('input[name=waterbottle]').prop('checked', true)
	$('input[name=emergency]').prop('checked', true)
		jQuery('#calculate').click()
})

jQuery('#three').click(function(){
	jQuery('[type="checkbox"]').prop('checked', false)
	jQuery('[name="laundry"]').val(2)
	jQuery('[name="dineout"]').val(3)
	$('input[name=icecream]').prop('checked', true)
	$('input[name=fresh]').prop('checked', true)
	$('input[name=tshirt]').prop('checked', true)
	$('input[name=magazine]').prop('checked', true)
	$('input[name=emergency]').prop('checked', true)
		jQuery('#calculate').click()
})
