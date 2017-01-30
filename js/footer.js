var $w = jQuery.noConflict();
	$w(document).ready(function(){
	//Right Click Protection
	//$w(document).bind("contextmenu",function(e){ return false;});

	//Content Area Mods
	$w(".pagecontainer > table:eq(1) tr:first td:first").addClass("designer-background");
	$w(".designer-background table:eq(1)").addClass("designer-content");

	//Getting and Setting Store Categories
	if($w("#designer-categories").length > 0) {
		if($w("#LeftPanel .lcat").length > 0) {
			$w("#designer-categories").html($w("#LeftPanel .lcat").html());
		}
		$w("#designer-categories ul[class=lev1]").find("li:last").addClass("designer-lastitem");
	}

//Search Box
	var stxt = $("#estore-search #estore-input").find("input[class=v4sbox]").val();
	$("#estore-search #estore-input").find("input[class=v4sbox]").focus(function(){
		if($("#estore-search #estore-input").find("input[class=v4sbox]").val() == stxt) {
			$("#estore-search #estore-input").find("input[class=v4sbox]").val("");
		}
	});
	$("#estore-search #estore-input").find("input[class=v4sbox]").blur(function(){
		if($("#estore-search #estore-input").find("input[class=v4sbox]").val() == "") {
			$("#estore-search #estore-input").find("input[class=v4sbox]").val(stxt);
		}
	});
	$("#estore-search #estore-submit").find("input").click(function(){
		if($("#estore-search #estore-input").find("input[class=v4sbox]").val() == stxt) {
			$("#estore-search #estore-input").find("input[class=v4sbox]").val("");
		}
	});


	//Footer
	var d = new Date();
	var footer = '\n\r<link rel="stylesheet" href="C:\Users\danis\Desktop\New folder\new.css" media="screen" title="no title"><div class="designer-wrapcens"> <div id="designer-footer"> <div id="designer-footernav"> <div id="designer-footernav-title">Useful links</div><ul> <li><a href="http://stores.ebay.com/marinerswarehousecom">Store Home</a></li><li><a href="http://stores.ebay.com/marinerswarehousecom">About Us</a></li><li><a href="http://stores.ebay.com/marinerswarehousecom">Shipping</a></li></ul> <ul> <li><a href="http://stores.ebay.com/marinerswarehousecom">Feedback</a></li><li><a href="http://stores.ebay.com/marinerswarehousecom">Payment</a></li><li><a href="http://stores.ebay.com/marinerswarehousecom">Returns</a></li></ul> <ul> <li><a href="http://stores.ebay.com/marinerswarehousecom">New Arrivals</a></li><li><a href="http://stores.ebay.com/marinerswarehousecom">Contact Us</a></li></ul> </div><div id="designer-social"> <div id="designer-footernav-title">Get in touch with us</div><p>We are trending on Social Media. Follow us and stay updated with our Latest News & Updates.</p><ul> <li> <a target="_blank" class="fb-icon" href="https://www.facebook.com/MarinersWarehouse"></a> </li><li> <a target="_blank" class="twit-icon" href="https://twitter.com/account/suspended"></a> </li><li> <a target="_blank" class="gplus-icon" href="https://plus.google.com/+MarinersWarehouseMiami"></a> </li><li> <a target="_blank" class="mail-icon" href="skype:bidabing?chat"></a> </li></ul> </div><div id="designer-payment"> <div id="designer-footernav-title">We Accept</div><div class="payment-logo"><img src="http://www.ebay-store-designer.com/estore/daxej/store/images/payment.png" alt=""/></div></div><div id="Facebook"> <div id="designer-footernav-title">Facebook</div><iframe src="https://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fmarinerswarehouse&width=400&height=258&show_faces=true&colorscheme=light&stream=false&show_border=false&header=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:400px; height:215px; margin-bottom: 30px; background:#fff;float: left" allowtransparency="true"></iframe> </div><div class="designer-clear"></div></div><div id="designer-footerwrapper"> <div id="designer-footer"> <div id="designer-copy">&copy; Copyright <span>marinerswarehousecom</span> ' + d.getFullYear() +'. All rights reserved.</div><div id="designer-designer">eBay Store Design & Developed By <a href="http://stores.ebay.com/marinerswarehousecom" target="_blank">M.Ali</a></div></div></div></div>';

	 {
		if($w(".designer-content").length > 0) {
			$w(".designer-content").after(footer);
		}
	}

$w(document).ready(function(){
		//$w('.rs-pview >table:first-child').after('<div class="new_div"></div>')
		$w('.rs-pview >table:first-child').removeClass('grid');
		$w('.rs-pview >table:first-child').addClass('grid_new');
	});
	var cnt ='';
	$w(".grid tr td.gallery").each(function(){
		//$w(this).addClass('new');
		if($w(this).html() == "<br>")
		{
			cnt +='<td class="gallery er" width="33%" itemscope="itemscope" itemtype="http://schema.org/Product">'+$w(this).html()+'</td>';
		}
		else
		{
			cnt +='<td class="gallery" width="33%" itemscope="itemscope" itemtype="http://schema.org/Product">'+$w(this).html()+'</td>';
		}

	});

	ct =cnt;

	$w('.rs-pview >table:first-child').html('<tr>'+cnt+'<tr>');

});;

$w(window).load(function(){
	$w("#org-banner .container").css("display","block");
});
