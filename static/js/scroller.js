(function() {
  var updateActive;

  updateActive = function(doScroll) {
    var activeAnchor, className, fromTop, offset;
    if (doScroll == null) {
      doScroll = true;
    }
    offset = 60;
    fromTop = $(window).scrollTop();
    activeAnchor = null;
    $("a").map(function() {
      var anchor;
      anchor = $(this);
      if (anchor.offset().top < fromTop + offset) {
        return activeAnchor = anchor;
      }
    });
    if (activeAnchor) {
      className = activeAnchor.attr("name");
      $("#sidebar a").removeClass("active");
      $("#sidebar a." + className).addClass("active");
      $("#sidebar a." + className).parent().parent().addClass("appear");
      (function() {
			var offsetOne = window.matchMedia( "(max-height: 900px)" );
			
			if (offsetOne.matches) {
				learnScroll = 0
				docsScroll = 0
				moreScroll = 60
			}
			
		})();;
      (function() {
			var offsetTwo = window.matchMedia( "(max-height: 770px)" );
			
			if (offsetTwo.matches) {
				learnScroll = 0
				docsScroll = 0
				moreScroll = 80
			}
			
		})();;
      (function() {
			var offsetThree = window.matchMedia( "(max-height: 650px)" );
			
			if (offsetThree.matches) {
				learnScroll = 0
				docsScroll = 0
				moreScroll = 80
			}
			
		})();;
      (function() {
			var offsetFour = window.matchMedia( "(max-height: 540px)" );
			
			if (offsetFour.matches) {
				learnScroll = 0
				docsScroll = 30
				moreScroll = 120
			}
			
		})();;
      if (doScroll) {
        $("#sidebar.learn").scrollTop($("#sidebar").scrollTop() + learnScroll);
        $("#sidebar.docs").scrollTop($("#sidebar").scrollTop() + docsScroll);
        return $("#sidebar.more").scrollTop($("#sidebar").scrollTop() + moreScroll);
      }
    }
  };

  $(window).scroll(function() {
    return updateActive(false);
  });

  $(window).resize(function() {
    return updateActive(false);
  });

  updateActive(false);

  $(window).load(function() {
    return updateActive(true);
  });

  $("#sidebar a").click(function() {
    $("#sidebar a").removeClass("active");
    return $(this).addClass("active");
  });

}).call(this);
