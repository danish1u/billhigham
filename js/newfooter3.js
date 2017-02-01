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
	var footer = '\n\r<div class="designer-wrapcens"> <div id="designer-footer"> <div id="designer-footernav"> <div id="designer-footernav-title">Quick Links</div><ul> <li><a href="http://stores.ebay.co.uk/marineimportsuk">- Store Home</a></li><li><a href="http://stores.ebay.co.uk/marineimportsuk/pages/about-us/_i.html?">- About Us</a></li><li><a href="http://stores.ebay.co.uk/marineimportsuk/pages/shipping/_i.html?">- Shipping</a></li><li><a href="http://feedback.ebay.co.uk/ws/eBayISAPI.dll?ViewFeedback2&userid=marineimportsuk&ftab=AllFeedback&myworld=true&rt=nc">- Feedback</a></li></ul> <ul style=" width: 50%; margin-left: 50px;"> <li><a href="http://stores.ebay.co.uk/marineimportsuk/pages/payment/_i.html?">- Payment</a></li><li><a href="http://stores.ebay.co.uk/marineimportsuk/pages/returns/_i.html?">- Returns</a></li><li><a href="http://stores.ebay.co.uk/marineimportsuk/_i.html?rt=nc&_sid=108463085&_trksid=p4634.c0.m14&_sop=10&_sc=1">- New Arrivals</a></li><li><a href="http://stores.ebay.co.uk/marineimportsuk/pages/contact-us/_i.html?">- Contact Us</a></li></ul> </div><div id="designer-social"> <div id="designer-footernav-title">Get in touch with us</div><p>We are trending on Social Media. Follow us and stay updated with our Latest News & Updates.</p><ul> <li> <a target="_blank" class="fb-icon" href="https://www.facebook.com/BillHighamMarine/"></a> </li><li> <a target="_blank" class="twit-icon" href="https://twitter.com/BillHigham"></a> </li><li> <a target="_blank" class="gplus-icon" href="https://plus.google.com/108076874639234295621"></a> </li><li> <a target="_blank" class="mail-icon" href="skype:bidabing?chat"></a> </li></ul> </div><div id="designer-payment"> <div id="designer-footernav-title">Payment Options</div><div class="pst-address">Secure Payments by</div><div class="sign-up"><img src="http://www.pstnow.com/docs/pt/thepixelhub/store/images/paypal.png" alt=""/></div></div><div id="Facebook"> <div id="designer-footernav-title">Store Newsletter</div><div class="f-row1-head"></div><div class="pst-address">Add Store to your Favourites and receive email newsletters about new items and special promotions!</div><div class="sign-up"> <a href="http://my.ebay.com/ws/eBayISAPI.dll?AcceptSavedSeller&amp;sellerid=marineimportsuk&amp;refid=store&amp;ssPageName=STORE:marineimportsuk:SIMPLEPAGE"><img src="https://raw.githubusercontent.com/danish1u/billhigham/master/images/signupnow1.png" alt="" class="img-responsive"></a> </div></div></div><div class="designer-clear"></div></div><div class="placeholder"> </div><div id="designer-footerwrapper"> <div id="designer-footer"> <div id="designer-copy">&copy; 2017 <span>Marineimportsuk</span></div><div id="designer-designer">eBay Store Design & Developed By <a href="http://www.upwork.com/o/profiles/users/_~015b640ac53e133434/" target="_blank">M.Ali</a></div></div></div></div>';
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
