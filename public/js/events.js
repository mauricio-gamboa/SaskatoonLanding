

    $(document).ready(function() {
     
    var owl = $("#owl-demo");
     
    owl.owlCarousel({
    items : 4, //10 items above 1000px browser width
    itemsDesktop : [1000,4], //5 items between 1000px and 901px
    itemsDesktopSmall : [900,3], // betweem 900px and 601px
    itemsTablet: [600,2], //2 items between 600 and 0
    itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });
     
    // Custom Navigation Events
    $(".next").click(function(){
    owl.trigger('owl.next');
    })
    $(".prev").click(function(){
    owl.trigger('owl.prev');
    })
    $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
    owl.trigger('owl.stop');
    })
     
    });

    //tooltip
//     $('#options-btn').click(function(){
//   $('#tooltip').toggle();
// });


    $('.bullets').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('open')) {
            $('#tooltip').slideUp('fast', function() {

            });
            $(this).removeClass('open');
        } else {
            $('#tooltip').slideDown('fast', function() {

            });
            $(this).addClass('open');
        }

    });

$('#example').popover(options);


//image background


