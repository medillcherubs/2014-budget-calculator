jQuery('#calculate').click(function(){

	var laundry=jQuery('[name="laundry"]').val()*10

	var dineout=jQuery('[name="dineout"]').val()*50

	var coffee=jQuery('[name="coffee"]:checked').length*7
	var fresh=jQuery('[name="fresh"]:checked').length*
	var icecream=jQuery('[name="icecream"]:checked').length*7
	var junk=jQuery('[name="junk"]:checked').length*

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
	console.log(laundry)
	console.log("Hello")

})
