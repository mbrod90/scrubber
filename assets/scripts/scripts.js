// Wait until the DOM has loaded before querying the document
      $(document).ready(function(){
        $('ul.tabs').each(function(){
          // For each set of tabs, we want to keep track of
          // which tab is active and it's associated content
          var $active, $content, $links = $(this).find('a');

          // If the location.hash matches one of the links, use that as the active tab.
          // If no match is found, use the first link as the initial active tab.
          $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
          $active.addClass('active');

          $content = $($active[0].hash);

          // Hide the remaining content
          $links.not($active).each(function () {
            $(this.hash).hide();
          });

          // Bind the click event handler
          $(this).on('click', 'a', function(e){
            // Make the old tab inactive.
            $active.removeClass('active');
            $content.hide();

            // Update the variables with the new link and content
            $active = $(this);
            $content = $(this.hash);

            // Make the tab active.
            $active.addClass('active');
            $content.show();

            // Prevent the anchor's default click action
            e.preventDefault();
          });
        });
      });



$( document ).ready(function() {
  $(function() {
    $( "#up" ).click(function(){
      $('#content-reviews-wrap').animate({scrollTop: $('#content-reviews-wrap')[0]}, 1000);
    });

    $( "#down" ).click(function(){
      $('#content-reviews-wrap').animate({scrollTop: $('#content-reviews-wrap').offset().top}, 1000);
    });
  });
});




window.onload = init;

var intervalID;

function init() {

  shuffle(items);

  var $slideHolder = document.getElementById('slideHolder');
  var $thumbnailHolder = document.getElementById('thumbnailHolder');

//create the slides - reference the source
// put them in the #slideholder
for (var i = 0; i < items.length; i++) {
  var newImage = document.createElement("img");
  newImage.src = "assets/slideshow/" + items[i].filename;
  var $slideHolder = document.getElementById('slideHolder');
  $slideHolder.appendChild(newImage);

  if (i > 0) {
    newImage.style.display = "none";
  }
}

// create the thumbnails
// put thumbs in #thumbnailHolder
for (var i = 0; i < items.length; i++) {
  var newThumb = document.createElement("img");
  newThumb.src = "assets/slideshow/" + items[i].filename;
  $thumbnailHolder.appendChild(newThumb);
  newThumb.onclick = thumbClicked;

  newThumb.slideNumber = i;
  newThumb.setAttribute("data-slide-number", i);
};

// make thumbs "active"



// make next and previous "active"

var $next = document.getElementById("next");
var $previous = document.getElementById("previous");

$next.onclick = nextClicked;
$previous.onclick = previousClicked;

changeSlide();

intervalID = setInterval(autoAdvance, 2000);

}


function autoAdvance() {
  clearInterval(intervalID); // to stop texting

  slideNumber++;
  if (slideNumber >= items.length) {
      // go back to 0
      slideNumber = 0;
    }
    changeSlide();
  }


  function nextClicked() {
  clearInterval(intervalID); // to stop texting

  slideNumber++;
  if (slideNumber >= items.length) {
      // go back to 0
      slideNumber = 0;
    }
    changeSlide();
  }

  function previousClicked() {
    clearInterval(intervalID); // to stop texting
    slideNumber--;
    if (slideNumber < 0) {
      // go back to 0
      slideNumber = items.length - 1;
    }
    changeSlide();
  }

  function thumbClicked() {
    console.log("Thumb");
    clearInterval(intervalID);
  // change slide number to the appropiate number]
  slideNumber = this.getAttribute("data-slide-number");

  // and then,
  changeSlide();
}

// function that
  // changes slide
  // changes title
  // change description

  var slideNumber = 0;

  function changeSlide () {

    var $slideHolder = document.getElementById('slideHolder');
    var $slides = $slideHolder.children;

    for (var i = 0; i < $slides.length; i++) {
      if (slideNumber == i) {
        $slides[i].style.display = "block";
      } else {
        $slides[i].style.display = "none";
      }
    };


    var $thumbnailHolder = document.getElementById('thumbnailHolder');
    var $thumbs = $thumbnailHolder.children;
    console.log($thumbs);

    for (var i = 0; i < $thumbs.length; i++) {
      if ($thumbs[i].getAttribute("data-slide-number") === slideNumber) {
        $thumbs[i].className = "active";
      } else {
        $thumbs[i].className = "";
      }
    };
  }


jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;

  $('#slider').css({ width: slideWidth, height: slideHeight });

  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});


$(document).ready(function(){


  //----------Select the first tab and div by default

  $('#vertical_tab_nav > ul > li > a').eq(0).addClass( "selected" );
  $('#vertical_tab_nav > div > article').eq(0).css('display','block');


  //---------- This assigns an onclick event to each tab link("a" tag) and passes a parameter to the showHideTab() function

    $('#vertical_tab_nav > ul').click(function(e){

      if($(e.target).is("a")){

        /*Handle Tab Nav*/
        $('#vertical_tab_nav > ul > li > a').removeClass( "selected");
        $(e.target).addClass( "selected");

        /*Handles Tab Content*/
        var clicked_index = $("a",this).index(e.target);
        $('#vertical_tab_nav > div > article').css('display','none');
        $('#vertical_tab_nav > div > article').eq(clicked_index).fadeIn();

      }

        $(this).blur();
        return false;

    });


});//end ready







